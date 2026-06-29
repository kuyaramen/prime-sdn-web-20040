"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteSubscriber } from "@/app/actions/admin";
import { Search, Download, Trash2, Users, AlertCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: Date;
}

interface SubscribersClientProps {
  subscribers: NewsletterSubscriber[];
}

export function SubscribersClient({ subscribers }: SubscribersClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleExportCSV = () => {
    if (subscribers.length === 0) return;

    const headers = ["Subscriber ID", "Email Address", "Date Subscribed"];
    const rows = subscribers.map((sub) => [
      sub.id,
      sub.email,
      new Date(sub.subscribedAt).toISOString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" + // Add BOM for Excel compatibility
      [
        headers.map((h) => `"${h}"`).join(","),
        ...rows.map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(",")),
      ].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `prime_sdn_subscribers_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this subscriber?")) return;

    startTransition(async () => {
      try {
        await deleteSubscriber(id);
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to remove subscriber.");
      }
    });
  };

  const filteredSubscribers = subscribers.filter((sub) =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder="Search email address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
          />
        </div>

        {/* CSV Export */}
        <button
          onClick={handleExportCSV}
          disabled={subscribers.length === 0}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-maroon-900 hover:bg-maroon-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm font-semibold shadow-md transition-colors cursor-pointer"
        >
          <Download size={18} />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {filteredSubscribers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-400 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-3.5">Email Address</th>
                  <th className="px-6 py-3.5">Subscribed Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {filteredSubscribers.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {sub.email}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">
                      {formatDate(sub.subscribedAt)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(sub.id)}
                        disabled={isPending}
                        className="p-1.5 rounded hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors cursor-pointer disabled:opacity-50"
                        title="Remove Subscriber"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <Users size={32} className="mx-auto mb-3" />
            <p className="text-sm">No newsletter subscribers found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
