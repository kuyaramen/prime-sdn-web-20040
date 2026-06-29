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
  Target,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MissionCard {
  id: string;
  letter: string;
  title: string;
  description: string;
  objectives: string[];
  programs: string[];
  relatedActivities: string[];
  relatedNews: string[];
  icon?: string;
  image?: string;
  order: number;
  published: boolean;
}

export default function MissionManagement() {
  const [cards, setCards] = useState<MissionCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    letter: "",
    title: "",
    description: "",
    objectives: "",
    programs: "",
    relatedActivities: "",
    relatedNews: "",
    icon: "",
  });

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const response = await fetch("/api/admin/about/mission");
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Failed to load mission cards:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const objectives = formData.objectives.split("\n").filter(o => o.trim());
      const programs = formData.programs.split("\n").filter(p => p.trim());
      const relatedActivities = formData.relatedActivities.split(",").map(s => s.trim()).filter(s => s);
      const relatedNews = formData.relatedNews.split(",").map(s => s.trim()).filter(s => s);

      const payload = {
        letter: formData.letter,
        title: formData.title,
        description: formData.description,
        objectives: JSON.stringify(objectives),
        programs: JSON.stringify(programs),
        relatedActivities: JSON.stringify(relatedActivities),
        relatedNews: JSON.stringify(relatedNews),
        icon: formData.icon,
      };

      if (editingId) {
        await fetch(`/api/admin/about/mission/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/mission", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ letter: "", title: "", description: "", objectives: "", programs: "", relatedActivities: "", relatedNews: "", icon: "" });
      loadCards();
    } catch (error) {
      console.error("Failed to save mission card:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this mission card?")) return;
    try {
      await fetch(`/api/admin/about/mission/${id}`, { method: "DELETE" });
      loadCards();
    } catch (error) {
      console.error("Failed to delete mission card:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/mission/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadCards();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (card: MissionCard) => {
    setEditingId(card.id);
    setFormData({
      letter: card.letter,
      title: card.title,
      description: card.description,
      objectives: Array.isArray(card.objectives) ? card.objectives.join("\n") : "",
      programs: Array.isArray(card.programs) ? card.programs.join("\n") : "",
      relatedActivities: Array.isArray(card.relatedActivities) ? card.relatedActivities.join(", ") : "",
      relatedNews: Array.isArray(card.relatedNews) ? card.relatedNews.join(", ") : "",
      icon: card.icon || "",
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mission (SMART)</h1>
          <p className="text-gray-600">Manage the SMART mission cards and programs</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ letter: "", title: "", description: "", objectives: "", programs: "", relatedActivities: "", relatedNews: "", icon: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Mission Card
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
                {editingId ? "Edit Mission Card" : "Add New Mission Card"}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Letter (S, M, A, R, T)</label>
                <select
                  value={formData.letter}
                  onChange={(e) => setFormData({ ...formData, letter: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select letter</option>
                  <option value="S">S - Strategic</option>
                  <option value="M">M - Measurable</option>
                  <option value="A">A - Achievable</option>
                  <option value="R">R - Relevant</option>
                  <option value="T">T - Time-bound</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Icon (Lucide icon name)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g., Target, Zap, Globe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Strategic Innovation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this mission card..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objectives (one per line)
                </label>
                <textarea
                  value={formData.objectives}
                  onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                  placeholder="Develop innovation hubs&#10;Support local startups&#10;Build digital infrastructure"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Programs (one per line)
                </label>
                <textarea
                  value={formData.programs}
                  onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
                  placeholder="Startup Incubation Program&#10;Digital Skills Training&#10;Innovation Grants"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Related Activities (comma-separated IDs)
                </label>
                <input
                  type="text"
                  value={formData.relatedActivities}
                  onChange={(e) => setFormData({ ...formData, relatedActivities: e.target.value })}
                  placeholder="activity-id-1, activity-id-2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Related News (comma-separated IDs)
                </label>
                <input
                  type="text"
                  value={formData.relatedNews}
                  onChange={(e) => setFormData({ ...formData, relatedNews: e.target.value })}
                  placeholder="news-id-1, news-id-2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Mission Card
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{card.letter}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTogglePublish(card.id, card.published)}
                    className={`p-2 rounded-lg transition-colors ${
                      card.published
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    }`}
                  >
                    {card.published ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleEdit(card)}
                    className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(card.id)}
                    className="p-2 rounded-lg bg-white/20 text-white hover:bg-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">{card.description}</p>

              {Array.isArray(card.objectives) && card.objectives.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Objectives</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {card.objectives.slice(0, 3).map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                    {card.objectives.length > 3 && (
                      <li className="text-pink-600">+{card.objectives.length - 3} more</li>
                    )}
                  </ul>
                </div>
              )}

              {Array.isArray(card.programs) && card.programs.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {card.programs.slice(0, 3).map((prog, i) => (
                      <span key={i} className="px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-full">
                        {prog}
                      </span>
                    ))}
                    {card.programs.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{card.programs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {cards.length === 0 && (
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No mission cards yet</h3>
            <p className="text-gray-600 mb-4">Start building the SMART mission by adding the first card.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ letter: "", title: "", description: "", objectives: "", programs: "", relatedActivities: "", relatedNews: "", icon: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Mission Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
