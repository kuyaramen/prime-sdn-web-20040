"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, CheckCircle, AlertCircle, Info, AlertTriangle, Trash2 } from "lucide-react";

interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "success",
      title: "Draft Saved",
      message: "Homepage draft saved successfully",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
    },
    {
      id: "2",
      type: "info",
      title: "New Login",
      message: "New login from IP 192.168.1.100",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: false,
    },
    {
      id: "3",
      type: "warning",
      title: "Backup Due",
      message: "Automatic backup scheduled in 1 hour",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "4",
      type: "success",
      title: "News Published",
      message: "Local Tech Startups article published",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getIcon = (type: Notification["type"]) => {
    const icons = {
      success: CheckCircle,
      error: AlertCircle,
      info: Info,
      warning: AlertTriangle,
    };
    return icons[type];
  };

  const getIconColor = (type: Notification["type"]) => {
    const colors = {
      success: "text-green-600 bg-green-100",
      error: "text-red-600 bg-red-100",
      info: "text-blue-600 bg-blue-100",
      warning: "text-amber-600 bg-amber-100",
    };
    return colors[type];
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-12 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-gray-600" />
                  <h3 className="font-bold text-gray-900">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 bg-maroon-900 text-white text-xs rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs font-semibold text-maroon-900 hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg hover:bg-gray-200 text-gray-400 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => {
                    const Icon = getIcon(notification.type);
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex items-start gap-3 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                          !notification.read ? "bg-blue-50/50" : ""
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className={`p-2 rounded-lg ${getIconColor(notification.type)} shrink-0`}>
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-semibold text-gray-900 text-sm">{notification.title}</p>
                            {!notification.read && (
                              <span className="w-2 h-2 bg-maroon-900 rounded-full shrink-0 mt-1.5" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{formatTime(notification.timestamp)}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                          className="p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                        >
                          <X size={14} />
                        </button>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <Bell size={32} className="mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">No notifications</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                  <button
                    onClick={clearAll}
                    className="flex items-center gap-2 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={14} />
                    <span>Clear all notifications</span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
