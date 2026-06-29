"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Layers,
  Save,
  X,
  ArrowLeft,
  Plus,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";

interface FrameworkPillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  objectives: string[];
  programs: string[];
  projects: string[];
  statistics: Record<string, string>;
  successStories: string[];
  partners: string[];
  gallery: string[];
  downloads: string[];
  relatedActivities: string[];
  relatedNews: string[];
  icon?: string;
  illustration?: string;
  order: number;
  published: boolean;
}

export default function FrameworkPillarEdit() {
  const params = useParams();
  const router = useRouter();
  const [pillar, setPillar] = useState<FrameworkPillar | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    objectives: "",
    programs: "",
    projects: "",
    statistics: "",
    successStories: "",
    partners: "",
    gallery: "",
    downloads: "",
    relatedActivities: "",
    relatedNews: "",
    icon: "",
    illustration: "",
  });

  useEffect(() => {
    if (params.id !== "new") {
      loadPillar();
    } else {
      setLoading(false);
    }
  }, [params.id]);

  const loadPillar = async () => {
    try {
      const response = await fetch(`/api/admin/about/framework/${params.id}`);
      const data = await response.json();
      setPillar(data);
      setFormData({
        title: data.title,
        slug: data.slug,
        description: data.description,
        objectives: Array.isArray(data.objectives) ? data.objectives.join("\n") : "",
        programs: Array.isArray(data.programs) ? data.programs.join("\n") : "",
        projects: Array.isArray(data.projects) ? data.projects.join("\n") : "",
        statistics: typeof data.statistics === "object" 
          ? Object.entries(data.statistics).map(([k, v]) => `${k}: ${v}`).join("\n")
          : "",
        successStories: Array.isArray(data.successStories) ? data.successStories.join("\n") : "",
        partners: Array.isArray(data.partners) ? data.partners.join("\n") : "",
        gallery: Array.isArray(data.gallery) ? data.gallery.join("\n") : "",
        downloads: Array.isArray(data.downloads) ? data.downloads.join("\n") : "",
        relatedActivities: Array.isArray(data.relatedActivities) ? data.relatedActivities.join(", ") : "",
        relatedNews: Array.isArray(data.relatedNews) ? data.relatedNews.join(", ") : "",
        icon: data.icon || "",
        illustration: data.illustration || "",
      });
    } catch (error) {
      console.error("Failed to load pillar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const objectives = formData.objectives.split("\n").filter(o => o.trim());
      const programs = formData.programs.split("\n").filter(p => p.trim());
      const projects = formData.projects.split("\n").filter(p => p.trim());
      const stats = formData.statistics.split("\n").reduce((acc, line) => {
        const [key, value] = line.split(":").map(s => s.trim());
        if (key && value) acc[key] = value;
        return acc;
      }, {} as Record<string, string>);
      const successStories = formData.successStories.split("\n").filter(s => s.trim());
      const partners = formData.partners.split("\n").filter(p => p.trim());
      const gallery = formData.gallery.split("\n").filter(g => g.trim());
      const downloads = formData.downloads.split("\n").filter(d => d.trim());
      const relatedActivities = formData.relatedActivities.split(",").map(s => s.trim()).filter(s => s);
      const relatedNews = formData.relatedNews.split(",").map(s => s.trim()).filter(s => s);

      const payload = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        objectives: JSON.stringify(objectives),
        programs: JSON.stringify(programs),
        projects: JSON.stringify(projects),
        statistics: JSON.stringify(stats),
        successStories: JSON.stringify(successStories),
        partners: JSON.stringify(partners),
        gallery: JSON.stringify(gallery),
        downloads: JSON.stringify(downloads),
        relatedActivities: JSON.stringify(relatedActivities),
        relatedNews: JSON.stringify(relatedNews),
        icon: formData.icon,
        illustration: formData.illustration,
      };

      if (params.id === "new") {
        await fetch("/api/admin/about/framework", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(`/api/admin/about/framework/${params.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      router.push("/admin/about/framework");
    } catch (error) {
      console.error("Failed to save pillar:", error);
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
          onClick={() => router.push("/admin/about/framework")}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {params.id === "new" ? "Add Framework Pillar" : "Edit Framework Pillar"}
          </h1>
          <p className="text-gray-600">
            {params.id === "new" ? "Create a new framework pillar" : "Edit framework pillar details"}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Startup Development"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
              placeholder="startup-development"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Icon (Lucide icon name)</label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="Building"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe this framework pillar..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Objectives (one per line)</label>
            <textarea
              value={formData.objectives}
              onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
              placeholder="Support startup growth&#10;Provide mentorship&#10;Facilitate funding"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Programs (one per line)</label>
            <textarea
              value={formData.programs}
              onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
              placeholder="Incubation Program&#10;Accelerator Program&#10;Mentorship Program"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Projects (one per line)</label>
            <textarea
              value={formData.projects}
              onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
              placeholder="Tech Hub Project&#10;Innovation Lab&#10;Startup Fund"
              rows={3}
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
              placeholder="Startups: 50&#10;Jobs Created: 200&#10;Investment: ₱5M"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Success Stories (one per line)</label>
            <textarea
              value={formData.successStories}
              onChange={(e) => setFormData({ ...formData, successStories: e.target.value })}
              placeholder="TechCo raised ₱2M&#10;InnovateX expanded to 3 cities&#10;StartupY won national award"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Partners (one per line)</label>
            <textarea
              value={formData.partners}
              onChange={(e) => setFormData({ ...formData, partners: e.target.value })}
              placeholder="DOST&#10;DTI&#10;Local Universities"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gallery (image URLs, one per line)</label>
            <textarea
              value={formData.gallery}
              onChange={(e) => setFormData({ ...formData, gallery: e.target.value })}
              placeholder="/images/framework/startup-1.jpg&#10;/images/framework/startup-2.jpg"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Downloads (file URLs, one per line)</label>
            <textarea
              value={formData.downloads}
              onChange={(e) => setFormData({ ...formData, downloads: e.target.value })}
              placeholder="/docs/framework/startup-guide.pdf&#10;/docs/framework/application-form.pdf"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Related Activities (comma-separated IDs)</label>
            <input
              type="text"
              value={formData.relatedActivities}
              onChange={(e) => setFormData({ ...formData, relatedActivities: e.target.value })}
              placeholder="activity-id-1, activity-id-2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Related News (comma-separated IDs)</label>
            <input
              type="text"
              value={formData.relatedNews}
              onChange={(e) => setFormData({ ...formData, relatedNews: e.target.value })}
              placeholder="news-id-1, news-id-2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Illustration URL</label>
            <input
              type="text"
              value={formData.illustration}
              onChange={(e) => setFormData({ ...formData, illustration: e.target.value })}
              placeholder="/images/framework/startup-illustration.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => router.push("/admin/about/framework")}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Pillar"}
          </button>
        </div>
      </div>
    </div>
  );
}
