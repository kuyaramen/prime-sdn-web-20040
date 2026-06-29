"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { policySchema, type PolicyFormData } from "@/lib/validations";
import {
  createPolicy,
  updatePolicy,
  deletePolicy,
} from "@/app/actions/admin";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  FileText,
  AlertCircle,
  Download,
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface PolicyType {
  id: string;
  title: string;
  type: string;
  refNumber: string;
  dateIssued: Date;
  description: string;
  fileUrl: string | null;
}

interface PoliciesClientProps {
  initialPolicies: PolicyType[];
}

export function PoliciesClient({ initialPolicies }: PoliciesClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState<PolicyType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const policyTypes = ["Provincial Ordinance", "Executive Order", "Resolution", "Memorandum Circular"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PolicyFormData>({
    resolver: zodResolver(policySchema),
  });

  const openAddModal = () => {
    setEditingPolicy(null);
    reset({
      title: "",
      type: policyTypes[0],
      refNumber: "",
      dateIssued: new Date().toISOString().split("T")[0],
      description: "",
      fileUrl: "/docs/policies/placeholder.pdf",
    });
    setError(null);
    setModalOpen(true);
  };

  const openEditModal = (policy: PolicyType) => {
    setEditingPolicy(policy);
    reset({
      title: policy.title,
      type: policy.type,
      refNumber: policy.refNumber,
      dateIssued: new Date(policy.dateIssued).toISOString().split("T")[0],
      description: policy.description,
      fileUrl: policy.fileUrl || "",
    });
    setError(null);
    setModalOpen(true);
  };

  const onSubmit = async (data: PolicyFormData) => {
    setError(null);
    startTransition(async () => {
      try {
        if (editingPolicy) {
          await updatePolicy(editingPolicy.id, data);
        } else {
          await createPolicy(data);
        }
        setModalOpen(false);
        router.refresh();
      } catch (err: any) {
        setError(err.message || "Failed to save policy.");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this policy?")) return;

    startTransition(async () => {
      try {
        await deletePolicy(id);
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to delete policy.");
      }
    });
  };

  const filteredPolicies = initialPolicies.filter((policy) =>
    policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.refNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder="Search policies..."
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
          <span>Add Policy</span>
        </button>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {filteredPolicies.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-400 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-3.5">Reference &amp; Title</th>
                  <th className="px-6 py-3.5">Type</th>
                  <th className="px-6 py-3.5">Date Issued</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {filteredPolicies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-start gap-4">
                      <div className="p-2 rounded bg-maroon-50 text-maroon-950 shrink-0 mt-0.5 border border-maroon-100">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 max-w-lg leading-snug">
                          {policy.title}
                        </p>
                        <p className="text-xs text-gray-400 font-medium mt-1">
                          Ref: <span className="text-gray-600 font-semibold font-mono">{policy.refNumber}</span>
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-250">
                        {policy.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">
                      {formatDate(policy.dateIssued)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {policy.fileUrl && (
                          <Link
                            href={policy.fileUrl}
                            target="_blank"
                            className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Download Document"
                          >
                            <Download size={16} />
                          </Link>
                        )}
                        <button
                          onClick={() => openEditModal(policy)}
                          className="p-1.5 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(policy.id)}
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
            <p className="text-sm">No policies found.</p>
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
                {editingPolicy ? "Edit Policy Record" : "Add New Policy Record"}
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
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Policy Title
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. Surigao del Norte Innovation Council Charter"
                  />
                  {errors.title && (
                    <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>
                  )}
                </div>

                {/* Type */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Policy Type
                  </label>
                  <select
                    {...register("type")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  >
                    {policyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.type && (
                    <p className="mt-1 text-xs text-red-600">{errors.type.message}</p>
                  )}
                </div>

                {/* RefNumber */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Reference / Document Number
                  </label>
                  <input
                    type="text"
                    {...register("refNumber")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. PO-2024-001"
                  />
                  {errors.refNumber && (
                    <p className="mt-1 text-xs text-red-600">{errors.refNumber.message}</p>
                  )}
                </div>

                {/* Date Issued */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Date Issued / Approved
                  </label>
                  <input
                    type="date"
                    {...register("dateIssued")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  />
                  {errors.dateIssued && (
                    <p className="mt-1 text-xs text-red-600">{errors.dateIssued.message}</p>
                  )}
                </div>

                {/* File URL */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Document File URL (PDF/Doc)
                  </label>
                  <input
                    type="text"
                    {...register("fileUrl")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="e.g. /docs/policies/PO-2024-001.pdf"
                  />
                  {errors.fileUrl && (
                    <p className="mt-1 text-xs text-red-600">{errors.fileUrl.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Brief Description
                  </label>
                  <textarea
                    rows={4}
                    {...register("description")}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                    placeholder="Explain the background and key provisions of this policy..."
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
                  <span>{editingPolicy ? "Save Changes" : "Add Policy"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
