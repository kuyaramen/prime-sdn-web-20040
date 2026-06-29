"use client";

import { useState, useEffect } from "react";
import {
  Download,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Save,
  X,
  Search,
  Filter,
  FileText,
  Video,
  Image as ImageIcon,
  Archive,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadResource {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fileUrl: string;
  fileSize?: string;
  fileType?: string;
  version?: string;
  downloadCount: number;
  featured: boolean;
  published: boolean;
}

const categoryIcons: Record<string, any> = {
  "Reports": FileText,
  "Strategic Plans": FileText,
  "Policies": FileText,
  "Presentations": FileText,
  "Templates": FileText,
  "Infographics": ImageIcon,
  "Videos": Video,
  "PDFs": FileText,
};

export default function DownloadsManagement() {
  const [resources, setResources] = useState<DownloadResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    description: "",
    fileUrl: "",
    fileSize: "",
    fileType: "",
    version: "",
  });

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    try {
      const response = await fetch("/api/admin/about/downloads");
      const data = await response.json();
      setResources(data);
    } catch (error) {
      console.error("Failed to load download resources:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        title: formData.title,
        slug: formData.slug,
        category: formData.category,
        description: formData.description,
        fileUrl: formData.fileUrl,
        fileSize: formData.fileSize,
        fileType: formData.fileType,
        version: formData.version,
      };

      if (editingId) {
        await fetch(`/api/admin/about/downloads/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/about/downloads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({ title: "", slug: "", category: "", description: "", fileUrl: "", fileSize: "", fileType: "", version: "" });
      loadResources();
    } catch (error) {
      console.error("Failed to save download resource:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;
    try {
      await fetch(`/api/admin/about/downloads/${id}`, { method: "DELETE" });
      loadResources();
    } catch (error) {
      console.error("Failed to delete resource:", error);
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await fetch(`/api/admin/about/downloads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      loadResources();
    } catch (error) {
      console.error("Failed to toggle publish:", error);
    }
  };

  const handleToggleFeatured = async (id: string, featured: boolean) => {
    try {
      await fetch(`/api/admin/about/downloads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !featured }),
      });
      loadResources();
    } catch (error) {
      console.error("Failed to toggle featured:", error);
    }
  };

  const handleEdit = (resource: DownloadResource) => {
    setEditingId(resource.id);
    setFormData({
      title: resource.title,
      slug: resource.slug,
      category: resource.category,
      description: resource.description,
      fileUrl: resource.fileUrl,
      fileSize: resource.fileSize || "",
      fileType: resource.fileType || "",
      version: resource.version || "",
    });
    setShowForm(true);
  };

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCategory === "all" || resource.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const categories = [...new Set(resources.map((r) => r.category))];

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Downloads & Resources</h1>
          <p className="text-gray-600">Manage downloadable resources and digital library</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ title: "", slug: "", category: "", description: "", fileUrl: "", fileSize: "", fileType: "", version: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Resource
        </button>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
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
                {editingId ? "Edit Resource" : "Add New Resource"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Annual Report 2024"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
                  placeholder="annual-report-2024"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  <option value="Reports">Reports</option>
                  <option value="Strategic Plans">Strategic Plans</option>
                  <option value="Policies">Policies</option>
                  <option value="Presentations">Presentations</option>
                  <option value="Templates">Templates</option>
                  <option value="Infographics">Infographics</option>
                  <option value="Videos">Videos</option>
                  <option value="PDFs">PDFs</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this resource..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File URL</label>
                <input
                  type="text"
                  value={formData.fileUrl}
                  onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                  placeholder="/docs/reports/annual-report-2024.pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File Size</label>
                <input
                  type="text"
                  value={formData.fileSize}
                  onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                  placeholder="2.5 MB"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File Type</label>
                <input
                  type="text"
                  value={formData.fileType}
                  onChange={(e) => setFormData({ ...formData, fileType: e.target.value })}
                  placeholder="PDF"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Version</label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  placeholder="1.0"
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
                Save Resource
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Resource</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Category</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Downloads</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredResources.map((resource) => {
              const Icon = categoryIcons[resource.category] || FileText;
              return (
                <tr key={resource.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{resource.title}</p>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                        {resource.version && (
                          <span className="text-xs text-gray-500">v{resource.version}</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">{resource.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      {resource.downloadCount}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {resource.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">Featured</span>
                      )}
                      <button
                        onClick={() => handleTogglePublish(resource.id, resource.published)}
                        className={`p-1 rounded transition-colors ${
                          resource.published
                            ? "bg-green-100 text-green-600 hover:bg-green-200"
                            : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                        }`}
                      >
                        {resource.published ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleToggleFeatured(resource.id, resource.featured)}
                        className={`p-2 rounded-lg transition-colors ${
                          resource.featured
                            ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                            : "hover:bg-gray-100"
                        }`}
                        title="Toggle Featured"
                      >
                        <Archive className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(resource)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Edit className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(resource.id)}
                        className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredResources.length === 0 && (
          <div className="p-12 text-center">
            <Download className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-4">Upload your first resource to get started.</p>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({ title: "", slug: "", category: "", description: "", fileUrl: "", fileSize: "", fileType: "", version: "" });
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Resource
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
