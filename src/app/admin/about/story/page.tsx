"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import {
  History,
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  Calendar,
  CheckCircle,
  Clock,
  GripVertical,
  Save,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StoryMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  achievements: string[];
  image?: string;
  statistics: Record<string, string>;
  order: number;
  published: boolean;
}

export default function StoryManagement() {
  const [milestones, setMilestones] = useState<StoryMilestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    description: "",
    achievements: "",
    statistics: "",
  });

  useEffect(() => {
    loadMilestones();
  }, []);

  const loadMilestones = async () => {
    try {
      const response = await fetch("/api/admin/about/story");
      const data = await response.json();
      setMilestones(data);
    } catch (error) {
      console.error("Failed to load milestones:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const achievements = formData.achievements.split("\n").filter(a => a.trim());
      const stats = formData.statistics.split("\n").reduce((acc, line) => {
        const [key, value] = line.split(":").map(s => s.trim());
        if (key && value) acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      const payload = {
        year: formData.year,
        title: formData.title,
        description: formData.description,
        achievements: JSON.stringify(achievements),
        statistics: JSON.stringify(stats),
      };

      if (editingId) {
        await fetch(`/api/admin/about/story/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/story", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ year: "", title: "", description: "", achievements: "", statistics: "" });
      loadMilestones();
    } catch (error) {
      console.error("Failed to save milestone:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this milestone?")) return;
    try {
      await fetch(`/api/admin/about/story/${id}`, { method: "DELETE" });
      loadMilestones();
    } catch (error) {
      console.error("Failed to delete milestone:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/story/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadMilestones();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (milestone: StoryMilestone) => {
    setEditingId(milestone.id);
    setFormData({
      year: milestone.year,
      title: milestone.title,
      description: milestone.description,
      achievements: Array.isArray(milestone.achievements) ? milestone.achievements.join("\n") : "",
      statistics: typeof milestone.statistics === "object" 
        ? Object.entries(milestone.statistics).map(([k, v]) => `${k}: ${v}`).join("\n")
        : "",
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Story</h1>
          <p className="text-gray-600">Manage the PRIME SDN timeline and milestones</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ year: "", title: "", description: "", achievements: "", statistics: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Milestone
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
                {editingId ? "Edit Milestone" : "Add New Milestone"}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  placeholder="e.g., 2020"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Foundation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this milestone..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Achievements (one per line)
                </label>
                <textarea
                  value={formData.achievements}
                  onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                  placeholder="Initial stakeholder meetings&#10;Partnership agreements signed&#10;Core team assembled"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Statistics (format: key: value, one per line)
                </label>
                <textarea
                  value={formData.statistics}
                  onChange={(e) => setFormData({ ...formData, statistics: e.target.value })}
                  placeholder="Partners: 5&#10;Meetings: 12&#10;Initiatives: 3"
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
                Save Milestone
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <GripVertical className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTogglePublish(milestone.id, milestone.published)}
                      className={`p-2 rounded-lg transition-colors ${
                        milestone.published
                          ? "bg-green-100 text-green-600 hover:bg-green-200"
                          : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                      }`}
                      title={milestone.published ? "Published" : "Draft"}
                    >
                      {milestone.published ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleEdit(milestone)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(milestone.id)}
                      className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>

                {milestone.image && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ImageIcon className="w-4 h-4" />
                      <span>Image uploaded</span>
                    </div>
                  </div>
                )}

                {Array.isArray(milestone.achievements) && milestone.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {milestone.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {typeof milestone.statistics === "object" && Object.keys(milestone.statistics).length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(milestone.statistics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                        <p className="text-xs text-gray-600 uppercase">{key}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {milestones.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No milestones yet</h3>
            <p className="text-gray-600 mb-4">Start building your timeline by adding the first milestone.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ year: "", title: "", description: "", achievements: "", statistics: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Milestone
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
