"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Upload, RefreshCw, Database, Clock, HardDrive, AlertCircle, CheckCircle, X } from "lucide-react";
import Link from "next/link";

interface Backup {
  id: string;
  name: string;
  size: string;
  type: "manual" | "automatic";
  createdAt: Date;
  status: "completed" | "failed" | "in_progress";
}

export default function BackupRestoreClient() {
  const [isCreatingBackup, setIsCreatingBackup] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [backups, setBackups] = useState<Backup[]>([
    {
      id: "1",
      name: "backup-2024-01-15-10-30.sql",
      size: "15.2 MB",
      type: "manual",
      createdAt: new Date("2024-01-15T10:30:00"),
      status: "completed",
    },
    {
      id: "2",
      name: "backup-2024-01-14-00-00.sql",
      size: "15.1 MB",
      type: "automatic",
      createdAt: new Date("2024-01-14T00:00:00"),
      status: "completed",
    },
    {
      id: "3",
      name: "backup-2024-01-13-00-00.sql",
      size: "15.0 MB",
      type: "automatic",
      createdAt: new Date("2024-01-13T00:00:00"),
      status: "completed",
    },
    {
      id: "4",
      name: "backup-2024-01-12-00-00.sql",
      size: "14.9 MB",
      type: "automatic",
      createdAt: new Date("2024-01-12T00:00:00"),
      status: "completed",
    },
    {
      id: "5",
      name: "backup-2024-01-11-14-20.sql",
      size: "14.8 MB",
      type: "manual",
      createdAt: new Date("2024-01-11T14:20:00"),
      status: "completed",
    },
  ]);

  const [settings, setSettings] = useState({
    autoBackup: true,
    autoBackupFrequency: "daily",
    retentionDays: 30,
    backupTime: "00:00",
  });

  const handleCreateBackup = async () => {
    setIsCreatingBackup(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newBackup: Backup = {
      id: Date.now().toString(),
      name: `backup-${new Date().toISOString().replace(/[:.]/g, "-")}.sql`,
      size: "15.3 MB",
      type: "manual",
      createdAt: new Date(),
      status: "completed",
    };
    
    setBackups([newBackup, ...backups]);
    setIsCreatingBackup(false);
    setNotification({ type: "success", message: "Backup created successfully!" });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRestore = async (backupId: string) => {
    if (!confirm("Are you sure you want to restore this backup? This will replace all current data.")) return;
    
    setIsRestoring(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsRestoring(false);
    setNotification({ type: "success", message: "Backup restored successfully!" });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = (backupId: string) => {
    if (!confirm("Are you sure you want to delete this backup?")) return;
    setBackups(backups.filter(b => b.id !== backupId));
    setNotification({ type: "success", message: "Backup deleted successfully!" });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDownload = (backupId: string) => {
    const backup = backups.find(b => b.id === backupId);
    if (backup) {
      setNotification({ type: "success", message: `Downloading ${backup.name}...` });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const formatDate = (date: Date) => {
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
            <h1 className="text-2xl font-bold text-gray-900">Backup & Restore</h1>
            <p className="text-gray-500 mt-1">Manage database backups and restore points</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
          >
            <Upload size={18} />
            <span>Import Backup</span>
          </button>
          <button
            onClick={handleCreateBackup}
            disabled={isCreatingBackup}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreatingBackup ? (
              <>
                <RefreshCw size={18} className="animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <Database size={18} />
                <span>Create Backup</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`px-4 py-3 rounded-xl flex items-center gap-2 ${
            notification.type === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle size={18} />
          ) : (
            <AlertCircle size={18} />
          )}
          <span className="text-sm font-semibold">{notification.message}</span>
        </motion.div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Backups", value: backups.length, icon: Database },
          { label: "Manual Backups", value: backups.filter(b => b.type === "manual").length, icon: HardDrive },
          { label: "Auto Backups", value: backups.filter(b => b.type === "automatic").length, icon: Clock },
          { label: "Total Size", value: "75.3 MB", icon: Database },
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Backup Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Backup Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Automatic Backups</p>
                <p className="text-sm text-gray-500">Create backups automatically</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoBackup}
                  onChange={(e) => setSettings({ ...settings, autoBackup: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-maroon-700/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-maroon-900" />
              </label>
            </div>

            {settings.autoBackup && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Frequency</label>
                  <select
                    value={settings.autoBackupFrequency}
                    onChange={(e) => setSettings({ ...settings, autoBackupFrequency: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Backup Time</label>
                  <input
                    type="time"
                    value={settings.backupTime}
                    onChange={(e) => setSettings({ ...settings, backupTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Retention Period (Days)</label>
                  <input
                    type="number"
                    value={settings.retentionDays}
                    onChange={(e) => setSettings({ ...settings, retentionDays: parseInt(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Backup List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Backup History</h2>
            <button className="text-sm font-semibold text-maroon-900 hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {backups.map((backup) => (
              <motion.div
                key={backup.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-maroon-100 text-maroon-900">
                    <Database size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{backup.name}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                      <span>{backup.size}</span>
                      <span>•</span>
                      <span>{formatDate(backup.createdAt)}</span>
                      <span>•</span>
                      <span className={`font-semibold ${backup.type === "manual" ? "text-blue-600" : "text-green-600"}`}>
                        {backup.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(backup.id)}
                    className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
                    title="Download"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() => handleRestore(backup.id)}
                    disabled={isRestoring}
                    className="px-3 py-1.5 rounded-lg bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold disabled:opacity-50"
                    title="Restore"
                  >
                    {isRestoring ? "Restoring..." : "Restore"}
                  </button>
                  <button
                    onClick={() => handleDelete(backup.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Warning Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3"
      >
        <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900">
          <p className="font-semibold mb-1">Important: Backup & Restore</p>
          <p className="text-amber-700">Restoring a backup will replace all current data. Always create a new backup before restoring. Automatic backups are retained for the configured retention period.</p>
        </div>
      </motion.div>

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <div className="flex items-center gap-3">
                <Upload size={20} />
                <h3 className="font-bold text-lg">Import Backup</h3>
              </div>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-maroon-900 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto mb-3 text-gray-400" />
                <p className="text-sm font-semibold text-gray-900 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">SQL backup files only</p>
              </div>
              <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setUploadModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button className="px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold">
                  Import
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
