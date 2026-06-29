"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Filter, Download, Shield, Clock, User, FileText, Trash2, Settings, AlertCircle } from "lucide-react";
import Link from "next/link";

interface AuditLog {
  id: string;
  action: string;
  entity: string;
  entityId: string;
  userId: string | null;
  userName: string;
  userEmail: string;
  timestamp: Date;
  ipAddress: string;
  details: string;
  category: "content" | "users" | "settings" | "media" | "security";
}

export default function AuditLogsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "content" | "users" | "settings" | "media" | "security">("all");
  const [dateRange, setDateRange] = useState("7d");
  const [isExporting, setIsExporting] = useState(false);

  const [logs, setLogs] = useState<AuditLog[]>([
    {
      id: "1",
      action: "created",
      entity: "Activity",
      entityId: "act-001",
      userId: "user-001",
      userName: "John Admin",
      userEmail: "john@primesdn.gov.ph",
      timestamp: new Date("2024-01-15T10:30:00"),
      ipAddress: "192.168.1.100",
      details: "Created new activity 'Surigao Digital Innovation Summit'",
      category: "content",
    },
    {
      id: "2",
      action: "updated",
      entity: "User",
      entityId: "user-002",
      userId: "user-001",
      userName: "John Admin",
      userEmail: "john@primesdn.gov.ph",
      timestamp: new Date("2024-01-15T09:45:00"),
      ipAddress: "192.168.1.100",
      details: "Updated role for user 'jane@primesdn.gov.ph' to 'editor'",
      category: "users",
    },
    {
      id: "3",
      action: "deleted",
      entity: "Media",
      entityId: "media-001",
      userId: "user-001",
      userName: "John Admin",
      userEmail: "john@primesdn.gov.ph",
      timestamp: new Date("2024-01-15T08:20:00"),
      ipAddress: "192.168.1.100",
      details: "Deleted media file 'old-banner.jpg'",
      category: "media",
    },
    {
      id: "4",
      action: "published",
      entity: "News",
      entityId: "news-001",
      userId: "user-002",
      userName: "Jane Editor",
      userEmail: "jane@primesdn.gov.ph",
      timestamp: new Date("2024-01-14T16:30:00"),
      ipAddress: "192.168.1.105",
      details: "Published news post 'Local Tech Startups Raise Seed Funding'",
      category: "content",
    },
    {
      id: "5",
      action: "login",
      entity: "Session",
      entityId: "sess-001",
      userId: "user-003",
      userName: "Robert Viewer",
      userEmail: "robert@primesdn.gov.ph",
      timestamp: new Date("2024-01-14T14:15:00"),
      ipAddress: "192.168.1.110",
      details: "User logged in successfully",
      category: "security",
    },
    {
      id: "6",
      action: "updated",
      entity: "Setting",
      entityId: "setting-001",
      userId: "user-001",
      userName: "John Admin",
      userEmail: "john@primesdn.gov.ph",
      timestamp: new Date("2024-01-14T11:00:00"),
      ipAddress: "192.168.1.100",
      details: "Updated site name to 'PRIME SDN'",
      category: "settings",
    },
    {
      id: "7",
      action: "failed_login",
      entity: "Session",
      entityId: "sess-002",
      userId: null,
      userName: "Unknown",
      userEmail: "unknown@example.com",
      timestamp: new Date("2024-01-14T10:30:00"),
      ipAddress: "192.168.1.200",
      details: "Failed login attempt - invalid credentials",
      category: "security",
    },
  ]);

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || log.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleExport = async () => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExporting(false);
  };

  const getCategoryIcon = (category: AuditLog["category"]) => {
    const icons = {
      content: FileText,
      users: User,
      settings: Settings,
      media: FileText,
      security: Shield,
    };
    return icons[category];
  };

  const getCategoryColor = (category: AuditLog["category"]) => {
    const colors = {
      content: "bg-blue-100 text-blue-700",
      users: "bg-purple-100 text-purple-700",
      settings: "bg-amber-100 text-amber-700",
      media: "bg-teal-100 text-teal-700",
      security: "bg-red-100 text-red-700",
    };
    return colors[category];
  };

  const getActionBadge = (action: string) => {
    const actionColors: Record<string, string> = {
      created: "bg-green-100 text-green-700",
      updated: "bg-blue-100 text-blue-700",
      deleted: "bg-red-100 text-red-700",
      published: "bg-teal-100 text-teal-700",
      unpublished: "bg-amber-100 text-amber-700",
      login: "bg-green-100 text-green-700",
      failed_login: "bg-red-100 text-red-700",
    };
    return (
      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${actionColors[action] || "bg-gray-100 text-gray-700"}`}>
        {action}
      </span>
    );
  };

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
            <h1 className="text-2xl font-bold text-gray-900">Audit Logs</h1>
            <p className="text-gray-500 mt-1">Track all system activities and changes</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <>
                <Clock size={18} className="animate-spin" />
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Export Logs</span>
              </>
            )}
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
            placeholder="Search logs..."
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
            <option value="all">All Categories</option>
            <option value="content">Content</option>
            <option value="users">Users</option>
            <option value="settings">Settings</option>
            <option value="media">Media</option>
            <option value="security">Security</option>
          </select>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "Total Logs", value: logs.length, icon: FileText },
          { label: "Content", value: logs.filter(l => l.category === "content").length, icon: FileText },
          { label: "Users", value: logs.filter(l => l.category === "users").length, icon: User },
          { label: "Settings", value: logs.filter(l => l.category === "settings").length, icon: Settings },
          { label: "Media", value: logs.filter(l => l.category === "media").length, icon: FileText },
          { label: "Security", value: logs.filter(l => l.category === "security").length, icon: Shield },
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

      {/* Logs Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
      >
        {filteredLogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider font-semibold text-xs">
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Action</th>
                  <th className="px-6 py-4">Entity</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Details</th>
                  <th className="px-6 py-4">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLogs.map((log) => {
                  const CategoryIcon = getCategoryIcon(log.category);
                  return (
                    <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {formatTimestamp(log.timestamp)}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{log.userName}</p>
                          <p className="text-xs text-gray-500">{log.userEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">{getActionBadge(log.action)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 text-sm">{log.entity}</span>
                          <span className="text-xs text-gray-400">#{log.entityId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${getCategoryColor(log.category)}`}>
                          <CategoryIcon size={14} />
                          <span className="capitalize">{log.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{log.details}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 font-mono">{log.ipAddress}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <Search size={32} className="mx-auto mb-3" />
            <p className="text-sm">No audit logs found matching your filters.</p>
          </div>
        )}
      </motion.div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3"
      >
        <AlertCircle size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <p className="font-semibold mb-1">Audit Log Retention</p>
          <p className="text-blue-700">Audit logs are retained for 90 days. For longer retention, export logs regularly. Logs include all user actions, system changes, and security events.</p>
        </div>
      </motion.div>
    </div>
  );
}
