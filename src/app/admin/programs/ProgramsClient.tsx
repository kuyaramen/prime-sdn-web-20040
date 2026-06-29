"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, Calendar, MapPin, FileText } from "lucide-react";

interface Program {
  id: string;
  title: string;
  slug: string;
  type: string;
  description: string;
  startDate: string;
  endDate: string | null;
  location: string | null;
  coverImage: string | null;
  content: string | null;
  status: string;
}

interface ProgramsClientProps {
  programs: Program[];
}

export function ProgramsClient({ programs: initialPrograms }: ProgramsClientProps) {
  const [programs, setPrograms] = useState(initialPrograms);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [filter, setFilter] = useState<"all" | "event" | "training" | "incubation">("all");

  const filteredPrograms = programs.filter((p) =>
    filter === "all" ? true : p.type === filter
  );

  const handleSaveProgram = async (program: Program) => {
    try {
      const response = await fetch("/api/admin/programs", {
        method: program.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(program),
      });

      if (response.ok) {
        const updated = await response.json();
        if (program.id) {
          setPrograms(programs.map((p) => (p.id === program.id ? updated : p)));
        } else {
          setPrograms([...programs, updated]);
        }
        setEditingProgram(null);
        setIsCreating(false);
      }
    } catch (error) {
      console.error("Failed to save program:", error);
    }
  };

  const handleDeleteProgram = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;

    try {
      const response = await fetch(`/api/admin/programs?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPrograms(programs.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete program:", error);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "event":
        return "bg-blue-100 text-blue-800";
      case "training":
        return "bg-green-100 text-green-800";
      case "incubation":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {["all", "event", "training", "incubation"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as any)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
              filter === type
                ? "bg-maroon-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Add Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            setIsCreating(true);
            setEditingProgram({
              id: "",
              title: "",
              slug: "",
              type: "event",
              description: "",
              startDate: new Date().toISOString().split("T")[0],
              endDate: null,
              location: null,
              coverImage: null,
              content: null,
              status: "draft",
            });
          }}
          className="flex items-center gap-2 px-4 py-2 bg-maroon-900 text-white rounded-lg hover:bg-maroon-800 transition-colors"
        >
          <Plus size={18} />
          Add Program
        </button>
      </div>

      {/* Programs Grid */}
      <div className="grid gap-4">
        {filteredPrograms.map((program) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getTypeColor(program.type)}`}>
                    {program.type}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(program.status)}`}>
                    {program.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(program.startDate).toLocaleDateString()}
                  </div>
                  {program.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {program.location}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProgram(program)}
                  className="p-2 text-gray-600 hover:text-maroon-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDeleteProgram(program.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingProgram && (
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
                  {isCreating ? "Add Program" : "Edit Program"}
                </h3>
                <button
                  onClick={() => {
                    setEditingProgram(null);
                    setIsCreating(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editingProgram.title}
                    onChange={(e) =>
                      setEditingProgram({ ...editingProgram, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={editingProgram.type}
                    onChange={(e) =>
                      setEditingProgram({ ...editingProgram, type: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  >
                    <option value="event">Event</option>
                    <option value="training">Training</option>
                    <option value="incubation">Incubation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={editingProgram.description}
                    onChange={(e) =>
                      setEditingProgram({ ...editingProgram, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={editingProgram.startDate}
                      onChange={(e) =>
                        setEditingProgram({ ...editingProgram, startDate: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="date"
                      value={editingProgram.endDate || ""}
                      onChange={(e) =>
                        setEditingProgram({ ...editingProgram, endDate: e.target.value || null })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={editingProgram.location || ""}
                    onChange={(e) =>
                      setEditingProgram({ ...editingProgram, location: e.target.value || null })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={editingProgram.status}
                    onChange={(e) =>
                      setEditingProgram({ ...editingProgram, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setEditingProgram(null);
                    setIsCreating(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveProgram(editingProgram)}
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
