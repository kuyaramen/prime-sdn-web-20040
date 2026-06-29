"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startupSchema, type StartupFormData } from "@/lib/validations";
import {
  createStartup,
  updateStartup,
  deleteStartup,
} from "@/app/actions/admin";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Eye,
  AlertCircle,
  Globe,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StartupType {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  category: string;
  website: string | null;
  location: string | null;
  founded: number | null;
}

interface StartupsClientProps {
  initialStartups: StartupType[];
}

export function StartupsClient({ initialStartups }: StartupsClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStartup, setEditingStartup] = useState<StartupType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const categories = ["Tourism Tech", "AgriTech", "FinTech", "EdTech", "CleanTech", "Social Enterprise", "Other"];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<StartupFormData>({
    resolver: zodResolver(startupSchema),
    defaultValues: {
      logo: "/images/placeholder.jpg",
    },
  });

  const openAddModal = () => {
    setEditingStartup(null);
    reset({
      name: "",
      slug: "",
      logo: "/images/placeholder.jpg",
      description: "",
      category: categories[0],
      website: "",
      location: "Surigao del Norte",
      founded: new Date().getFullYear(),
    });
    setError(null);
    setModalOpen(true);
  };

  const openEditModal = (startup: StartupType) => {
    setEditingStartup(startup);
    reset({
      name: startup.name,
      slug: startup.slug,
      logo: startup.logo,
      description: startup.description,
      category: startup.category,
      website: startup.website || "",
      location: startup.location || "",
      founded: startup.founded || new Date().getFullYear(),
    });
    setError(null);
    setModalOpen(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setValue(
      "slug",
      name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    );
  };

  const onSubmit = async (data: StartupFormData) => {
    setError(null);
    startTransition(async () => {
      try {
        if (editingStartup) {
          await updateStartup(editingStartup.id, data);
        } else {
          await createStartup(data);
        }
        setModalOpen(false);
        router.refresh();
      } catch (err: any) {
        setError(err.message || "Failed to save startup. Ensure the slug is unique.");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this startup?")) return;

    startTransition(async () => {
      try {
        await deleteStartup(id);
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to delete startup.");
      }
    });
  };

  const filteredStartups = initialStartups.filter((startup) =>
    startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder="Search startups..."
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
          <span>Add Startup</span>
        </button>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {filteredStartups.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-400 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-3.5">Startup</th>
                  <th className="px-6 py-3.5">Category</th>
                  <th className="px-6 py-3.5">Location</th>
                  <th className="px-6 py-3.5">Founded</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {filteredStartups.map((startup) => (
                  <tr key={startup.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
                        <Image
                          src={startup.logo}
                          alt={startup.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 truncate max-w-[240px]">
                          {startup.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate max-w-[240px]">
                          {startup.description}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider border border-purple-200">
                        {startup.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">
                      {startup.location || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {startup.founded || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {startup.website && (
                          <Link
                            href={startup.website}
                            target="_blank"
                            className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Visit Website"
                          >
                            <Globe size={16} />
                          </Link>
                        )}
                        <button
                          onClick={() => openEditModal(startup)}
                          className="p-1.5 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(startup.id)}
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
            <p className="text-sm">No startups found.</p>
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
                {editingStartup ? "Edit Startup" : "Add New Startup"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-white/80 hover:text-white focus:outline-none cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-2">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Startup Name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    onChange={handleNameChange}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. Siargao SurfTech"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
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

                {/* Category */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-xs text-red-600">{errors.category.message}</p>
                  )}
                </div>

                {/* Logo URL */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Logo Image URL
                  </label>
                  <input
                    type="text"
                    {...register("logo")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. /images/startups/surftech.jpg"
                  />
                  {errors.logo && (
                    <p className="mt-1 text-xs text-red-600">{errors.logo.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    {...register("description")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="Provide a description of the startup and what it does..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>
                  )}
                </div>

                {/* Website */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Website URL (Optional)
                  </label>
                  <input
                    type="text"
                    {...register("website")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. https://surftech.siargao.ph"
                  />
                  {errors.website && (
                    <p className="mt-1 text-xs text-red-600">{errors.website.message}</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Location / Office (e.g. General Luna)
                  </label>
                  <input
                    type="text"
                    {...register("location")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. General Luna, Siargao"
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-red-600">{errors.location.message}</p>
                  )}
                </div>

                {/* Founded Year */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Founded Year
                  </label>
                  <input
                    type="number"
                    {...register("founded")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. 2025"
                  />
                  {errors.founded && (
                    <p className="mt-1 text-xs text-red-600">{errors.founded.message}</p>
                  )}
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
                  <span>{editingStartup ? "Save Changes" : "Add Startup"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
