"use client";

import { useState, useEffect } from "react";
import {
  Building,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Save,
  X,
  User,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OrganizationalRole {
  id: string;
  position: string;
  office: string;
  name: string;
  biography: string;
  photo?: string;
  responsibilities: string[];
  email?: string;
  phone?: string;
  parentId?: string;
  order: number;
  published: boolean;
}

export default function OrganizationManagement() {
  const [roles, setRoles] = useState<OrganizationalRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    office: "",
    name: "",
    biography: "",
    photo: "",
    responsibilities: "",
    email: "",
    phone: "",
    parentId: "",
  });

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    try {
      const response = await fetch("/api/admin/about/organization");
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error("Failed to load organizational roles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const responsibilities = formData.responsibilities.split("\n").filter(r => r.trim());

      const payload = {
        position: formData.position,
        office: formData.office,
        name: formData.name,
        biography: formData.biography,
        photo: formData.photo,
        responsibilities: JSON.stringify(responsibilities),
        email: formData.email,
        phone: formData.phone,
        parentId: formData.parentId || null,
      };

      if (editingId) {
        await fetch(`/api/admin/about/organization/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/organization", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ position: "", office: "", name: "", biography: "", photo: "", responsibilities: "", email: "", phone: "", parentId: "" });
      loadRoles();
    } catch (error) {
      console.error("Failed to save organizational role:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this role?")) return;
    try {
      await fetch(`/api/admin/about/organization/${id}`, { method: "DELETE" });
      loadRoles();
    } catch (error) {
      console.error("Failed to delete role:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/organization/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadRoles();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (role: OrganizationalRole) => {
    setEditingId(role.id);
    setFormData({
      position: role.position,
      office: role.office,
      name: role.name,
      biography: role.biography,
      photo: role.photo || "",
      responsibilities: Array.isArray(role.responsibilities) ? role.responsibilities.join("\n") : "",
      email: role.email || "",
      phone: role.phone || "",
      parentId: role.parentId || "",
    });
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizational Structure</h1>
          <p className="text-gray-600">Manage the organizational hierarchy and personnel</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ position: "", office: "", name: "", biography: "", photo: "", responsibilities: "", email: "", phone: "", parentId: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Role
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingId ? "Edit Role" : "Add New Role"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="e.g., Executive Director"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Office</label>
                <input
                  type="text"
                  value={formData.office}
                  onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                  placeholder="e.g., Executive Office"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Juan Dela Cruz"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL</label>
                <input
                  type="text"
                  value={formData.photo}
                  onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                  placeholder="/images/organization/juan-dela-cruz.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@primesdn.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+63 912 345 6789"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Biography</label>
                <textarea
                  value={formData.biography}
                  onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
                  placeholder="Brief biography..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsibilities (one per line)
                </label>
                <textarea
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                  placeholder="Strategic planning&#10;Team management&#10;Stakeholder relations"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Parent Role (for hierarchy)</label>
                <select
                  value={formData.parentId}
                  onChange={(e) => setFormData({ ...formData, parentId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">No parent (top level)</option>
                  {roles.filter(r => r.id !== editingId).map((role) => (
                    <option key={role.id} value={role.id}>{role.position} - {role.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Role
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {roles.map((role) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                {role.photo ? (
                  <img src={role.photo} alt={role.name} className="w-16 h-16 rounded-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-teal-600" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{role.position}</h3>
                    <p className="text-sm text-gray-600">{role.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{role.office}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleTogglePublish(role.id, role.published)}
                      className={`p-2 rounded-lg transition-colors ${
                        role.published
                          ? "bg-green-100 text-green-600 hover:bg-green-200"
                          : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                      }`}
                    >
                      {role.published ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleEdit(role)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(role.id)}
                      className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">{role.biography}</p>

                <div className="flex items-center gap-4 mb-3">
                  {role.email && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{role.email}</span>
                    </div>
                  )}
                  {role.phone && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{role.phone}</span>
                    </div>
                  )}
                </div>

                {Array.isArray(role.responsibilities) && role.responsibilities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {role.responsibilities.slice(0, 3).map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                      {role.responsibilities.length > 3 && (
                        <li className="text-teal-600">+{role.responsibilities.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {roles.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No organizational roles yet</h3>
            <p className="text-gray-600 mb-4">Start building the organizational structure by adding the first role.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ position: "", office: "", name: "", biography: "", photo: "", responsibilities: "", email: "", phone: "", parentId: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Role
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
