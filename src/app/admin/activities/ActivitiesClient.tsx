"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { activitySchema, type ActivityFormData } from "@/lib/validations";
import {
  createActivity,
  updateActivity,
  deleteActivity,
} from "@/app/actions/admin";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Eye,
  AlertCircle,
  Check,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface ActivityWithPillar {
  id: string;
  title: string;
  slug: string;
  pillarTag: string;
  excerpt: string;
  body: string;
  coverImage: string;
  publishedAt: Date;
  published: boolean;
  pillar?: { title: string } | null;
  organizer?: string;
  venue?: string;
  registrationRequired?: boolean;
  speaker?: string;
  agenda?: string[];
  sponsors?: string[];
  gallery?: string[];
  attachments?: { title: string; url: string }[];
  qrEnabled?: boolean;
  attendance?: number;
  certificatesEnabled?: boolean;
  startDate?: Date;
  endDate?: Date;
}

interface ActivitiesClientProps {
  initialActivities: ActivityWithPillar[];
  pillars: { slug: string; title: string }[];
}

export function ActivitiesClient({
  initialActivities,
  pillars,
}: ActivitiesClientProps) {
  const router = useRouter();
  const [activities, setActivities] = useState(initialActivities);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<ActivityWithPillar | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [imageUploading, setImageUploading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ActivityFormData>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      coverImage: "/images/placeholder.jpg",
      published: false,
    },
  });

  const watchCoverImage = watch("coverImage");

  const openAddModal = () => {
    setEditingActivity(null);
    reset({
      title: "",
      slug: "",
      pillarTag: pillars[0]?.slug || "",
      excerpt: "",
      body: "",
      coverImage: "/images/placeholder.jpg",
      publishedAt: new Date().toISOString().split("T")[0],
      published: false,
    });
    setError(null);
    setModalOpen(true);
  };

  const openEditModal = (activity: ActivityWithPillar) => {
    setEditingActivity(activity);
    reset({
      title: activity.title,
      slug: activity.slug,
      pillarTag: activity.pillarTag,
      excerpt: activity.excerpt,
      body: activity.body,
      coverImage: activity.coverImage,
      publishedAt: new Date(activity.publishedAt).toISOString().split("T")[0],
      published: activity.published,
    });
    setError(null);
    setModalOpen(true);
  };

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setValue(
      "slug",
      title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    );
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (png, jpg, jpeg, webp)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setImageUploading(true);
    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to upload image");
      }

      const result = await res.json();
      setValue("coverImage", result.url);
    } catch (err: any) {
      alert(err.message || "Something went wrong during image upload");
    } finally {
      setImageUploading(false);
    }
  };

  const onSubmit = async (data: ActivityFormData) => {
    setError(null);
    startTransition(async () => {
      try {
        if (editingActivity) {
          await updateActivity(editingActivity.id, data);
        } else {
          await createActivity(data);
        }
        setModalOpen(false);
        router.refresh();
      } catch (err: any) {
        setError(err.message || "Failed to save activity. Ensure the slug is unique.");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this activity?")) return;

    startTransition(async () => {
      try {
        await deleteActivity(id);
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to delete activity.");
      }
    });
  };

  const filteredActivities = initialActivities.filter((act) =>
    act.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    act.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={openAddModal}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-maroon-900 hover:bg-maroon-800 text-white rounded-lg text-sm font-semibold shadow-md transition-colors cursor-pointer"
        >
          <Plus size={18} />
          <span>Add Activity</span>
        </button>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {filteredActivities.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-400 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-3.5">Activity</th>
                  <th className="px-6 py-3.5">Pillar</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {filteredActivities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
                        <Image
                          src={activity.coverImage}
                          alt={activity.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 truncate max-w-[240px]">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-400 truncate max-w-[240px]">
                          {activity.excerpt}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider border border-teal-200">
                        {activity.pillar?.title || activity.pillarTag}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {formatDate(activity.publishedAt)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          activity.published
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-gray-150 text-gray-600 border border-gray-250"
                        }`}
                      >
                        {activity.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/activities/${activity.slug}`}
                          target="_blank"
                          className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View Live"
                        >
                          <Eye size={16} />
                        </Link>
                        <button
                          onClick={() => openEditModal(activity)}
                          className="p-1.5 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(activity.id)}
                          className="p-1.5 rounded hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
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
            <Search size={32} className="mx-auto mb-3" />
            <p className="text-sm">No activities found matching query.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-8">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <h3 className="font-bold text-lg">
                {editingActivity ? "Edit Activity" : "Create New Activity"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-white/80 hover:text-white focus:outline-none cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Error message */}
            {error && (
              <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-2">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Activity Title
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    onChange={handleTitleChange}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. Surigao Digital Innovation Summit"
                  />
                  {errors.title && (
                    <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>
                  )}
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    {...register("slug")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500 focus:outline-none"
                    placeholder="auto-generated-slug"
                  />
                  {errors.slug && (
                    <p className="mt-1 text-xs text-red-600">{errors.slug.message}</p>
                  )}
                </div>

                {/* Pillar Tag */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Pillar Tag
                  </label>
                  <select
                    {...register("pillarTag")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  >
                    {pillars.map((pillar) => (
                      <option key={pillar.slug} value={pillar.slug}>
                        {pillar.title}
                      </option>
                    ))}
                  </select>
                  {errors.pillarTag && (
                    <p className="mt-1 text-xs text-red-600">{errors.pillarTag.message}</p>
                  )}
                </div>

                {/* Cover Image URL / Upload */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0 flex items-center justify-center">
                      {watchCoverImage ? (
                        <img
                          src={watchCoverImage}
                          alt="Cover preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon size={24} className="text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Upload Cover Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={imageUploading}
                        className="block w-full text-xs text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-maroon-50 file:text-maroon-900 hover:file:bg-maroon-100 cursor-pointer"
                      />
                      {imageUploading && (
                        <p className="text-xs text-maroon-900 mt-1 animate-pulse">Uploading image...</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Cover Image URL
                    </label>
                    <input
                      type="text"
                      {...register("coverImage")}
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                      placeholder="e.g. /images/activities/summit.jpg or an external link"
                    />
                    {errors.coverImage && (
                      <p className="mt-1 text-xs text-red-600">{errors.coverImage.message}</p>
                    )}
                  </div>
                </div>

                {/* Excerpt */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Excerpt / Short Description
                  </label>
                  <textarea
                    rows={2}
                    {...register("excerpt")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 resize-none"
                    placeholder="Brief highlight that appears on listing grids"
                  />
                  {errors.excerpt && (
                    <p className="mt-1 text-xs text-red-600">{errors.excerpt.message}</p>
                  )}
                </div>

                {/* Body Content */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Body Content (Supports HTML paragraphs &amp; headings)
                  </label>
                  <textarea
                    rows={6}
                    {...register("body")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 font-mono text-xs"
                    placeholder="<p>Full detailed description...</p>"
                  />
                  {errors.body && (
                    <p className="mt-1 text-xs text-red-600">{errors.body.message}</p>
                  )}
                </div>

                {/* Published Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Published Date
                  </label>
                  <input
                    type="date"
                    {...register("publishedAt")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  />
                  {errors.publishedAt && (
                    <p className="mt-1 text-xs text-red-600">{errors.publishedAt.message}</p>
                  )}
                </div>

                {/* Published Toggle */}
                <div className="flex items-center pt-6 pl-2">
                  <input
                    id="published"
                    type="checkbox"
                    {...register("published")}
                    className="w-4.5 h-4.5 text-maroon-900 border-gray-300 rounded focus:ring-maroon-700/20"
                  />
                  <label
                    htmlFor="published"
                    className="ml-2.5 text-sm font-semibold text-gray-700 select-none cursor-pointer"
                  >
                    Publish immediately (Show to public)
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex items-center gap-1.5 px-4 py-2 bg-maroon-900 hover:bg-maroon-800 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isPending && <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  <span>{editingActivity ? "Save Changes" : "Create Activity"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
