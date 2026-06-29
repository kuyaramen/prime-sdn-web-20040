"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  Plus,
  Edit,
  Trash2,
  Download as DownloadIcon,
  FileText,
  Search,
  Filter,
  Calendar,
  CheckCircle,
  Clock,
  Save,
  X,
  Upload,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Policy {
  id: string;
  title: string;
  type: string;
  refNumber: string;
  dateIssued: string;
  description: string;
  fileUrl?: string;
}

export default function PoliciesManagement() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    refNumber: "",
    dateIssued: "",
    description: "",
    fileUrl: "",
  });

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    try {
      const response = await fetch("/api/admin/about/policies");
      const data = await response.json();
      setPolicies(data);
    } catch (error) {
      console.error("Failed to load policies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        title: formData.title,
        type: formData.type,
        refNumber: formData.refNumber,
        dateIssued: new Date(formData.dateIssued),
        description: formData.description,
        fileUrl: formData.fileUrl,
      };

      if (editingId) {
        await fetch(`/api/admin/about/policies/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/policies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ title: "", type: "", refNumber: "", dateIssued: "", description: "", fileUrl: "" });
      loadPolicies();
    } catch (error) {
      console.error("Failed to save policy:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this policy?")) return;
    try {
      await fetch(`/api/admin/about/policies/${id}`, { method: "DELETE" });
      loadPolicies();
    } catch (error) {
      console.error("Failed to delete policy:", error);
    }
  };

  const handleEdit = (policy: Policy) => {
    setEditingId(policy.id);
    setFormData({
      title: policy.title,
      type: policy.type,
      refNumber: policy.refNumber,
      dateIssued: policy.dateIssued.split("T")[0],
      description: policy.description,
      fileUrl: policy.fileUrl || "",
    });
    setShowForm(true);
  };

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch = policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         policy.refNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || policy.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const policyTypes = [...new Set(policies.map((p) => p.type))];

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Policies & Governance</h1>
          <p className="text-gray-600">Manage policy documents and governance materials</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ title: "", type: "", refNumber: "", dateIssued: "", description: "", fileUrl: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Upload Policy
        </button>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search policies..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
          >
            <option value="all">All Types</option>
            {policyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
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
                {editingId ? "Edit Policy" : "Upload New Policy"}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Data Privacy Policy"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="Governance">Governance</option>
                  <option value="Operational">Operational</option>
                  <option value="Financial">Financial</option>
                  <option value="HR">HR</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reference Number</label>
                <input
                  type="text"
                  value={formData.refNumber}
                  onChange={(e) => setFormData({ ...formData, refNumber: e.target.value })}
                  placeholder="e.g., POL-2024-001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Issued</label>
                <input
                  type="date"
                  value={formData.dateIssued}
                  onChange={(e) => setFormData({ ...formData, dateIssued: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File URL</label>
                <input
                  type="text"
                  value={formData.fileUrl}
                  onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                  placeholder="/docs/policies/data-privacy.pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this policy..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Policy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Policy</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Reference</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date Issued</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredPolicies.map((policy) => (
              <tr key={policy.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{policy.title}</p>
                      <p className="text-sm text-gray-600">{policy.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900 font-mono">{policy.refNumber}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">{policy.type}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {new Date(policy.dateIssued).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {policy.fileUrl && (
                      <a
                        href={policy.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Download"
                      >
                        <DownloadIcon className="w-5 h-5 text-gray-600" />
                      </a>
                    )}
                    <button
                      onClick={() => handleEdit(policy)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(policy.id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPolicies.length === 0 && (
          <div className="p-12 text-center">
            <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No policies found</h3>
            <p className="text-gray-600 mb-4">Upload your first policy document to get started.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ title: "", type: "", refNumber: "", dateIssued: "", description: "", fileUrl: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Upload className="w-5 h-5" />
              Upload First Policy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
