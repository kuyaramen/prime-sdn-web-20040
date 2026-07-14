"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, Video, Star, Eye, EyeOff } from "lucide-react";

interface Video {
  id: string;
  title: string;
  youtubeId: string | null;
  thumbnail: string | null;
  description: string | null;
  order: number;
  featured: boolean;
  published: boolean;
}

interface VideosClientProps {
  videos: Video[];
}

export function VideosClient({ videos: initialVideos }: VideosClientProps) {
  const [videos, setVideos] = useState(initialVideos);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveVideo = async (video: Video) => {
    try {
      const response = await fetch("/api/admin/videos", {
        method: video.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(video),
      });

      if (response.ok) {
        const updated = await response.json();
        if (video.id) {
          setVideos(videos.map((v) => (v.id === video.id ? updated : v)));
        } else {
          setVideos([...videos, updated]);
        }
        setEditingVideo(null);
        setIsCreating(false);
      }
    } catch (error) {
      console.error("Failed to save video:", error);
    }
  };

  const handleDeleteVideo = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const response = await fetch(`/api/admin/videos?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setVideos(videos.filter((v) => v.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete video:", error);
    }
  };

  const handleToggleFeatured = async (video: Video) => {
    try {
      const response = await fetch("/api/admin/videos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...video, featured: !video.featured }),
      });

      if (response.ok) {
        const updated = await response.json();
        setVideos(videos.map((v) => (v.id === video.id ? updated : v)));
      }
    } catch (error) {
      console.error("Failed to toggle featured:", error);
    }
  };

  const handleTogglePublished = async (video: Video) => {
    try {
      const response = await fetch("/api/admin/videos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...video, published: !video.published }),
      });

      if (response.ok) {
        const updated = await response.json();
        setVideos(videos.map((v) => (v.id === video.id ? updated : v)));
      }
    } catch (error) {
      console.error("Failed to toggle published:", error);
    }
  };

  const extractYoutubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Video Gallery</h2>
        <button
          onClick={() => {
            setIsCreating(true);
            setEditingVideo({
              id: "",
              title: "",
              youtubeId: null,
              thumbnail: null,
              description: null,
              order: videos.length,
              featured: false,
              published: false,
            });
          }}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors"
          style={{
            background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
          }}
        >
          <Plus size={18} />
          Add Video
        </button>
      </div>

      <div className="grid gap-4">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              {video.thumbnail && (
                <div className="w-48 h-28 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">{video.title}</h3>
                  {video.featured && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
                </div>
                {video.youtubeId && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Video size={16} />
                    <span className="font-mono text-xs">{video.youtubeId}</span>
                  </div>
                )}
                {video.description && (
                  <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                )}
                <div className="flex items-center gap-2 mt-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      video.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {video.published ? "Published" : "Draft"}
                  </span>
                  {video.featured && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleToggleFeatured(video)}
                  className={`p-2 rounded-lg transition-colors ${
                    video.featured ? "text-yellow-600 bg-yellow-50" : "text-gray-400 hover:text-yellow-600 hover:bg-yellow-50"
                  }`}
                  title="Toggle Featured"
                >
                  <Star size={18} />
                </button>
                <button
                  onClick={() => handleTogglePublished(video)}
                  className={`p-2 rounded-lg transition-colors ${
                    video.published ? "text-green-600 bg-green-50" : "text-gray-400 hover:text-green-600 hover:bg-green-50"
                  }`}
                  title="Toggle Published"
                >
                  {video.published ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
                <button
                  onClick={() => setEditingVideo(video)}
                  className="p-2 text-gray-600 hover:text-[#5A2396] hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDeleteVideo(video.id)}
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
        {editingVideo && (
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
              className="bg-white rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isCreating ? "Add Video" : "Edit Video"}
                </h3>
                <button
                  onClick={() => {
                    setEditingVideo(null);
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
                    value={editingVideo.title}
                    onChange={(e) =>
                      setEditingVideo({ ...editingVideo, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4FBF]/20 focus:border-[#5A2396]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">YouTube URL or ID</label>
                  <input
                    type="text"
                    value={editingVideo.youtubeId || ""}
                    onChange={(e) => {
                      const url = e.target.value;
                      const id = extractYoutubeId(url) || url;
                      setEditingVideo({ ...editingVideo, youtubeId: id || null });
                    }}
                    placeholder="https://youtube.com/watch?v=... or video ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4FBF]/20 focus:border-[#5A2396]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
                  <input
                    type="text"
                    value={editingVideo.thumbnail || ""}
                    onChange={(e) =>
                      setEditingVideo({ ...editingVideo, thumbnail: e.target.value || null })
                    }
                    placeholder="https://img.youtube.com/vi/.../maxresdefault.jpg"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4FBF]/20 focus:border-[#5A2396]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={editingVideo.description || ""}
                    onChange={(e) =>
                      setEditingVideo({ ...editingVideo, description: e.target.value || null })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4FBF]/20 focus:border-[#5A2396]"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingVideo.featured}
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, featured: e.target.checked })
                      }
                      className="rounded border-gray-300 text-[#5A2396] focus:ring-[#5A2396]"
                    />
                    <span className="text-sm text-gray-700">Featured</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingVideo.published}
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, published: e.target.checked })
                      }
                      className="rounded border-gray-300 text-[#5A2396] focus:ring-[#5A2396]"
                    />
                    <span className="text-sm text-gray-700">Published</span>
                  </label>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setEditingVideo(null);
                    setIsCreating(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveVideo(editingVideo)}
                  className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors"
                  style={{
                    background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
                  }}
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
