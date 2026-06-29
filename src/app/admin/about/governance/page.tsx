"use client";

import { useState, useEffect } from "react";
import {
  Scale,
  Plus,
  Edit,
  Trash2,
  Download as DownloadIcon,
  CheckCircle,
  Clock,
  Save,
  X,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GovernancePrinciple {
  id: string;
  principle: string;
  description: string;
  purpose: string;
  implementation: string;
  relatedPolicies: string[];
  downloads: string[];
  order: number;
  published: boolean;
}

export default function GovernanceManagement() {
  const [principles, setPrinciples] = useState<GovernancePrinciple[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    principle: "",
    description: "",
    purpose: "",
    implementation: "",
    relatedPolicies: "",
    downloads: "",
  });

  useEffect(() => {
    loadPrinciples();
  }, []);

  const loadPrinciples = async () => {
    try {
      const response = await fetch("/api/admin/about/governance");
      const data = await response.json();
      setPrinciples(data);
    } catch (error) {
      console.error("Failed to load governance principles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const relatedPolicies = formData.relatedPolicies.split(",").map(s => s.trim()).filter(s => s);
      const downloads = formData.downloads.split("\n").filter(d => d.trim());

      const payload = {
        principle: formData.principle,
        description: formData.description,
        purpose: formData.purpose,
        implementation: formData.implementation,
        relatedPolicies: JSON.stringify(relatedPolicies),
        downloads: JSON.stringify(downloads),
      };

      if (editingId) {
        await fetch(`/api/admin/about/governance/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/governance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ principle: "", description: "", purpose: "", implementation: "", relatedPolicies: "", downloads: "" });
      loadPrinciples();
    } catch (error) {
      console.error("Failed to save governance principle:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this governance principle?")) return;
    try {
      await fetch(`/api/admin/about/governance/${id}`, { method: "DELETE" });
      loadPrinciples();
    } catch (error) {
      console.error("Failed to delete governance principle:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/governance/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadPrinciples();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (principle: GovernancePrinciple) => {
    setEditingId(principle.id);
    setFormData({
      principle: principle.principle,
      description: principle.description,
      purpose: principle.purpose,
      implementation: principle.implementation,
      relatedPolicies: Array.isArray(principle.relatedPolicies) ? principle.relatedPolicies.join(", ") : "",
      downloads: Array.isArray(principle.downloads) ? principle.downloads.join("\n") : "",
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Governance Principles (L.I.G.-ON)</h1>
          <p className="text-gray-600">Manage the L.I.G.-ON governance principles</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ principle: "", description: "", purpose: "", implementation: "", relatedPolicies: "", downloads: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Principle
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
                {editingId ? "Edit Governance Principle" : "Add New Governance Principle"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Principle Name</label>
                <input
                  type="text"
                  value={formData.principle}
                  onChange={(e) => setFormData({ ...formData, principle: e.target.value })}
                  placeholder="e.g., Leadership"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this governance principle..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  placeholder="What is the purpose of this principle?"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Implementation</label>
                <textarea
                  value={formData.implementation}
                  onChange={(e) => setFormData({ ...formData, implementation: e.target.value })}
                  placeholder="How is this principle implemented?"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Related Policies (comma-separated IDs)
                </label>
                <input
                  type="text"
                  value={formData.relatedPolicies}
                  onChange={(e) => setFormData({ ...formData, relatedPolicies: e.target.value })}
                  placeholder="policy-id-1, policy-id-2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Downloads (one per line)
                </label>
                <textarea
                  value={formData.downloads}
                  onChange={(e) => setFormData({ ...formData, downloads: e.target.value })}
                  placeholder="/docs/governance/leadership.pdf&#10;/docs/governance/implementation-guide.pdf"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Principle
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {principles.map((principle) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{principle.principle}</h3>
                  <p className="text-sm text-gray-600 mt-1">{principle.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleTogglePublish(principle.id, principle.published)}
                  className={`p-2 rounded-lg transition-colors ${
                    principle.published
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                  }`}
                >
                  {principle.published ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Clock className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => handleEdit(principle)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Edit className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDelete(principle.id)}
                  className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Purpose</h4>
                <p className="text-sm text-gray-600">{principle.purpose}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Implementation</h4>
                <p className="text-sm text-gray-600">{principle.implementation}</p>
              </div>
            </div>

            {Array.isArray(principle.downloads) && principle.downloads.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Downloads</h4>
                <div className="flex flex-wrap gap-2">
                  {principle.downloads.map((download, i) => (
                    <span key={i} className="flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">
                      <DownloadIcon className="w-4 h-4" />
                      {download.split("/").pop()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {principles.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Scale className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No governance principles yet</h3>
            <p className="text-gray-600 mb-4">Start defining the L.I.G.-ON governance principles by adding the first one.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ principle: "", description: "", purpose: "", implementation: "", relatedPolicies: "", downloads: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Principle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
