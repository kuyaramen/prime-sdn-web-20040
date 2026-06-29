"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Mail, Reply, Archive, Trash2, Eye, Check, X, Download, Filter } from "lucide-react";
import Link from "next/link";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied" | "archived";
  date: Date;
}

export default function ContactMessagesClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "unread" | "read" | "replied" | "archived">("all");
  const [selectedMessages, setSelectedMessages] = useState<Set<string>>(new Set());
  const [viewingMessage, setViewingMessage] = useState<ContactMessage | null>(null);

  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      subject: "Inquiry about startup programs",
      message: "I would like to know more about the startup grant program. How can I apply?",
      status: "unread",
      date: new Date("2024-01-15T10:30:00"),
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      subject: "Partnership opportunity",
      message: "Our company is interested in partnering with PRIME SDN for innovation initiatives.",
      status: "read",
      date: new Date("2024-01-14T14:20:00"),
    },
    {
      id: "3",
      name: "Robert Johnson",
      email: "robert.j@example.com",
      subject: "Question about framework pillars",
      message: "Can you explain more about the innovation pillar and its programs?",
      status: "replied",
      date: new Date("2024-01-13T09:15:00"),
    },
    {
      id: "4",
      name: "Maria Garcia",
      email: "maria.g@example.com",
      subject: "Volunteer opportunity",
      message: "I would like to volunteer for PRIME SDN activities. How can I help?",
      status: "unread",
      date: new Date("2024-01-12T16:45:00"),
    },
    {
      id: "5",
      name: "David Lee",
      email: "david.lee@example.com",
      subject: "Media inquiry",
      message: "I'm a journalist writing about innovation ecosystems in the Philippines.",
      status: "archived",
      date: new Date("2024-01-11T11:30:00"),
    },
  ]);

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || message.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectMessage = (id: string) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedMessages(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedMessages.size === filteredMessages.length) {
      setSelectedMessages(new Set());
    } else {
      setSelectedMessages(new Set(filteredMessages.map((m) => m.id)));
    }
  };

  const handleMarkAsRead = (id: string) => {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: "read" as const } : m)));
  };

  const handleArchive = (id: string) => {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: "archived" as const } : m)));
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((m) => m.id !== id));
    }
  };

  const handleBulkArchive = () => {
    setMessages(
      messages.map((m) => (selectedMessages.has(m.id) ? { ...m, status: "archived" as const } : m))
    );
    setSelectedMessages(new Set());
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedMessages.size} messages?`)) {
      setMessages(messages.filter((m) => !selectedMessages.has(m.id)));
      setSelectedMessages(new Set());
    }
  };

  const getStatusBadge = (status: ContactMessage["status"]) => {
    const styles = {
      unread: "bg-blue-100 text-blue-700 border-blue-200",
      read: "bg-gray-100 text-gray-700 border-gray-200",
      replied: "bg-green-100 text-green-700 border-green-200",
      archived: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
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
            <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
            <p className="text-gray-500 mt-1">Manage inquiries from website visitors</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {selectedMessages.size > 0 && (
            <>
              <button
                onClick={handleBulkArchive}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
              >
                <Archive size={18} />
                <span>Archive ({selectedMessages.size})</span>
              </button>
              <button
                onClick={handleBulkDelete}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold"
              >
                <Trash2 size={18} />
                <span>Delete ({selectedMessages.size})</span>
              </button>
            </>
          )}
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
            <Download size={18} />
            <span>Export</span>
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
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Messages List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
      >
        {filteredMessages.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-4 w-12">
                    <input
                      type="checkbox"
                      checked={selectedMessages.size === filteredMessages.length && filteredMessages.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 text-maroon-900 focus:ring-maroon-700/20"
                    />
                  </th>
                  <th className="px-6 py-4">Sender</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredMessages.map((message) => (
                  <tr
                    key={message.id}
                    className={`hover:bg-gray-50 transition-colors ${message.status === "unread" ? "bg-blue-50/30" : ""}`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedMessages.has(message.id)}
                        onChange={() => handleSelectMessage(message.id)}
                        className="w-4 h-4 rounded border-gray-300 text-maroon-900 focus:ring-maroon-700/20"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-900 flex items-center justify-center font-bold">
                          {message.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{message.name}</p>
                          <p className="text-xs text-gray-500">{message.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900 truncate max-w-xs">{message.subject}</p>
                      <p className="text-xs text-gray-500 truncate max-w-xs">{message.message}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatDate(message.date)}</td>
                    <td className="px-6 py-4">{getStatusBadge(message.status)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setViewingMessage(message)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => {
                            handleMarkAsRead(message.id);
                            window.location.href = `mailto:${message.email}`;
                          }}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors"
                          title="Reply"
                        >
                          <Reply size={16} />
                        </button>
                        <button
                          onClick={() => handleArchive(message.id)}
                          className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-600 hover:text-amber-700 transition-colors"
                          title="Archive"
                        >
                          <Archive size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(message.id)}
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
            <Mail size={32} className="mx-auto mb-3" />
            <p className="text-sm">No messages found.</p>
          </div>
        )}
      </motion.div>

      {/* Message View Modal */}
      {viewingMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <h3 className="font-bold text-lg">Message Details</h3>
              </div>
              <button
                onClick={() => setViewingMessage(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-maroon-100 text-maroon-900 flex items-center justify-center font-bold text-lg">
                  {viewingMessage.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{viewingMessage.name}</h4>
                  <p className="text-sm text-gray-500">{viewingMessage.email}</p>
                  <p className="text-xs text-gray-400 mt-1">{formatDate(viewingMessage.date)}</p>
                </div>
                {getStatusBadge(viewingMessage.status)}
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Subject</h5>
                <p className="text-gray-700">{viewingMessage.subject}</p>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Message</h5>
                <p className="text-gray-700 whitespace-pre-wrap">{viewingMessage.message}</p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
              <button
                onClick={() => {
                  handleArchive(viewingMessage.id);
                  setViewingMessage(null);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors font-semibold"
              >
                <Archive size={16} />
                <span>Archive</span>
              </button>
              <button
                onClick={() => {
                  handleMarkAsRead(viewingMessage.id);
                  window.location.href = `mailto:${viewingMessage.email}`;
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold"
              >
                <Reply size={16} />
                <span>Reply</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
