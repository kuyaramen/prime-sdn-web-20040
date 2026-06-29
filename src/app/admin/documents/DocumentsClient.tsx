"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Upload, Download, Trash2, Eye, Edit2, FileText, Filter, Calendar, Folder, MoreVertical } from "lucide-react";
import Link from "next/link";

interface Document {
  id: string;
  title: string;
  description: string;
  category: "policy" | "report" | "template" | "download" | "other";
  fileUrl: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  version: string;
  uploadedAt: Date;
  updatedAt: Date;
  downloads: number;
}

export default function DocumentsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "policy" | "report" | "template" | "download" | "other">("all");
  const [selectedDocuments, setSelectedDocuments] = useState<Set<string>>(new Set());
  const [viewingDocument, setViewingDocument] = useState<Document | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      title: "PRIME SDN Strategic Plan 2024-2028",
      description: "Comprehensive strategic plan for innovation ecosystem development",
      category: "policy",
      fileUrl: "/documents/strategic-plan.pdf",
      fileName: "strategic-plan-2024.pdf",
      fileSize: "2.4 MB",
      fileType: "PDF",
      version: "1.0",
      uploadedAt: new Date("2024-01-15T10:30:00"),
      updatedAt: new Date("2024-01-15T10:30:00"),
      downloads: 156,
    },
    {
      id: "2",
      title: "Startup Grant Application Form",
      description: "Template for startup grant applications",
      category: "template",
      fileUrl: "/documents/startup-grant-template.docx",
      fileName: "startup-grant-template.docx",
      fileSize: "156 KB",
      fileType: "DOCX",
      version: "2.1",
      uploadedAt: new Date("2024-01-10T14:20:00"),
      updatedAt: new Date("2024-01-20T09:15:00"),
      downloads: 342,
    },
    {
      id: "3",
      title: "Annual Innovation Report 2023",
      description: "Yearly report on innovation activities and achievements",
      category: "report",
      fileUrl: "/documents/annual-report-2023.pdf",
      fileName: "annual-report-2023.pdf",
      fileSize: "5.8 MB",
      fileType: "PDF",
      version: "1.0",
      uploadedAt: new Date("2024-01-05T16:45:00"),
      updatedAt: new Date("2024-01-05T16:45:00"),
      downloads: 89,
    },
    {
      id: "4",
      title: "Partnership Agreement Template",
      description: "Standard partnership agreement for PRIME SDN collaborators",
      category: "template",
      fileUrl: "/documents/partnership-agreement.pdf",
      fileName: "partnership-agreement.pdf",
      fileSize: "320 KB",
      fileType: "PDF",
      version: "1.2",
      uploadedAt: new Date("2024-01-08T11:30:00"),
      updatedAt: new Date("2024-01-18T13:20:00"),
      downloads: 127,
    },
    {
      id: "5",
      title: "Data Privacy Policy",
      description: "Official data privacy and protection policy",
      category: "policy",
      fileUrl: "/documents/data-privacy-policy.pdf",
      fileName: "data-privacy-policy.pdf",
      fileSize: "890 KB",
      fileType: "PDF",
      version: "1.0",
      uploadedAt: new Date("2024-01-12T09:00:00"),
      updatedAt: new Date("2024-01-12T09:00:00"),
      downloads: 234,
    },
  ]);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || doc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleSelectDocument = (id: string) => {
    const newSelected = new Set(selectedDocuments);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedDocuments(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedDocuments.size === filteredDocuments.length) {
      setSelectedDocuments(new Set());
    } else {
      setSelectedDocuments(new Set(filteredDocuments.map((d) => d.id)));
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this document?")) {
      setDocuments(documents.filter((d) => d.id !== id));
    }
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedDocuments.size} documents?`)) {
      setDocuments(documents.filter((d) => !selectedDocuments.has(d.id)));
      setSelectedDocuments(new Set());
    }
  };

  const getCategoryBadge = (category: Document["category"]) => {
    const styles = {
      policy: "bg-purple-100 text-purple-700 border-purple-200",
      report: "bg-blue-100 text-blue-700 border-blue-200",
      template: "bg-green-100 text-green-700 border-green-200",
      download: "bg-amber-100 text-amber-700 border-amber-200",
      other: "bg-gray-100 text-gray-700 border-gray-200",
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[category]}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "policy", label: "Policies" },
    { value: "report", label: "Reports" },
    { value: "template", label: "Templates" },
    { value: "download", label: "Downloads" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard">
            <button className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <ArrowLeft size={20} />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
            <p className="text-gray-500 mt-1">Manage policies, reports, templates, and downloads</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {selectedDocuments.size > 0 && (
            <button
              onClick={handleBulkDelete}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold"
            >
              <Trash2 size={18} />
              <span>Delete ({selectedDocuments.size})</span>
            </button>
          )}
          <button
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold"
          >
            <Upload size={18} />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full sm:max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as any)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { label: "Total Documents", value: documents.length, icon: FileText },
          { label: "Policies", value: documents.filter(d => d.category === "policy").length, icon: FileText },
          { label: "Reports", value: documents.filter(d => d.category === "report").length, icon: FileText },
          { label: "Templates", value: documents.filter(d => d.category === "template").length, icon: FileText },
          { label: "Total Downloads", value: documents.reduce((sum, d) => sum + d.downloads, 0), icon: Download },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-gray-200 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-maroon-100 text-maroon-900">
                <stat.icon size={18} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Documents List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
      >
        {filteredDocuments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-4 w-12">
                    <input
                      type="checkbox"
                      checked={selectedDocuments.size === filteredDocuments.length && filteredDocuments.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 text-maroon-900 focus:ring-maroon-700/20"
                    />
                  </th>
                  <th className="px-6 py-4">Document</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">File Info</th>
                  <th className="px-6 py-4">Version</th>
                  <th className="px-6 py-4">Downloads</th>
                  <th className="px-6 py-4">Updated</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedDocuments.has(doc.id)}
                        onChange={() => handleSelectDocument(doc.id)}
                        className="w-4 h-4 rounded border-gray-300 text-maroon-900 focus:ring-maroon-700/20"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-maroon-100 text-maroon-900 flex items-center justify-center">
                          <FileText size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{doc.title}</p>
                          <p className="text-xs text-gray-500 truncate max-w-xs">{doc.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{getCategoryBadge(doc.category)}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{doc.fileName}</p>
                        <p className="text-xs text-gray-500">{doc.fileSize} • {doc.fileType}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold">
                        v{doc.version}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{doc.downloads}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatDate(doc.updatedAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setViewingDocument(doc)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors"
                          title="Download"
                        >
                          <Download size={16} />
                        </button>
                        <button
                          className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-600 hover:text-amber-700 transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(doc.id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <FileText size={32} className="mx-auto mb-3" />
            <p className="text-sm">No documents found matching your filters.</p>
          </div>
        )}
      </motion.div>

      {/* Document View Modal */}
      {viewingDocument && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <div className="flex items-center gap-3">
                <FileText size={20} />
                <h3 className="font-bold text-lg">Document Details</h3>
              </div>
              <button
                onClick={() => setViewingDocument(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{viewingDocument.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{viewingDocument.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Category</p>
                  {getCategoryBadge(viewingDocument.category)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Version</p>
                  <p className="text-sm font-medium text-gray-900">v{viewingDocument.version}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">File Size</p>
                  <p className="text-sm font-medium text-gray-900">{viewingDocument.fileSize}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">File Type</p>
                  <p className="text-sm font-medium text-gray-900">{viewingDocument.fileType}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Uploaded</p>
                  <p className="text-sm font-medium text-gray-900">{formatDate(viewingDocument.uploadedAt)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Downloads</p>
                  <p className="text-sm font-medium text-gray-900">{viewingDocument.downloads}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold">
                  <Download size={18} />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <div className="flex items-center gap-3">
                <Upload size={20} />
                <h3 className="font-bold text-lg">Upload Document</h3>
              </div>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-maroon-900 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto mb-3 text-gray-400" />
                <p className="text-sm font-semibold text-gray-900 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PDF, DOCX, XLSX up to 10MB</p>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    placeholder="Document title"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Description</label>
                  <textarea
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                    rows={2}
                    placeholder="Brief description"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900">
                    <option value="policy">Policy</option>
                    <option value="report">Report</option>
                    <option value="template">Template</option>
                    <option value="download">Download</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setUploadModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button className="px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold">
                  Upload
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
