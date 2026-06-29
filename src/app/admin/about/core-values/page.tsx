"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Save,
  X,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CoreValue {
  id: string;
  name: string;
  description: string;
  icon?: string;
  illustration?: string;
  practicalExamples: string[];
  order: number;
  published: boolean;
}

export default function CoreValuesManagement() {
  const [values, setValues] = useState<CoreValue[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "",
    illustration: "",
    practicalExamples: "",
  });

  useEffect(() => {
    loadValues();
  }, []);

  const loadValues = async () => {
    try {
      const response = await fetch("/api/admin/about/core-values");
      const data = await response.json();
      setValues(data);
    } catch (error) {
      console.error("Failed to load core values:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const practicalExamples = formData.practicalExamples.split("\n").filter(e => e.trim());

      const payload = {
        name: formData.name,
        description: formData.description,
        icon: formData.icon,
        illustration: formData.illustration,
        practicalExamples: JSON.stringify(practicalExamples),
      };

      if (editingId) {
        await fetch(`/api/admin/about/core-values/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/core-values", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ name: "", description: "", icon: "", illustration: "", practicalExamples: "" });
      loadValues();
    } catch (error) {
      console.error("Failed to save core value:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this core value?")) return;
    try {
      await fetch(`/api/admin/about/core-values/${id}`, { method: "DELETE" });
      loadValues();
    } catch (error) {
      console.error("Failed to delete core value:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/core-values/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadValues();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (value: CoreValue) => {
    setEditingId(value.id);
    setFormData({
      name: value.name,
      description: value.description,
      icon: value.icon || "",
      illustration: value.illustration || "",
      practicalExamples: Array.isArray(value.practicalExamples) ? value.practicalExamples.join("\n") : "",
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Core Values (SURIGAONON)</h1>
          <p className="text-gray-600">Manage the SURIGAONON core values and principles</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ name: "", description: "", icon: "", illustration: "", practicalExamples: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Core Value
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
                {editingId ? "Edit Core Value" : "Add New Core Value"}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Icon (Lucide icon name)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g., Heart, Shield, Star"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Illustration URL</label>
                <input
                  type="text"
                  value={formData.illustration}
                  onChange={(e) => setFormData({ ...formData, illustration: e.target.value })}
                  placeholder="/images/values/service.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this core value..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Practical Examples (one per line)
                </label>
                <textarea
                  value={formData.practicalExamples}
                  onChange={(e) => setFormData({ ...formData, practicalExamples: e.target.value })}
                  placeholder="Community service programs&#10;Volunteer initiatives&#10;Public outreach"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Core Value
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  {value.icon ? (
                    <Star className="w-8 h-8 text-white" />
                  ) : (
                    <Heart className="w-8 h-8 text-white" />
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTogglePublish(value.id, value.published)}
                    className={`p-2 rounded-lg transition-colors ${
                      value.published
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    }`}
                  >
                    {value.published ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleEdit(value)}
                    className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(value.id)}
                    className="p-2 rounded-lg bg-white/20 text-white hover:bg-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{value.name}</h3>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">{value.description}</p>

              {Array.isArray(value.practicalExamples) && value.practicalExamples.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Practical Examples</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {value.practicalExamples.slice(0, 3).map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                    {value.practicalExamples.length > 3 && (
                      <li className="text-red-600">+{value.practicalExamples.length - 3} more</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {values.length === 0 && (
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No core values yet</h3>
            <p className="text-gray-600 mb-4">Start defining the SURIGAONON values by adding the first core value.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ name: "", description: "", icon: "", illustration: "", practicalExamples: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Core Value
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
