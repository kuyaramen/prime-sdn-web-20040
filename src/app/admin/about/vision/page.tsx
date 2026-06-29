"use client";

import { useState, useEffect } from "react";
import {
  Target,
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Save,
  X,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VisionLetter {
  id: string;
  letter: string;
  title: string;
  description: string;
  objectives: string[];
  timeline: string[];
  statistics: Record<string, string>;
  icon?: string;
  image?: string;
  order: number;
  published: boolean;
}

export default function VisionManagement() {
  const [letters, setLetters] = useState<VisionLetter[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    letter: "",
    title: "",
    description: "",
    objectives: "",
    timeline: "",
    statistics: "",
    icon: "",
  });

  useEffect(() => {
    loadLetters();
  }, []);

  const loadLetters = async () => {
    try {
      const response = await fetch("/api/admin/about/vision");
      const data = await response.json();
      setLetters(data);
    } catch (error) {
      console.error("Failed to load vision letters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const objectives = formData.objectives.split("\n").filter(o => o.trim());
      const timeline = formData.timeline.split("\n").filter(t => t.trim());
      const stats = formData.statistics.split("\n").reduce((acc, line) => {
        const [key, value] = line.split(":").map(s => s.trim());
        if (key && value) acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      const payload = {
        letter: formData.letter,
        title: formData.title,
        description: formData.description,
        objectives: JSON.stringify(objectives),
        timeline: JSON.stringify(timeline),
        statistics: JSON.stringify(stats),
        icon: formData.icon,
      };

      if (editingId) {
        await fetch(`/api/admin/about/vision/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/vision", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ letter: "", title: "", description: "", objectives: "", timeline: "", statistics: "", icon: "" });
      loadLetters();
    } catch (error) {
      console.error("Failed to save vision letter:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this vision letter?")) return;
    try {
      await fetch(`/api/admin/about/vision/${id}`, { method: "DELETE" });
      loadLetters();
    } catch (error) {
      console.error("Failed to delete vision letter:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/vision/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadLetters();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (letter: VisionLetter) => {
    setEditingId(letter.id);
    setFormData({
      letter: letter.letter,
      title: letter.title,
      description: letter.description,
      objectives: Array.isArray(letter.objectives) ? letter.objectives.join("\n") : "",
      timeline: Array.isArray(letter.timeline) ? letter.timeline.join("\n") : "",
      statistics: typeof letter.statistics === "object" 
        ? Object.entries(letter.statistics).map(([k, v]) => `${k}: ${v}`).join("\n")
        : "",
      icon: letter.icon || "",
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vision (PRIME 2055)</h1>
          <p className="text-gray-600">Manage the SDN PRIME 2055 vision letters and objectives</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ letter: "", title: "", description: "", objectives: "", timeline: "", statistics: "", icon: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Vision Letter
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
                {editingId ? "Edit Vision Letter" : "Add New Vision Letter"}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Letter (P, R, I, M, E)</label>
                <select
                  value={formData.letter}
                  onChange={(e) => setFormData({ ...formData, letter: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select letter</option>
                  <option value="P">P - Progressive</option>
                  <option value="R">R - Resilient</option>
                  <option value="I">I - Innovative</option>
                  <option value="M">M - Multidisciplinary</option>
                  <option value="E">E - Empowered</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Icon (Lucide icon name)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g., Target, Zap, Globe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Progressive Innovation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this vision letter..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objectives (one per line)
                </label>
                <textarea
                  value={formData.objectives}
                  onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                  placeholder="Foster digital innovation&#10;Build resilient infrastructure&#10;Empower communities"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline (one per line)
                </label>
                <textarea
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  placeholder="2025: Launch digital hubs&#10;2030: Full connectivity&#10;2040: Vision achieved"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Statistics (format: key: value, one per line)
                </label>
                <textarea
                  value={formData.statistics}
                  onChange={(e) => setFormData({ ...formData, statistics: e.target.value })}
                  placeholder="Communities: 50&#10;Startups: 100&#10;Jobs: 5000"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Vision Letter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {letters.map((letter) => (
          <motion.div
            key={letter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{letter.letter}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTogglePublish(letter.id, letter.published)}
                    className={`p-2 rounded-lg transition-colors ${
                      letter.published
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    }`}
                  >
                    {letter.published ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleEdit(letter)}
                    className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(letter.id)}
                    className="p-2 rounded-lg bg-white/20 text-white hover:bg-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{letter.title}</h3>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">{letter.description}</p>

              {Array.isArray(letter.objectives) && letter.objectives.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Objectives</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {letter.objectives.slice(0, 3).map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                    {letter.objectives.length > 3 && (
                      <li className="text-purple-600">+{letter.objectives.length - 3} more</li>
                    )}
                  </ul>
                </div>
              )}

              {typeof letter.statistics === "object" && Object.keys(letter.statistics).length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(letter.statistics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-purple-50 rounded-lg p-2 text-center">
                      <p className="text-lg font-bold text-purple-600">{value}</p>
                      <p className="text-xs text-gray-600">{key}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {letters.length === 0 && (
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No vision letters yet</h3>
            <p className="text-gray-600 mb-4">Start building the PRIME 2055 vision by adding the first letter.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ letter: "", title: "", description: "", objectives: "", timeline: "", statistics: "", icon: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Vision Letter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
