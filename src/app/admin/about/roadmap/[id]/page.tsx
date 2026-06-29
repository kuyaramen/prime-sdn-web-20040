"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  TrendingUp,
  Save,
  X,
  ArrowLeft,
  Calendar,
  Target,
} from "lucide-react";

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

export default function RoadmapMilestoneEdit() {
  const params = useParams();
  const router = useRouter();
  const [milestone, setMilestone] = useState<RoadmapMilestone | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    description: "",
    desktopPos: "",
    coords: "",
    image: "",
    initiatives: "",
    stats: "",
    impact: "",
  });

  useEffect(() => {
    if (params.id !== "new") {
      loadMilestone();
    } else {
      setLoading(false);
    }
  }, [params.id]);

  const loadMilestone = async () => {
    try {
      const response = await fetch(`/api/admin/about/roadmap/${params.id}`);
      const data = await response.json();
      setMilestone(data);
      setFormData({
        year: data.year.toString(),
        title: data.title,
        description: data.description,
        desktopPos: data.desktopPos || "",
        coords: data.coords || "",
        image: data.image || "",
        initiatives: Array.isArray(data.initiatives) ? data.initiatives.join("\n") : "",
        stats: Array.isArray(data.stats) ? data.stats.join("\n") : "",
        impact: data.impact || "",
      });
    } catch (error) {
      console.error("Failed to load milestone:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const initiatives = formData.initiatives.split("\n").filter(i => i.trim());
      const stats = formData.stats.split("\n").filter(s => s.trim());

      const payload = {
        year: parseInt(formData.year),
        title: formData.title,
        description: formData.description,
        desktopPos: formData.desktopPos,
        coords: formData.coords,
        image: formData.image,
        initiatives: JSON.stringify(initiatives),
        stats: JSON.stringify(stats),
        impact: formData.impact,
      };

      if (params.id === "new") {
        await fetch("/api/admin/about/roadmap", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(`/api/admin/about/roadmap/${params.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      router.push("/admin/about/roadmap");
    } catch (error) {
      console.error("Failed to save milestone:", error);
    } finally {
      setSaving(false);
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
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => router.push("/admin/about/roadmap")}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {params.id === "new" ? "Add Roadmap Milestone" : "Edit Roadmap Milestone"}
          </h1>
          <p className="text-gray-600">
            {params.id === "new" ? "Create a new roadmap milestone" : "Edit roadmap milestone details"}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              placeholder="2025"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Digital Infrastructure Launch"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe this milestone..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Desktop Position (JSON)</label>
            <input
              type="text"
              value={formData.desktopPos}
              onChange={(e) => setFormData({ ...formData, desktopPos: e.target.value })}
              placeholder='{"x": 50, "y": 30}'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Coordinates (JSON)</label>
            <input
              type="text"
              value={formData.coords}
              onChange={(e) => setFormData({ ...formData, coords: e.target.value })}
              placeholder='{"x": 50, "y": 30}'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="/images/roadmap/milestone-1.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Key Initiatives (one per line)</label>
            <textarea
              value={formData.initiatives}
              onChange={(e) => setFormData({ ...formData, initiatives: e.target.value })}
              placeholder="Launch digital hubs&#10;Deploy broadband infrastructure&#10;Train local talent"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Statistics (one per line)</label>
            <textarea
              value={formData.stats}
              onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
              placeholder="5 Hubs launched&#10;50 Startups supported&#10;200 Jobs created"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Impact</label>
            <textarea
              value={formData.impact}
              onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
              placeholder="Describe the expected impact of this milestone..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => router.push("/admin/about/roadmap")}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Milestone"}
          </button>
        </div>
      </div>
    </div>
  );
}
