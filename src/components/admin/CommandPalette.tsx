"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, FileText, Newspaper, Rocket, Calendar, Layers, Users, Inbox, Video, Activity, Settings, LayoutDashboard, Shield, Database, BarChart3, Image, Globe, FolderOpen, History, Bell } from "lucide-react";

interface CommandItem {
  id: string;
  name: string;
  href: string;
  icon: any;
  category: string;
  description?: string;
}

const commandItems: CommandItem[] = [
  // Main
  { id: "dashboard", name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard, category: "Main", description: "View executive command center" },
  
  // Content
  { id: "homepage", name: "Homepage", href: "/admin/content/homepage", icon: Globe, category: "Content", description: "Edit homepage content" },
  { id: "vision", name: "Vision", href: "/admin/content/vision", icon: FileText, category: "Content", description: "Manage vision page" },
  { id: "mission", name: "Mission", href: "/admin/content/mission", icon: FileText, category: "Content", description: "Manage mission page" },
  { id: "core-values", name: "Core Values", href: "/admin/content/core-values", icon: FileText, category: "Content", description: "Manage core values page" },
  { id: "framework", name: "Framework", href: "/admin/content/framework", icon: Layers, category: "Content", description: "Manage framework pillars" },
  { id: "discover-surigao", name: "Discover Surigao", href: "/admin/content/discover-surigao", icon: Globe, category: "Content", description: "Manage Surigao province info" },
  { id: "about", name: "About", href: "/admin/content/about", icon: FileText, category: "Content", description: "Manage about page" },
  { id: "activities", name: "Activities", href: "/admin/activities", icon: Activity, category: "Content", description: "Manage activities and events" },
  { id: "news", name: "News", href: "/admin/news", icon: Newspaper, category: "Content", description: "Manage news articles" },
  
  // Media
  { id: "media", name: "Media Library", href: "/admin/media", icon: Image, category: "Media", description: "Manage images and media" },
  { id: "documents", name: "Documents", href: "/admin/documents", icon: FolderOpen, category: "Media", description: "Manage documents and files" },
  
  // Users & Security
  { id: "users", name: "Users", href: "/admin/users", icon: Users, category: "Users & Security", description: "Manage admin users" },
  { id: "roles", name: "Roles & Permissions", href: "/admin/roles", icon: Shield, category: "Users & Security", description: "Configure roles and permissions" },
  
  // Communication
  { id: "contact", name: "Contact Messages", href: "/admin/communication/contact", icon: Inbox, category: "Communication", description: "Manage contact inquiries" },
  
  // Analytics
  { id: "analytics", name: "Analytics", href: "/admin/analytics", icon: BarChart3, category: "Analytics", description: "View website analytics" },
  
  // Settings
  { id: "website-settings", name: "Website Settings", href: "/admin/settings/website", icon: Settings, category: "Settings", description: "Configure website settings" },
  { id: "backup", name: "Backup & Restore", href: "/admin/settings/backup", icon: Database, category: "Settings", description: "Manage database backups" },
  { id: "audit-logs", name: "Audit Logs", href: "/admin/settings/audit", icon: History, category: "Settings", description: "View system audit logs" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = commandItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
      if (e.key === "Enter" && filteredItems.length > 0) {
        e.preventDefault();
        window.location.href = filteredItems[selectedIndex].href;
      }
    }
  }, [isOpen, filteredItems, selectedIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const flatItems = Object.values(groupedItems).flat();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
      >
        <Search size={16} />
        <span>Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-gray-300 text-xs font-mono">
          <span>⌘</span>
          <span>K</span>
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                  <Search size={20} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for pages, settings, or actions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
                    autoFocus
                  />
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-xs font-mono text-gray-500">
                    <span>ESC</span>
                  </kbd>
                </div>

                {/* Results */}
                <div className="max-h-[400px] overflow-y-auto p-2">
                  {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category} className="mb-2">
                      <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {category}
                      </div>
                      {items.map((item, index) => {
                        const globalIndex = flatItems.indexOf(item);
                        const Icon = item.icon;
                        const isSelected = globalIndex === selectedIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={() => (window.location.href = item.href)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                              isSelected ? "bg-maroon-50 text-maroon-900" : "hover:bg-gray-50 text-gray-700"
                            }`}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                          >
                            <div className={`p-2 rounded-lg ${isSelected ? "bg-maroon-100 text-maroon-700" : "bg-gray-100 text-gray-500"}`}>
                              <Icon size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 truncate">{item.description}</div>
                              )}
                            </div>
                            <ArrowRight size={14} className="text-gray-400" />
                          </button>
                        );
                      })}
                    </div>
                  ))}

                  {filteredItems.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <Search size={40} className="mx-auto mb-3 text-gray-300" />
                      <p className="text-sm">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 font-mono">↑↓</kbd>
                      <span>to navigate</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 font-mono">↵</kbd>
                      <span>to select</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-300 font-mono">ESC</kbd>
                    <span>to close</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
