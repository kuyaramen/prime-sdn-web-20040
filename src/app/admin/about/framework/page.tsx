"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Layers,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  ArrowRight,
  Building,
  GraduationCap,
  Microscope,
  Cpu,
  Leaf,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

interface FrameworkPillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  illustration?: string;
  order: number;
  published: boolean;
}

const pillarIcons: Record<string, any> = {
  "Startup Development": Building,
  "Education & Talent": GraduationCap,
  "Research & Innovation": Microscope,
  "Digital Transformation": Cpu,
  "Sustainable Communities": Leaf,
  "Partnerships": Handshake,
  "Investments": TrendingUp,
};

export default function FrameworkManagement() {
  const router = useRouter();
  const [pillars, setPillars] = useState<FrameworkPillar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPillars();
  }, []);

  const loadPillars = async () => {
    try {
      const response = await fetch("/api/admin/about/framework");
      const data = await response.json();
      setPillars(data);
    } catch (error) {
      console.error("Failed to load framework pillars:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/framework/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadPillars();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this framework pillar?")) return;
    try {
      await fetch(`/api/admin/about/framework/${id}`, { method: "DELETE" });
      loadPillars();
    } catch (error) {
      console.error("Failed to delete pillar:", error);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PRIME SDN Framework</h1>
          <p className="text-gray-600">Manage the framework pillars and their content</p>
        </div>
        <button
          onClick={() => router.push("/admin/about/framework/new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Pillar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillarIcons[pillar.title] || Layers;
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleTogglePublish(pillar.id, pillar.published)}
                      className={`p-2 rounded-lg transition-colors ${
                        pillar.published
                          ? "bg-green-100 text-green-600 hover:bg-green-200"
                          : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                      }`}
                    >
                      {pillar.published ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => router.push(`/admin/about/framework/${pillar.id}`)}
                      className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(pillar.id)}
                      className="p-2 rounded-lg bg-white/20 text-white hover:bg-red-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <button
                  onClick={() => router.push(`/admin/about/framework/${pillar.id}`)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Manage Pillar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}

        {pillars.length === 0 && (
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Layers className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No framework pillars yet</h3>
            <p className="text-gray-600 mb-4">Start building the PRIME SDN framework by adding the first pillar.</p>
            <button
              onClick={() => router.push("/admin/about/framework/new")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Pillar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
