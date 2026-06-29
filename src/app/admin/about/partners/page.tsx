"use client";

import { useState, useEffect } from "react";
import {
  Handshake,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Save,
  X,
  Globe,
  Building,
  GraduationCap,
  Microscope,
  Briefcase,
  Landmark,
  Users,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StrategicPartner {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  logo?: string;
  website?: string;
  relatedProjects: string[];
  order: number;
  published: boolean;
}

const categoryIcons: Record<string, any> = {
  "National Government Agencies": Landmark,
  "Provincial Government": Building,
  "Local Government Units": Building,
  "Academic Institutions": GraduationCap,
  "Research Organizations": Microscope,
  "Industry Partners": Briefcase,
  "Private Sector": Briefcase,
  "Development Partners": Heart,
};

export default function PartnersManagement() {
  const [partners, setPartners] = useState<StrategicPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "",
    description: "",
    logo: "",
    website: "",
    relatedProjects: "",
  });

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = async () => {
    try {
      const response = await fetch("/api/admin/about/partners");
      const data = await response.json();
      setPartners(data);
    } catch (error) {
      console.error("Failed to load strategic partners:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const relatedProjects = formData.relatedProjects.split("\n").filter(p => p.trim());

      const payload = {
        name: formData.name,
        slug: formData.slug,
        category: formData.category,
        description: formData.description,
        logo: formData.logo,
        website: formData.website,
        relatedProjects: JSON.stringify(relatedProjects),
      };

      if (editingId) {
        await fetch(`/api/admin/about/partners/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/partners", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ name: "", slug: "", category: "", description: "", logo: "", website: "", relatedProjects: "" });
      loadPartners();
    } catch (error) {
      console.error("Failed to save strategic partner:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this partner?")) return;
    try {
      await fetch(`/api/admin/about/partners/${id}`, { method: "DELETE" });
      loadPartners();
    } catch (error) {
      console.error("Failed to delete partner:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/partners/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadPartners();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (partner: StrategicPartner) => {
    setEditingId(partner.id);
    setFormData({
      name: partner.name,
      slug: partner.slug,
      category: partner.category,
      description: partner.description,
      logo: partner.logo || "",
      website: partner.website || "",
      relatedProjects: Array.isArray(partner.relatedProjects) ? partner.relatedProjects.join("\n") : "",
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Strategic Partners</h1>
          <p className="text-gray-600">Manage strategic partner organizations</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ name: "", slug: "", category: "", description: "", logo: "", website: "", relatedProjects: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Partner
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
                {editingId ? "Edit Partner" : "Add New Partner"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Department of Science and Technology"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
                  placeholder="department-of-science-and-technology"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  <option value="National Government Agencies">National Government Agencies</option>
                  <option value="Provincial Government">Provincial Government</option>
                  <option value="Local Government Units">Local Government Units</option>
                  <option value="Academic Institutions">Academic Institutions</option>
                  <option value="Research Organizations">Research Organizations</option>
                  <option value="Industry Partners">Industry Partners</option>
                  <option value="Private Sector">Private Sector</option>
                  <option value="Development Partners">Development Partners</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this partner organization..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo URL</label>
                <input
                  type="text"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  placeholder="/images/partners/dost-logo.png"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://www.dost.gov.ph"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Related Projects (one per line)
                </label>
                <textarea
                  value={formData.relatedProjects}
                  onChange={(e) => setFormData({ ...formData, relatedProjects: e.target.value })}
                  placeholder="Digital Innovation Hub&#10;Startup Incubation Program&#10;Research Collaboration"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
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
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Partner
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => {
          const Icon = categoryIcons[partner.category] || Building;
          return (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <Icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleTogglePublish(partner.id, partner.published)}
                      className={`p-2 rounded-lg transition-colors ${
                        partner.published
                          ? "bg-green-100 text-green-600 hover:bg-green-200"
                          : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                      }`}
                    >
                      {partner.published ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleEdit(partner)}
                      className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(partner.id)}
                      className="p-2 rounded-lg bg-white/20 text-white hover:bg-red-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{partner.name}</h3>
              </div>

              <div className="p-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full mb-3 inline-block">
                  {partner.category}
                </span>
                <p className="text-gray-600 mb-4">{partner.description}</p>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </a>
                )}

                {Array.isArray(partner.relatedProjects) && partner.relatedProjects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Related Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.relatedProjects.slice(0, 3).map((project, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {project}
                        </span>
                      ))}
                      {partner.relatedProjects.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{partner.relatedProjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {partners.length === 0 && (
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Handshake className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No strategic partners yet</h3>
            <p className="text-gray-600 mb-4">Start building partnerships by adding the first strategic partner.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ name: "", slug: "", category: "", description: "", logo: "", website: "", relatedProjects: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Partner
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
