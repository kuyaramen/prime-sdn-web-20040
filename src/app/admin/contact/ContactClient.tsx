"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateSubmissionStatus, deleteSubmission } from "@/app/actions/admin";
import {
  Search,
  Mail,
  Trash2,
  CheckCircle,
  Inbox,
  AlertCircle,
  Clock,
  X,
  MessageSquare,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
}

interface ContactClientProps {
  submissions: ContactSubmission[];
}

export function ContactClient({ submissions }: ContactClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === "new" ? "read" : "new";
    startTransition(async () => {
      try {
        await updateSubmissionStatus(id, nextStatus);
        // Update selected modal data in real-time
        if (selectedSubmission && selectedSubmission.id === id) {
          setSelectedSubmission({ ...selectedSubmission, status: nextStatus });
        }
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to update inquiry status.");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission permanently?")) return;

    startTransition(async () => {
      try {
        await deleteSubmission(id);
        setSelectedSubmission(null);
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to delete submission.");
      }
    });
  };

  const filteredSubmissions = submissions.filter((sub) =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.message.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder="Search sender, email, message text..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
          />
        </div>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {filteredSubmissions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-400 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-3.5">Sender</th>
                  <th className="px-6 py-3.5">Subject &amp; Snippet</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {filteredSubmissions.map((sub) => (
                  <tr
                    key={sub.id}
                    className={`hover:bg-gray-50/50 transition-colors ${
                      sub.status === "new" ? "bg-maroon-50/10 font-medium" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">{sub.name}</div>
                      <div className="text-xs text-gray-400 font-normal flex items-center gap-1 mt-0.5">
                        <Mail size={12} />
                        <span>{sub.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-[280px]">
                      <div className="text-gray-850 truncate font-semibold">{sub.subject}</div>
                      <div className="text-xs text-gray-400 truncate mt-0.5">{sub.message}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleStatus(sub.id, sub.status)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border cursor-pointer select-none transition-colors ${
                          sub.status === "new"
                            ? "bg-maroon-50 text-maroon-900 border-maroon-200 hover:bg-maroon-100"
                            : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                        }`}
                        title="Click to toggle read status"
                      >
                        {sub.status === "new" ? (
                          <>
                            <Clock size={12} />
                            <span>New</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle size={12} />
                            <span>Read</span>
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">
                      {formatDate(sub.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedSubmission(sub)}
                          className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-650 transition-colors cursor-pointer"
                          title="Open Message"
                        >
                          <MessageSquare size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(sub.id)}
                          className="p-1.5 rounded hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                          title="Delete Submission"
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
            <Inbox size={32} className="mx-auto mb-3" />
            <p className="text-sm">No inquiries found.</p>
          </div>
        )}
      </div>

      {/* Message Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden my-8 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <h3 className="font-bold text-lg">Inquiry Detail</h3>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-white/80 hover:text-white focus:outline-none cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Sender</span>
                <p className="font-semibold text-gray-800 text-sm">{selectedSubmission.name}</p>
                <p className="text-xs text-teal-600">{selectedSubmission.email}</p>
              </div>

              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Date Received</span>
                <p className="text-xs text-gray-600 font-medium">{formatDate(selectedSubmission.createdAt)}</p>
              </div>

              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Subject</span>
                <p className="font-semibold text-gray-800 text-sm bg-gray-50 p-2.5 rounded-lg border border-gray-100">{selectedSubmission.subject}</p>
              </div>

              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Message Body</span>
                <div className="text-sm text-gray-700 bg-gray-50/50 p-4 rounded-xl border border-gray-100 leading-relaxed max-h-60 overflow-y-auto whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>

              {/* Status Row */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleToggleStatus(selectedSubmission.id, selectedSubmission.status)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
                    selectedSubmission.status === "new"
                      ? "bg-maroon-50 text-maroon-900 border-maroon-200 hover:bg-maroon-100"
                      : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                  }`}
                >
                  {selectedSubmission.status === "new" ? (
                    <>
                      <Clock size={13} />
                      <span>Mark as Read</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={13} />
                      <span>Mark as New</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-xs font-semibold transition-colors cursor-pointer border border-red-200"
                >
                  <Trash2 size={13} />
                  <span>Delete Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
