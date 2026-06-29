"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Calendar, TrendingUp, TrendingDown, Users, Eye, FileText, Activity, MapPin, Globe, Monitor, Smartphone, Tablet, BarChart3, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnalyticsClient() {
  const [dateRange, setDateRange] = useState("30d");
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExporting(false);
  };

  const stats = [
    { name: "Total Visitors", value: "45,231", change: "+12.5%", trend: "up" },
    { name: "Unique Visitors", value: "32,847", change: "+8.3%", trend: "up" },
    { name: "Page Views", value: "128,456", change: "+15.2%", trend: "up" },
    { name: "Avg. Session Duration", value: "4:32", change: "-2.1%", trend: "down" },
    { name: "Bounce Rate", value: "42.3%", change: "-5.4%", trend: "up" },
    { name: "Downloads", value: "1,234", change: "+22.1%", trend: "up" },
  ];

  const topPages = [
    { page: "/", views: "28,456", change: "+18.2%" },
    { page: "/vision", views: "12,345", change: "+12.5%" },
    { page: "/mission", views: "10,234", change: "+8.7%" },
    { page: "/activities", views: "8,567", change: "+15.3%" },
    { page: "/news", views: "7,234", change: "+22.1%" },
    { page: "/discover-surigao", views: "6,123", change: "+35.4%" },
    { page: "/frameworks", views: "5,456", change: "+10.2%" },
    { page: "/core-values", views: "4,567", change: "+7.8%" },
  ];

  const topArticles = [
    { title: "Innovation Week 2026 Announced", views: "5,234", change: "+28.5%" },
    { title: "Startup Grant Winners", views: "4,567", change: "+15.2%" },
    { title: "New Innovation Hub Opens", views: "3,890", change: "+22.1%" },
    { title: "Tech Summit Registration Open", views: "3,234", change: "+18.7%" },
    { title: "Q4 Innovation Report", views: "2,890", change: "+12.5%" },
  ];

  const topActivities = [
    { title: "Startup Bootcamp", views: "8,234", change: "+35.2%" },
    { title: "Tech Pitch Competition", views: "6,567", change: "+28.1%" },
    { title: "Innovation Workshop", views: "5,234", change: "+22.5%" },
    { title: "Networking Event", views: "4,123", change: "+18.2%" },
    { title: "Mentorship Program", views: "3,567", change: "+15.7%" },
  ];

  const topDownloads = [
    { title: "Strategic Plan 2024-2028", downloads: "456", change: "+12.5%" },
    { title: "Startup Grant Application", downloads: "389", change: "+22.1%" },
    { title: "Innovation Framework Guide", downloads: "345", change: "+18.7%" },
    { title: "Policy Document", downloads: "289", change: "+15.2%" },
    { title: "Partnership Agreement", downloads: "234", change: "+10.5%" },
  ];

  const visitorLocations = [
    { location: "Surigao del Norte", visitors: "15,234", percentage: "33.7%" },
    { location: "Manila", visitors: "8,456", percentage: "18.7%" },
    { location: "Cebu", visitors: "6,234", percentage: "13.8%" },
    { location: "Davao", visitors: "4,567", percentage: "10.1%" },
    { location: "International", visitors: "10,740", percentage: "23.7%" },
  ];

  const trafficSources = [
    { source: "Direct", visitors: "15,234", percentage: "33.7%" },
    { source: "Organic Search", visitors: "12,456", percentage: "27.5%" },
    { source: "Social Media", visitors: "8,234", percentage: "18.2%" },
    { source: "Referral", visitors: "6,123", percentage: "13.5%" },
    { source: "Email", visitors: "3,184", percentage: "7.1%" },
  ];

  const deviceStats = [
    { device: "Desktop", users: "28,456", percentage: "62.8%" },
    { device: "Mobile", users: "14,234", percentage: "31.4%" },
    { device: "Tablet", users: "2,541", percentage: "5.6%" },
  ];

  const dailyVisitors = [
    { day: "Mon", visitors: "4,234" },
    { day: "Tue", visitors: "4,567" },
    { day: "Wed", visitors: "4,890" },
    { day: "Thu", visitors: "5,123" },
    { day: "Fri", visitors: "5,456" },
    { day: "Sat", visitors: "3,890" },
    { day: "Sun", visitors: "3,234" },
  ];

  const monthlyGrowth = [
    { month: "Jan", visitors: "32,456", growth: "+15.2%" },
    { month: "Feb", visitors: "35,678", growth: "+18.5%" },
    { month: "Mar", visitors: "38,234", growth: "+12.3%" },
    { month: "Apr", visitors: "41,567", growth: "+14.7%" },
    { month: "May", visitors: "45,231", growth: "+18.2%" },
  ];

  const recentActivity = [
    { action: "Page View", page: "/vision", time: "2 min ago" },
    { action: "Download", page: "/documents/policy.pdf", time: "5 min ago" },
    { action: "Page View", page: "/activities", time: "8 min ago" },
    { action: "Page View", page: "/discover-surigao", time: "12 min ago" },
    { action: "Download", page: "/documents/framework.pdf", time: "15 min ago" },
  ];

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
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-500 mt-1">Monitor website performance and user engagement</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <>
                <Activity size={18} className="animate-spin" />
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Export Report</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-maroon-100 text-maroon-900">
                <Users size={18} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span>{stat.change}</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Traffic Overview</h2>
              <p className="text-sm text-gray-500 mt-1">Page views over time</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              <span>Last 30 days</span>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-t from-maroon-50 to-transparent rounded-xl p-4 relative">
            <div className="absolute inset-4 flex items-end gap-1">
              {[35, 45, 40, 55, 50, 65, 60, 70, 55, 80, 75, 85, 70, 90, 85, 95, 80, 88, 75, 82, 70, 78, 65, 72, 58, 68, 55, 62, 48, 55].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-maroon-600 to-maroon-400 rounded-t-sm transition-all hover:from-maroon-700 hover:to-maroon-500"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Traffic Sources</h2>
              <p className="text-sm text-gray-500 mt-1">Where visitors come from</p>
            </div>
          </div>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={source.source} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900">{source.source}</span>
                  <span className="text-gray-600">{source.percentage}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-maroon-900 rounded-full transition-all"
                    style={{ width: source.percentage }}
                  />
                </div>
                <p className="text-xs text-gray-500">{source.visitors} visitors</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Top Pages</h2>
              <p className="text-sm text-gray-500 mt-1">Most visited pages</p>
            </div>
          </div>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-maroon-100 text-maroon-900 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{page.page}</p>
                    <p className="text-xs text-gray-500">{page.views} views</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600">{page.change}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Device Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Device Breakdown</h2>
              <p className="text-sm text-gray-500 mt-1">Visitors by device type</p>
            </div>
          </div>
          <div className="space-y-4">
            {deviceStats.map((device) => (
              <div key={device.device} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900">{device.device}</span>
                  <span className="text-gray-600">{device.percentage}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-maroon-900 rounded-full transition-all"
                    style={{ width: device.percentage }}
                  />
                </div>
                <p className="text-xs text-gray-500">{device.users} users</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Top Articles</h2>
              <p className="text-sm text-gray-500 mt-1">Most read news</p>
            </div>
          </div>
          <div className="space-y-3">
            {topArticles.map((article, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
                    <FileText size={16} />
                  </div>
                  <span className="text-sm font-medium text-gray-900 truncate max-w-[150px]">{article.title}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{article.views}</p>
                  <p className="text-xs text-green-600">{article.change}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Visitor Locations</h2>
              <p className="text-sm text-gray-500 mt-1">Geographic distribution</p>
            </div>
            <Globe size={20} className="text-gray-400" />
          </div>
          <div className="space-y-3">
            {visitorLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{location.location}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{location.visitors}</p>
                  <p className="text-xs text-gray-500">{location.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Downloads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Top Downloads</h2>
              <p className="text-sm text-gray-500 mt-1">Most downloaded documents</p>
            </div>
            <Download size={20} className="text-gray-400" />
          </div>
          <div className="space-y-3">
            {topDownloads.map((download, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-900 truncate max-w-[150px]">{download.title}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{download.downloads}</p>
                  <p className="text-xs text-green-600">{download.change}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Monthly Growth */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-white rounded-2xl border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Monthly Growth</h2>
            <p className="text-sm text-gray-500 mt-1">Visitor growth trend</p>
          </div>
          <BarChart3 size={20} className="text-gray-400" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {monthlyGrowth.map((month, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="text-sm font-bold text-gray-900 mb-1">{month.month}</p>
              <p className="text-lg font-bold text-maroon-900">{month.visitors}</p>
              <p className="text-xs text-green-600 font-semibold">{month.growth}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
