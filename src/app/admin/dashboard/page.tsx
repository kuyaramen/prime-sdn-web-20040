"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Newspaper,
  Rocket,
  FileText,
  Inbox,
  Users,
  ArrowRight,
  CheckCircle,
  Layers,
  Video,
  TrendingUp,
  TrendingDown,
  Plus,
  Activity,
  Bell,
  Clock,
  Server,
  Database,
  Shield,
  Globe,
  HardDrive,
  Zap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Calendar as CalendarIcon,
  FileCheck,
  Eye,
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

interface StatCard {
  name: string;
  count: number;
  href: string;
  icon: any;
  color: string;
  trend: number;
  actionable?: boolean;
  actionText?: string;
}

interface ActivityItem {
  id: string;
  type: string;
  message: string;
  time: string;
  user: string;
  status?: "success" | "warning" | "error" | "info";
}

export default function DashboardPage() {
  const [stats, setStats] = useState<StatCard[]>([
    { name: "Website Visitors", count: 45231, href: "/admin/analytics", icon: Users, color: "from-blue-500 to-blue-600", trend: 12, actionable: true, actionText: "View Analytics" },
    { name: "Pending Approvals", count: 5, href: "/admin/content", icon: FileCheck, color: "from-amber-500 to-amber-600", trend: 0, actionable: true, actionText: "Review" },
    { name: "Published News", count: 128, href: "/admin/news", icon: Newspaper, color: "from-teal-500 to-teal-600", trend: 15 },
    { name: "Upcoming Events", count: 12, href: "/admin/activities", icon: Calendar, color: "from-green-500 to-green-600", trend: 22, actionable: true, actionText: "View Calendar" },
    { name: "Active Users", count: 8, href: "/admin/users", icon: Users, color: "from-purple-500 to-purple-600", trend: 8 },
    { name: "Contact Messages", count: 23, href: "/admin/communication/contact", icon: Inbox, color: "from-maroon-700 to-maroon-800", trend: -8, actionable: true, actionText: "Respond" },
  ]);

  const [activities, setActivities] = useState<ActivityItem[]>([
    { id: "1", type: "news", message: "Administrator published: Innovation Week 2026", time: "10:30 AM", user: "John Admin", status: "success" },
    { id: "2", type: "content", message: "Editor updated: Vision Page", time: "09:45 AM", user: "Jane Editor", status: "info" },
    { id: "3", type: "media", message: "Media uploaded: Framework Illustration", time: "09:10 AM", user: "Mike Media", status: "success" },
    { id: "4", type: "activity", message: "Activity created: Startup Bootcamp", time: "08:30 AM", user: "Sarah Content", status: "success" },
    { id: "5", type: "system", message: "Backup completed successfully", time: "08:00 AM", user: "System", status: "success" },
    { id: "6", type: "approval", message: "News pending approval: Q4 Report", time: "07:45 AM", user: "System", status: "warning" },
    { id: "7", type: "security", message: "New login detected from IP 192.168.1.100", time: "07:30 AM", user: "System", status: "warning" },
    { id: "8", type: "error", message: "Failed login attempt from unknown IP", time: "07:15 AM", user: "System", status: "error" },
  ]);

  const quickActions = [
    { name: "Create News", href: "/admin/news", icon: Newspaper, color: "bg-teal-500" },
    { name: "Create Activity", href: "/admin/activities", icon: Activity, color: "bg-orange-500" },
    { name: "Upload Media", href: "/admin/media", icon: Video, color: "bg-pink-500" },
    { name: "Add Framework", href: "/admin/content/framework", icon: Layers, color: "bg-blue-500" },
    { name: "Publish Update", href: "/admin/content/homepage", icon: FileText, color: "bg-green-500" },
    { name: "Add Policy", href: "/admin/documents", icon: FileText, color: "bg-purple-500" },
    { name: "Create Event", href: "/admin/activities", icon: Calendar, color: "bg-amber-500" },
    { name: "Manage Users", href: "/admin/users", icon: Users, color: "bg-maroon-700" },
  ];

  const [systemStatus, setSystemStatus] = useState({
    website: "online",
    database: "healthy",
    storage: "45%",
    ssl: "valid",
    lastBackup: "2 hours ago",
    deployment: "v2.4.1",
    server: "optimal",
  });

  const CountUpAnimation = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = (duration / end) * 1000;
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }, [value]);
    
    return <span>{displayValue}</span>;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
      case "healthy":
      case "valid":
      case "optimal":
        return <CheckCircle2 size={16} className="text-green-600" />;
      case "warning":
        return <AlertTriangle size={16} className="text-amber-600" />;
      case "error":
      case "offline":
        return <XCircle size={16} className="text-red-600" />;
      default:
        return <CheckCircle2 size={16} className="text-green-600" />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "news": return Newspaper;
      case "content": return FileText;
      case "media": return Video;
      case "activity": return Activity;
      case "system": return Server;
      case "approval": return FileCheck;
      case "security": return Shield;
      case "error": return XCircle;
      default: return Activity;
    }
  };

  const getActivityColor = (status?: string) => {
    switch (status) {
      case "success": return "bg-green-100 text-green-700";
      case "warning": return "bg-amber-100 text-amber-700";
      case "error": return "bg-red-100 text-red-700";
      case "info": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Administrator</h1>
          <p className="text-gray-500 mt-1">Digital Operations Center • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
            <CalendarIcon size={18} />
            <span className="text-sm font-medium">Calendar</span>
          </button>
        </div>
      </div>

      {/* Today's Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={stat.href}
                className="block bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-maroon-300 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                    <Icon size={20} />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${stat.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span>{Math.abs(stat.trend)}%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-extrabold text-gray-900 group-hover:text-maroon-900 transition-colors">
                    {stat.count.toLocaleString()}
                  </p>
                </div>
                {stat.actionable && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-maroon-900">
                    <ArrowRight size={14} />
                    <span>{stat.actionText}</span>
                  </div>
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Website Status Monitor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-gray-900">System Health</h2>
              <p className="text-sm text-gray-500 mt-0.5">Real-time status monitoring</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              <CheckCircle2 size={14} />
              <span>All Systems Operational</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">Website Status</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(systemStatus.website)}
                <span className="text-sm font-semibold text-green-600 capitalize">{systemStatus.website}</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Database size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">Database</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(systemStatus.database)}
                <span className="text-sm font-semibold text-green-600 capitalize">{systemStatus.database}</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <HardDrive size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">Storage Usage</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{systemStatus.storage}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">SSL Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(systemStatus.ssl)}
                <span className="text-sm font-semibold text-green-600 capitalize">{systemStatus.ssl}</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Server size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">Server Health</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(systemStatus.server)}
                <span className="text-sm font-semibold text-green-600 capitalize">{systemStatus.server}</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">Last Backup</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{systemStatus.lastBackup}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Zap size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-900">Version</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{systemStatus.deployment}</span>
            </div>
          </div>
        </motion.div>

        {/* Smart Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Smart Quick Actions</h2>
              <p className="text-sm text-gray-500 mt-0.5">Intelligent shortcuts for common tasks</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.name}
                  href={action.href}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-maroon-300 hover:bg-maroon-50 transition-all group"
                >
                  <div className={`p-2.5 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-maroon-900">{action.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
              <p className="text-sm text-gray-500 mt-0.5">Latest system events and updates</p>
            </div>
            <Link href="/admin/settings/audit" className="text-xs font-semibold text-maroon-900 hover:underline flex items-center gap-1.5">
              <span>View all</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {activities.map((activity, index) => {
              const ActivityIcon = getActivityIcon(activity.type);
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${getActivityColor(activity.status)} shrink-0`}>
                    <ActivityIcon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {activity.time}
                      </span>
                      <span>•</span>
                      <span>{activity.user}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pending Approvals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Pending Approvals</h2>
              <p className="text-sm text-gray-500 mt-0.5">Content awaiting review</p>
            </div>
            <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">5 items</span>
          </div>
          <div className="space-y-3">
            {[
              { title: "Q4 Innovation Report", type: "News", time: "2 hours ago" },
              { title: "Startup Bootcamp Event", type: "Activity", time: "4 hours ago" },
              { title: "Homepage Banner Update", type: "Content", time: "6 hours ago" },
              { title: "New Policy Document", type: "Document", time: "1 day ago" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                  <FileCheck size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.type} • {item.time}</p>
                </div>
                <ArrowRight size={14} className="text-gray-400" />
              </div>
            ))}
          </div>
          <Link href="/admin/content" className="mt-4 block text-center text-sm font-semibold text-maroon-900 hover:underline">
            View all pending items
          </Link>
        </motion.div>
      </div>

      {/* Upcoming Events Calendar Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-sm text-gray-500 mt-0.5">Scheduled activities and deadlines</p>
          </div>
          <Link href="/admin/activities" className="text-xs font-semibold text-maroon-900 hover:underline flex items-center gap-1.5">
            <span>View calendar</span>
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Innovation Week 2026", date: "Jan 20", time: "9:00 AM", type: "Event" },
            { title: "Startup Pitch Competition", date: "Jan 25", time: "2:00 PM", type: "Event" },
            { title: "Framework Review Meeting", date: "Jan 28", time: "10:00 AM", type: "Meeting" },
            { title: "News Release: Q1 Report", date: "Feb 1", time: "12:00 PM", type: "Publication" },
          ].map((event, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <CalendarIcon size={16} className="text-maroon-900" />
                <span className="text-xs font-semibold text-maroon-900">{event.date}</span>
              </div>
              <p className="text-sm font-medium text-gray-900 mb-1">{event.title}</p>
              <p className="text-xs text-gray-500">{event.time} • {event.type}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
