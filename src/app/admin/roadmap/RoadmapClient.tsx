"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, Layers, Calendar, Target } from "lucide-react";

interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
  desktopPos: string;
  coords: string;
  image: string | null;
  initiatives: string;
  stats: string;
  impact: string | null;
  order: number;
  published: boolean;
}

interface Theme {
  id: string;
  label: string;
  icon: string;
  order: number;
}

interface RoadmapClientProps {
  milestones: Milestone[];
  themes: Theme[];
}

export function RoadmapClient({ milestones: initialMilestones, themes: initialThemes }: RoadmapClientProps) {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [themes, setThemes] = useState(initialThemes);
  const [activeTab, setActiveTab] = useState<"milestones" | "themes">("milestones");
  const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null);
  const [editingTheme, setEditingTheme] = useState<Theme | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveMilestone = async (milestone: Milestone) => {
    try {
      const response = await fetch("/api/admin/roadmap/milestones", {
        method: milestone.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(milestone),
      });

      if (response.ok) {
        const updated = await response.json();
        if (milestone.id) {
          setMilestones(milestones.map((m) => (m.id === milestone.id ? updated : m)));
        } else {
          setMilestones([...milestones, updated]);
        }
        setEditingMilestone(null);
        setIsCreating(false);
      }
    } catch (error) {
      console.error("Failed to save milestone:", error);
    }
  };

  const handleDeleteMilestone = async (id: string) => {
    if (!confirm("Are you sure you want to delete this milestone?")) return;

    try {
      const response = await fetch(`/api/admin/roadmap/milestones?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMilestones(milestones.filter((m) => m.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete milestone:", error);
    }
  };

  const handleSaveTheme = async (theme: Theme) => {
    try {
      const response = await fetch("/api/admin/roadmap/themes", {
        method: theme.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(theme),
      });

      if (response.ok) {
        const updated = await response.json();
        if (theme.id) {
          setThemes(themes.map((t) => (t.id === theme.id ? updated : t)));
        } else {
          setThemes([...themes, updated]);
        }
        setEditingTheme(null);
        setIsCreating(false);
      }
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  };

  const handleDeleteTheme = async (id: string) => {
    if (!confirm("Are you sure you want to delete this theme?")) return;

    try {
      const response = await fetch(`/api/admin/roadmap/themes?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setThemes(themes.filter((t) => t.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete theme:", error);
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("milestones")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "milestones"
              ? "text-maroon-900 border-b-2 border-maroon-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center gap-2">
            <Target size={18} />
            Milestones
          </div>
        </button>
        <button
          onClick={() => setActiveTab("themes")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "themes"
              ? "text-maroon-900 border-b-2 border-maroon-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center gap-2">
            <Layers size={18} />
            Themes
          </div>
        </button>
      </div>

      {/* Milestones Tab */}
      {activeTab === "milestones" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Roadmap Milestones</h2>
            <button
              onClick={() => {
                setIsCreating(true);
                setEditingMilestone({
                  id: "",
                  year: new Date().getFullYear(),
                  title: "",
                  description: "",
                  desktopPos: '{"left":"50%","top":"50%"}',
                  coords: '{"x":500,"y":180}',
                  image: null,
                  initiatives: "[]",
                  stats: "[]",
                  impact: "",
                  order: milestones.length,
                  published: false,
                });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-maroon-900 text-white rounded-lg hover:bg-maroon-800 transition-colors"
            >
              <Plus size={18} />
              Add Milestone
            </button>
          </div>

          <div className="grid gap-4">
            {milestones.map((milestone) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-maroon-900">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {milestone.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          milestone.published
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {milestone.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                    {milestone.impact && (
                      <p className="text-gray-500 text-xs italic">"{milestone.impact}"</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingMilestone(milestone)}
                      className="p-2 text-gray-600 hover:text-maroon-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteMilestone(milestone.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Themes Tab */}
      {activeTab === "themes" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Roadmap Themes</h2>
            <button
              onClick={() => {
                setIsCreating(true);
                setEditingTheme({
                  id: "",
                  label: "",
                  icon: "Layers",
                  order: themes.length,
                });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-maroon-900 text-white rounded-lg hover:bg-maroon-800 transition-colors"
            >
              <Plus size={18} />
              Add Theme
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 bg-maroon-100 rounded-lg flex items-center justify-center">
                    <Layers size={20} className="text-maroon-900" />
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setEditingTheme(theme)}
                      className="p-1 text-gray-600 hover:text-maroon-900 transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteTheme(theme.id)}
                      className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{theme.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Milestone Edit Modal */}
      <AnimatePresence>
        {editingMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isCreating ? "Add Milestone" : "Edit Milestone"}
                </h3>
                <button
                  onClick={() => {
                    setEditingMilestone(null);
                    setIsCreating(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input
                    type="number"
                    value={editingMilestone.year}
                    onChange={(e) =>
                      setEditingMilestone({
                        ...editingMilestone,
                        year: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editingMilestone.title}
                    onChange={(e) =>
                      setEditingMilestone({ ...editingMilestone, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={editingMilestone.description}
                    onChange={(e) =>
                      setEditingMilestone({ ...editingMilestone, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Impact Statement</label>
                  <textarea
                    value={editingMilestone.impact || ""}
                    onChange={(e) =>
                      setEditingMilestone({ ...editingMilestone, impact: e.target.value })
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={editingMilestone.published}
                    onChange={(e) =>
                      setEditingMilestone({ ...editingMilestone, published: e.target.checked })
                    }
                    className="rounded border-gray-300 text-maroon-900 focus:ring-maroon-900"
                  />
                  <label htmlFor="published" className="text-sm text-gray-700">Published</label>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setEditingMilestone(null);
                    setIsCreating(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveMilestone(editingMilestone)}
                  className="flex items-center gap-2 px-4 py-2 bg-maroon-900 text-white rounded-lg hover:bg-maroon-800 transition-colors"
                >
                  <Save size={18} />
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Edit Modal */}
      <AnimatePresence>
        {editingTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isCreating ? "Add Theme" : "Edit Theme"}
                </h3>
                <button
                  onClick={() => {
                    setEditingTheme(null);
                    setIsCreating(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                  <input
                    type="text"
                    value={editingTheme.label}
                    onChange={(e) =>
                      setEditingTheme({ ...editingTheme, label: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                  <input
                    type="text"
                    value={editingTheme.icon}
                    onChange={(e) =>
                      setEditingTheme({ ...editingTheme, icon: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setEditingTheme(null);
                    setIsCreating(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveTheme(editingTheme)}
                  className="flex items-center gap-2 px-4 py-2 bg-maroon-900 text-white rounded-lg hover:bg-maroon-800 transition-colors"
                >
                  <Save size={18} />
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
