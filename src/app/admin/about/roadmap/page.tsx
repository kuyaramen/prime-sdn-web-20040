"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Calendar,
  Target,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface RoadmapMilestone {
  id: string;
  year: number;
  title: string;
  description: string;
  desktopPos: string;
  coords: string;
  image?: string;
  initiatives: string[];
  stats: string[];
  impact?: string;
  order: number;
  published: boolean;
}

export default function RoadmapManagement() {
  const router = useRouter();
  const [milestones, setMilestones] = useState<RoadmapMilestone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMilestones();
  }, []);

  const loadMilestones = async () => {
    try {
      const response = await fetch("/api/admin/about/roadmap");
      const data = await response.json();
      setMilestones(data);
    } catch (error) {
      console.error("Failed to load roadmap milestones:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/roadmap/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadMilestones();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this milestone?")) return;
    try {
      await fetch(`/api/admin/about/roadmap/${id}`, { method: "DELETE" });
      loadMilestones();
    } catch (error) {
      console.error("Failed to delete milestone:", error);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Innovation Roadmap</h1>
          <p className="text-gray-600">Manage the innovation roadmap milestones and phases</p>
        </div>
        <button
          onClick={() => router.push("/admin/about/roadmap/new")}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Milestone
        </button>
      </div>

      <div className="space-y-4">
        {milestones
          .sort((a, b) => a.year - b.year)
          .map((milestone) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{milestone.description}</p>

                    {Array.isArray(milestone.initiatives) && milestone.initiatives.length > 0 && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Initiatives</h4>
                        <div className="flex flex-wrap gap-2">
                          {milestone.initiatives.slice(0, 3).map((initiative, i) => (
                            <span key={i} className="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-full">
                              {initiative}
                            </span>
                          ))}
                          {milestone.initiatives.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                              +{milestone.initiatives.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {Array.isArray(milestone.stats) && milestone.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {milestone.stats.slice(0, 3).map((stat, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-3 text-center">
                            <p className="text-lg font-bold text-gray-900">{stat}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleTogglePublish(milestone.id, milestone.published)}
                    className={`p-2 rounded-lg transition-colors ${
                      milestone.published
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    }`}
                  >
                    {milestone.published ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => router.push(`/admin/about/roadmap/${milestone.id}`)}
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
            </motion.div>
          ))}

        {milestones.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No roadmap milestones yet</h3>
            <p className="text-gray-600 mb-4">Start building the innovation roadmap by adding the first milestone.</p>
            <button
              onClick={() => router.push("/admin/about/roadmap/new")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
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
