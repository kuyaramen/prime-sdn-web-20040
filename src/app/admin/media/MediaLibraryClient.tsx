"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Search,
  Filter,
  Grid,
  List,
  Image as ImageIcon,
  Video,
  FileText,
  Trash2,
  Download,
  Copy,
  Eye,
  X,
  FolderPlus,
  MoreVertical,
  Check,
  AlertCircle,
  Folder,
  Tag,
  Clock,
  AlertTriangle,
  Link2,
  BarChart2,
} from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  type: "image" | "video" | "document";
  url: string;
  size: number;
  uploadedAt: string;
  folder?: string;
  tags?: string[];
  usageCount?: number;
  lastUsed?: string;
  isDuplicate?: boolean;
  isUnused?: boolean;
  altText?: string;
}

export default function MediaLibraryClient() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "image" | "video" | "document">("all");
  const [isUploading, setIsUploading] = useState(false);
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [filterUsage, setFilterUsage] = useState<"all" | "recent" | "unused" | "duplicates">("all");

  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: "1",
      name: "hero_aerial_surigao.jpg",
      type: "image",
      url: "/images/hero_aerial_surigao_new.jpg",
      size: 2457600,
      uploadedAt: "2024-01-15",
      folder: "Homepage",
      tags: ["hero", "surigao", "aerial"],
      usageCount: 6,
      lastUsed: "2024-01-20",
      altText: "Aerial view of Surigao City",
    },
    {
      id: "2",
      name: "innovation_district.mp4",
      type: "video",
      url: "/videos/innovation_district.mp4",
      size: 15728640,
      uploadedAt: "2024-01-14",
      folder: "Videos",
      tags: ["innovation", "district", "video"],
      usageCount: 3,
      lastUsed: "2024-01-18",
    },
    {
      id: "3",
      name: "policy_document.pdf",
      type: "document",
      url: "/documents/policy_document.pdf",
      size: 524288,
      uploadedAt: "2024-01-13",
      folder: "Documents",
      tags: ["policy", "document"],
      usageCount: 2,
      lastUsed: "2024-01-15",
    },
    {
      id: "4",
      name: "siargao_beach.jpg",
      type: "image",
      url: "/images/siargao_beach.jpg",
      size: 3145728,
      uploadedAt: "2024-01-12",
      folder: "Homepage",
      tags: ["siargao", "beach", "tourism"],
      usageCount: 4,
      lastUsed: "2024-01-19",
      altText: "Beautiful beach in Siargao",
    },
    {
      id: "5",
      name: "startup_presentation.pptx",
      type: "document",
      url: "/documents/startup_presentation.pptx",
      size: 10485760,
      uploadedAt: "2024-01-11",
      folder: "Documents",
      tags: ["startup", "presentation"],
      usageCount: 1,
      lastUsed: "2024-01-10",
    },
    {
      id: "6",
      name: "old_banner_duplicate.jpg",
      type: "image",
      url: "/images/old_banner.jpg",
      size: 2457600,
      uploadedAt: "2024-01-05",
      folder: "Archived",
      tags: [],
      usageCount: 0,
      isUnused: true,
      isDuplicate: true,
    },
  ]);

  const folders = ["Homepage", "Videos", "Documents", "Archived", "Uncategorized"];

  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterType === "all" || item.type === filterType;
    const matchesFolder = !selectedFolder || item.folder === selectedFolder;
    
    let matchesUsage = true;
    if (filterUsage === "recent") {
      const daysSinceUsed = item.lastUsed ? Math.floor((new Date().getTime() - new Date(item.lastUsed).getTime()) / (1000 * 60 * 60 * 24)) : 999;
      matchesUsage = daysSinceUsed <= 7;
    } else if (filterUsage === "unused") {
      matchesUsage = item.isUnused || item.usageCount === 0;
    } else if (filterUsage === "duplicates") {
      matchesUsage = item.isDuplicate === true;
    }
    
    return matchesSearch && matchesFilter && matchesFolder && matchesUsage;
  });

  const toggleSelection = (id: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    if (selectedItems.size === filteredItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(filteredItems.map((item) => item.id)));
    }
  };

  const deleteSelected = () => {
    setMediaItems((prev) => prev.filter((item) => !selectedItems.has(item.id)));
    setSelectedItems(new Set());
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case "image":
        return ImageIcon;
      case "video":
        return Video;
      case "document":
        return FileText;
      default:
        return FileText;
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setShowUploadModal(true);
    }, 1000);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-500 mt-1">Manage all your images, videos, and documents</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold"
          >
            <Upload size={18} />
            <span>Upload Media</span>
          </button>
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-gradient-to-r from-maroon-900 to-maroon-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-white/80">Storage Used</p>
            <p className="text-3xl font-bold">2.4 GB <span className="text-lg font-normal text-white/60">/ 10 GB</span></p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-white/80">Total Files</p>
            <p className="text-3xl font-bold">{mediaItems.length}</p>
          </div>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: "24%" }} />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search media by name or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          >
            <option value="all">All Types</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
            <option value="document">Documents</option>
          </select>
          <select
            value={filterUsage}
            onChange={(e) => setFilterUsage(e.target.value as any)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          >
            <option value="all">All Files</option>
            <option value="recent">Recently Used</option>
            <option value="unused">Unused</option>
            <option value="duplicates">Duplicates</option>
          </select>
        </div>
        <div className="flex items-center gap-2 w-full lg:w-auto">
          {selectedItems.size > 0 && (
            <>
              <button
                onClick={deleteSelected}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-semibold"
              >
                <Trash2 size={16} />
                <span>Delete ({selectedItems.size})</span>
              </button>
            </>
          )}
          <button
            onClick={() => setShowFolderModal(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold"
          >
            <FolderPlus size={16} />
            <span>New Folder</span>
          </button>
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            {viewMode === "grid" ? <List size={18} /> : <Grid size={18} />}
          </button>
        </div>
      </div>

      {/* Folders */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedFolder(null)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${
            selectedFolder === null
              ? "bg-maroon-900 text-white"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Folder size={18} />
          <span className="text-sm font-semibold">All Files</span>
        </button>
        {folders.map((folder) => (
          <button
            key={folder}
            onClick={() => setSelectedFolder(folder)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${
              selectedFolder === folder
                ? "bg-maroon-900 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Folder size={18} />
            <span className="text-sm font-semibold">{folder}</span>
            <span className="text-xs opacity-70">
              ({mediaItems.filter(item => item.folder === folder).length})
            </span>
          </button>
        ))}
      </div>

      {/* Upload Drop Zone */}
      <motion.div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        whileHover={{ borderColor: "#500a31" }}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
          isUploading ? "border-maroon-900 bg-maroon-50" : "border-gray-300 hover:border-maroon-300"
        }`}
      >
        {isUploading ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-6 border-2 border-maroon-900 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-semibold text-maroon-900">Uploading...</span>
          </div>
        ) : (
          <div>
            <Upload size={32} className="mx-auto text-gray-400 mb-3" />
            <p className="text-sm font-semibold text-gray-700 mb-1">
              Drag and drop files here
            </p>
            <p className="text-xs text-gray-500">or click the Upload button above</p>
          </div>
        )}
      </motion.div>

      {/* Media Grid/List */}
      {selectedItems.size > 0 && (
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-3">
          <Check size={18} className="text-blue-600" />
          <span className="text-sm font-semibold text-blue-900">
            {selectedItems.size} item{selectedItems.size !== 1 ? "s" : ""} selected
          </span>
          <button
            onClick={() => setSelectedItems(new Set())}
            className="ml-auto text-sm font-semibold text-blue-600 hover:underline"
          >
            Clear selection
          </button>
        </div>
      )}

      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <AlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-lg font-semibold text-gray-700 mb-2">No media found</p>
          <p className="text-sm text-gray-500">
            {searchQuery || filterType !== "all"
              ? "Try adjusting your search or filter"
              : "Upload your first media file to get started"}
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredItems.map((item, index) => {
            const Icon = getIconForType(item.type);
            const isSelected = selectedItems.has(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative group bg-white rounded-xl border-2 overflow-hidden cursor-pointer transition-all ${
                  isSelected ? "border-maroon-900 shadow-lg" : "border-gray-200 hover:border-maroon-300"
                }`}
                onClick={() => toggleSelection(item.id)}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 z-10 w-6 h-6 bg-maroon-900 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )}
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  {item.type === "image" ? (
                    <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-maroon-50 flex items-center justify-center">
                      <ImageIcon size={32} className="text-maroon-300" />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                      <Icon size={32} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatFileSize(item.size)}</p>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewItem(item);
                    }}
                    className="p-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.size === filteredItems.length && filteredItems.length > 0}
                    onChange={selectAll}
                    className="rounded border-gray-300 text-maroon-900 focus:ring-maroon-900"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Uploaded</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => {
                const Icon = getIconForType(item.type);
                const isSelected = selectedItems.has(item.id);
                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      isSelected ? "bg-maroon-50" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelection(item.id)}
                        className="rounded border-gray-300 text-maroon-900 focus:ring-maroon-900"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Icon size={16} className="text-gray-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700 capitalize">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{formatFileSize(item.size)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.uploadedAt}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setPreviewItem(item)}
                          className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Eye size={16} className="text-gray-600" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <Download size={16} className="text-gray-600" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                          <Copy size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewItem(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">{previewItem.name}</h3>
                <button
                  onClick={() => setPreviewItem(null)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                {previewItem.type === "image" ? (
                  <div className="aspect-video bg-gradient-to-br from-maroon-100 to-maroon-50 rounded-xl flex items-center justify-center">
                    <ImageIcon size={64} className="text-maroon-300" />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center">
                    <Video size={64} className="text-gray-400" />
                  </div>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Size: {formatFileSize(previewItem.size)}</p>
                    <p className="text-sm text-gray-600">Uploaded: {previewItem.uploadedAt}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold">
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors font-semibold">
                      <Copy size={16} />
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Success Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Complete</h3>
                <p className="text-gray-600 mb-6">Your files have been successfully uploaded to the media library.</p>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="w-full px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
