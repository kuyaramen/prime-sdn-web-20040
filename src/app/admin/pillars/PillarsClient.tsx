"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pillarSchema, type PillarFormData } from "@/lib/validations";
import { updatePillar } from "@/app/actions/admin";
import {
  Edit2,
  X,
  Layers,
  AlertCircle,
  Compass,
  Building2,
  GraduationCap,
  FlaskConical,
  TrendingUp,
  Palette,
  Rocket,
} from "lucide-react";

const iconMap: Record<string, any> = {
  compass: Compass,
  building: Building2,
  "graduation-cap": GraduationCap,
  "flask-conical": FlaskConical,
  "trending-up": TrendingUp,
  palette: Palette,
  rocket: Rocket,
};

interface PillarType {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
}

interface PillarsClientProps {
  pillars: PillarType[];
}

export function PillarsClient({ pillars }: PillarsClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPillar, setEditingPillar] = useState<PillarType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PillarFormData>({
    resolver: zodResolver(pillarSchema),
  });

  const openEditModal = (pillar: PillarType) => {
    setEditingPillar(pillar);
    reset({
      title: pillar.title,
      slug: pillar.slug,
      description: pillar.description,
      icon: pillar.icon,
      order: pillar.order,
    });
    setError(null);
    setModalOpen(true);
  };

  const onSubmit = async (data: PillarFormData) => {
    setError(null);
    startTransition(async () => {
      try {
        if (editingPillar) {
          await updatePillar(editingPillar.id, data);
          setModalOpen(false);
          router.refresh();
        }
      } catch (err: any) {
        setError(err.message || "Failed to update pillar framework.");
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Informative description banner */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 text-sm text-teal-800 leading-relaxed flex gap-3">
        <Layers size={20} className="shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold mb-1">About the 7 Pillars Framework</h4>
          <p>
            These pillars represent the core structural categories of PRIME SDN. You can update their titles, descriptions, icons, and sort orders. These changes instantly reflect on the public landing page and about/framework pages.
          </p>
        </div>
      </div>

      {/* Grid of Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const IconComponent = iconMap[pillar.icon] || Compass;
          return (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-maroon-50 text-maroon-900 flex items-center justify-center border border-maroon-100">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">{pillar.title}</h3>
                    <p className="text-xs text-gray-400">Order: {pillar.order} | Slug: {pillar.slug}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-150 flex items-center justify-end">
                <button
                  onClick={() => openEditModal(pillar)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 rounded text-xs font-semibold border border-gray-200 transition-colors cursor-pointer"
                >
                  <Edit2 size={13} />
                  <span>Configure</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden my-8">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <h3 className="font-bold text-lg">Configure Pillar: {editingPillar?.title}</h3>
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
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Pillar Title
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. Governance &amp; Policy"
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
                    placeholder="governance-policy"
                    readOnly
                  />
                  {errors.slug && (
                    <p className="mt-1 text-xs text-red-600">{errors.slug.message}</p>
                  )}
                </div>

                {/* Icon Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Icon Badge
                  </label>
                  <select
                    {...register("icon")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  >
                    {Object.keys(iconMap).map((iconKey) => (
                      <option key={iconKey} value={iconKey}>
                        {iconKey}
                      </option>
                    ))}
                  </select>
                  {errors.icon && (
                    <p className="mt-1 text-xs text-red-600">{errors.icon.message}</p>
                  )}
                </div>

                {/* Sort Order */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    {...register("order")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. 1"
                  />
                  {errors.order && (
                    <p className="mt-1 text-xs text-red-600">{errors.order.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Pillar Description
                  </label>
                  <textarea
                    rows={4}
                    {...register("description")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="Detailed explanation of the pillar..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>
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
                  <span>Save Configuration</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
