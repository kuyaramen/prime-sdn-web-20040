"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Calendar,
  Newspaper,
  Rocket,
  FileText,
  Layers,
  Inbox,
  Users,
  LogOut,
  ChevronRight,
  Menu,
  X,
  User,
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronDown,
  Settings,
  Shield,
  History,
  Database,
  Lock,
  Bell,
  Activity as ActivityIcon,
  Video,
  BookOpen,
  Building2,
  Target,
  Heart,
  Scale,
  TrendingUp,
  Download,
  HelpCircle,
  Building,
  Handshake,
} from "lucide-react";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommandPalette from "@/components/admin/CommandPalette";
import ThemeToggle from "@/components/admin/ThemeToggle";
import Notifications from "@/components/admin/Notifications";

interface AdminLayoutProps {
  children: ReactNode;
}

interface MenuItem {
  name: string;
  href: string;
  icon: any;
  category: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["Dashboard", "About Us", "Website Content"]));

  const menuCategories: MenuCategory[] = [
    {
      name: "Dashboard",
      items: [
        { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard, category: "Dashboard" },
      ],
    },
    {
      name: "About Us",
      items: [
        { name: "About Dashboard", href: "/admin/about", icon: BookOpen, category: "About Us" },
        { name: "Our Story", href: "/admin/about/story", icon: History, category: "About Us" },
        { name: "Vision (PRIME 2055)", href: "/admin/about/vision", icon: Target, category: "About Us" },
        { name: "Mission (SMART)", href: "/admin/about/mission", icon: Heart, category: "About Us" },
        { name: "Core Values", href: "/admin/about/core-values", icon: Heart, category: "About Us" },
        { name: "Governance Principles", href: "/admin/about/governance", icon: Scale, category: "About Us" },
        { name: "Framework", href: "/admin/about/framework", icon: Layers, category: "About Us" },
        { name: "Innovation Roadmap", href: "/admin/about/roadmap", icon: TrendingUp, category: "About Us" },
        { name: "Policies & Governance", href: "/admin/about/policies", icon: Shield, category: "About Us" },
        { name: "Organization", href: "/admin/about/organization", icon: Building, category: "About Us" },
        { name: "Strategic Partners", href: "/admin/about/partners", icon: Handshake, category: "About Us" },
        { name: "Downloads & Resources", href: "/admin/about/downloads", icon: Download, category: "About Us" },
        { name: "FAQ", href: "/admin/about/faq", icon: HelpCircle, category: "About Us" },
      ],
    },
    {
      name: "Website Content",
      items: [
        { name: "Homepage", href: "/admin/content/homepage", icon: LayoutDashboard, category: "Website Content" },
        { name: "Activities", href: "/admin/activities", icon: ActivityIcon, category: "Website Content" },
        { name: "News & Insights", href: "/admin/news", icon: Newspaper, category: "Website Content" },
        { name: "Discover Surigao", href: "/admin/content/discover-surigao", icon: Rocket, category: "Website Content" },
      ],
    },
    {
      name: "Media",
      items: [
        { name: "Media Library", href: "/admin/media", icon: Video, category: "Media" },
        { name: "Documents", href: "/admin/documents", icon: Database, category: "Media" },
      ],
    },
    {
      name: "Users",
      items: [
        { name: "All Users", href: "/admin/users", icon: Users, category: "Users" },
        { name: "Roles & Permissions", href: "/admin/roles", icon: Shield, category: "Users" },
      ],
    },
    {
      name: "Communication",
      items: [
        { name: "Messages", href: "/admin/contact", icon: Inbox, category: "Communication" },
        { name: "Subscribers", href: "/admin/subscribers", icon: Users, category: "Communication" },
      ],
    },
    {
      name: "Analytics",
      items: [
        { name: "Overview", href: "/admin/analytics", icon: ActivityIcon, category: "Analytics" },
        { name: "Reports", href: "/admin/reports", icon: FileText, category: "Analytics" },
      ],
    },
    {
      name: "Settings",
      items: [
        { name: "Website Settings", href: "/admin/settings/website", icon: Settings, category: "Settings" },
        { name: "System Settings", href: "/admin/settings/system", icon: Lock, category: "Settings" },
        { name: "Audit Logs", href: "/admin/settings/audit", icon: History, category: "Settings" },
      ],
    },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const filteredCategories = menuCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  const handleLogout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-maroon-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "unauthenticated" && pathname !== "/admin/login") {
    return null;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 rounded-xl bg-white shadow-lg text-maroon-900 focus:outline-none hover:bg-gray-50 transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 z-40 transform transition-all duration-300 ease-in-out lg:static lg:flex lg:flex-col shrink-0 shadow-xl lg:shadow-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${sidebarCollapsed ? "lg:w-20" : "lg:w-72"} w-72`}
      >
        {/* Brand */}
        <div className="h-20 flex items-center px-6 border-b border-gray-100 bg-gradient-to-r from-[#5A2396] to-[#1E4FBF]">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight text-white flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white/20">
              <LayoutDashboard size={24} className="text-white" />
            </div>
            <AnimatePresence mode="wait">
              {!sidebarCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    PRIME <span className="text-[#D8A629]">SDN</span>
                    <span className="block text-xs text-white/80 font-sans font-normal mt-1">Admin Portal</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Search */}
        <AnimatePresence mode="wait">
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 border-b border-gray-100"
            >
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4FBF]/20 focus:border-[#5A2396] bg-gray-50"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Card */}
        <div className="p-4 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5A2396] to-[#1E4FBF] text-white flex items-center justify-center shadow-md shrink-0">
            <User size={20} />
          </div>
          <AnimatePresence mode="wait">
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex-1"
              >
                <p className="text-sm font-bold text-gray-900 truncate">
                  {session?.user?.email}
                </p>
                <p className="text-xs text-[#5A2396] uppercase tracking-wider font-semibold">
                  {(session?.user as any)?.role || "Editor"}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Collapse Toggle */}
        <div className="px-4 py-2 border-b border-gray-100">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            {!sidebarCollapsed && <span>Collapse</span>}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-4">
              {!sidebarCollapsed && (
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors"
                >
                  <span>{category.name}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${expandedCategories.has(category.name) ? "rotate-180" : ""}`}
                  />
                </button>
              )}
              <AnimatePresence mode="wait">
                {(sidebarCollapsed || expandedCategories.has(category.name)) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1 mt-1"
                  >
                    {category.items.map((item) => {
                      const isActive = pathname === item.href;
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 relative group ${
                            isActive
                              ? "bg-[#5A2396] text-white shadow-md"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                          title={sidebarCollapsed ? item.name : undefined}
                        >
                          <Icon size={18} />
                          <AnimatePresence mode="wait">
                            {!sidebarCollapsed && (
                              <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.15 }}
                              >
                                {item.name}
                              </motion.span>
                            )}
                          </AnimatePresence>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute right-2 w-1.5 h-1.5 rounded-full bg-[#D8A629]"
                            />
                          )}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Footer Logout */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors justify-center lg:justify-start"
            title={sidebarCollapsed ? "Logout" : undefined}
          >
            <LogOut size={18} />
            <AnimatePresence mode="wait">
              {!sidebarCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 lg:ml-0 ml-16">
              {menuCategories.flatMap(c => c.items).find((item) => item.href === pathname)?.name || "Admin Panel"}
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">Manage your content and settings</p>
          </div>
          <div className="flex items-center gap-4">
            <CommandPalette />
            <ThemeToggle />
            <Notifications />
            <Link
              href="/"
              target="_blank"
              className="text-sm font-semibold px-4 py-2.5 rounded-xl text-white hover:opacity-90 transition-opacity flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
              }}
            >
              <span>View Live Website</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
