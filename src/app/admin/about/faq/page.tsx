"use client";

import { useState, useEffect } from "react";
import {
  HelpCircle,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Save,
  X,
  GripVertical,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  published: boolean;
}

export default function FAQManagement() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
  });

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      const response = await fetch("/api/admin/about/faq");
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error("Failed to load FAQs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        question: formData.question,
        answer: formData.answer,
        category: formData.category,
      };

      if (editingId) {
        await fetch(`/api/admin/about/faq/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/faq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ question: "", answer: "", category: "" });
      loadFAQs();
    } catch (error) {
      console.error("Failed to save FAQ:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await fetch(`/api/admin/about/faq/${id}`, { method: "DELETE" });
      loadFAQs();
    } catch (error) {
      console.error("Failed to delete FAQ:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/faq/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadFAQs();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleEdit = (faq: FAQ) => {
    setEditingId(faq.id);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || "",
    });
    setShowForm(true);
  };

  const moveFAQ = async (id: string, direction: "up" | "down") => {
    const currentIndex = faqs.findIndex((f) => f.id === id);
    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0 || newIndex >= faqs.length) return;

    const newFaqs = [...faqs];
    const temp = newFaqs[currentIndex];
    newFaqs[currentIndex] = newFaqs[newIndex];
    newFaqs[newIndex] = temp;

    // Update order values
    const updates = newFaqs.map((faq, index) => ({
      id: faq.id,
      order: index,
    }));

    try {
      await Promise.all(
        updates.map((update) =>
          fetch(`/api/admin/about/faq/${update.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order: update.order }),
          })
        )
      );
      loadFAQs();
    } catch (error) {
      console.error("Failed to reorder FAQs:", error);
    }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Manage FAQ content for the About page</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ question: "", answer: "", category: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add FAQ
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
                {editingId ? "Edit FAQ" : "Add New FAQ"}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="e.g., What is PRIME SDN?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category (optional)</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., General, Vision, Mission"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                <textarea
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  placeholder="Provide a detailed answer..."
                  rows={5}
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
                Save FAQ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1">
                  <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => moveFAQ(faq.id, "up")}
                      disabled={index === 0}
                      className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-400 rotate-180" />
                    </button>
                    <button
                      onClick={() => moveFAQ(faq.id, "down")}
                      disabled={index === faqs.length - 1}
                      className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      {faq.category && (
                        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full mb-2 inline-block">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleTogglePublish(faq.id, faq.published)}
                        className={`p-2 rounded-lg transition-colors ${
                          faq.published
                            ? "bg-green-100 text-green-600 hover:bg-green-200"
                            : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                        }`}
                      >
                        {faq.published ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Clock className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => handleEdit(faq)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Edit className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(faq.id)}
                        className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {faqs.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs yet</h3>
            <p className="text-gray-600 mb-4">Start building the FAQ section by adding the first question.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ question: "", answer: "", category: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First FAQ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
