"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, ArrowLeft, Shield, Check, X } from "lucide-react";
import Link from "next/link";

interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  color: string;
  permissions: string[];
}

export default function RolesClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const [roles, setRoles] = useState<Role[]>([
    {
      id: "super_admin",
      name: "Super Admin",
      description: "Full access to all features including user management and system settings",
      color: "#8B5CF6",
      permissions: [
        "dashboard.view",
        "content.view",
        "content.edit",
        "content.delete",
        "content.publish",
        "media.view",
        "media.upload",
        "media.delete",
        "users.view",
        "users.create",
        "users.edit",
        "users.delete",
        "roles.view",
        "roles.edit",
        "settings.view",
        "settings.edit",
        "analytics.view",
        "audit.view",
      ],
    },
    {
      id: "admin",
      name: "Administrator",
      description: "Full access to content management and user management",
      color: "#500a31",
      permissions: [
        "dashboard.view",
        "content.view",
        "content.edit",
        "content.delete",
        "content.publish",
        "media.view",
        "media.upload",
        "media.delete",
        "users.view",
        "users.create",
        "users.edit",
        "users.delete",
        "analytics.view",
      ],
    },
    {
      id: "content_manager",
      name: "Content Manager",
      description: "Full access to content management and media",
      color: "#3B82F6",
      permissions: [
        "dashboard.view",
        "content.view",
        "content.edit",
        "content.delete",
        "content.publish",
        "media.view",
        "media.upload",
        "media.delete",
        "analytics.view",
      ],
    },
    {
      id: "editor",
      name: "Editor",
      description: "Can create and edit content but cannot delete or publish",
      color: "#10B981",
      permissions: [
        "dashboard.view",
        "content.view",
        "content.edit",
        "media.view",
        "media.upload",
      ],
    },
    {
      id: "author",
      name: "Author",
      description: "Can create and edit own content only",
      color: "#F59E0B",
      permissions: [
        "dashboard.view",
        "content.view",
        "content.edit",
      ],
    },
    {
      id: "moderator",
      name: "Moderator",
      description: "Can moderate content and manage comments",
      color: "#EF4444",
      permissions: [
        "dashboard.view",
        "content.view",
        "content.moderate",
        "users.view",
      ],
    },
    {
      id: "viewer",
      name: "Viewer",
      description: "Read-only access to all content",
      color: "#6B7280",
      permissions: [
        "dashboard.view",
        "content.view",
      ],
    },
  ]);

  const [permissions, setPermissions] = useState<Permission[]>([
    // Dashboard
    { id: "dashboard.view", name: "View Dashboard", description: "Access the admin dashboard", category: "Dashboard" },
    // Content
    { id: "content.view", name: "View Content", description: "View all content pages", category: "Content" },
    { id: "content.edit", name: "Edit Content", description: "Create and edit content", category: "Content" },
    { id: "content.delete", name: "Delete Content", description: "Delete content pages", category: "Content" },
    { id: "content.publish", name: "Publish Content", description: "Publish and unpublish content", category: "Content" },
    { id: "content.moderate", name: "Moderate Content", description: "Moderate user-generated content", category: "Content" },
    // Media
    { id: "media.view", name: "View Media", description: "View media library", category: "Media" },
    { id: "media.upload", name: "Upload Media", description: "Upload new media files", category: "Media" },
    { id: "media.delete", name: "Delete Media", description: "Delete media files", category: "Media" },
    // Users
    { id: "users.view", name: "View Users", description: "View user accounts", category: "Users" },
    { id: "users.create", name: "Create Users", description: "Create new user accounts", category: "Users" },
    { id: "users.edit", name: "Edit Users", description: "Edit user accounts", category: "Users" },
    { id: "users.delete", name: "Delete Users", description: "Delete user accounts", category: "Users" },
    // Roles
    { id: "roles.view", name: "View Roles", description: "View role configurations", category: "Roles" },
    { id: "roles.edit", name: "Edit Roles", description: "Modify role permissions", category: "Roles" },
    // Settings
    { id: "settings.view", name: "View Settings", description: "View system settings", category: "Settings" },
    { id: "settings.edit", name: "Edit Settings", description: "Modify system settings", category: "Settings" },
    // Analytics
    { id: "analytics.view", name: "View Analytics", description: "View analytics reports", category: "Analytics" },
    // Audit
    { id: "audit.view", name: "View Audit Logs", description: "View system audit logs", category: "Audit" },
  ]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus("success");
    
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const togglePermission = (roleId: string, permissionId: string) => {
    setRoles(roles.map(role => {
      if (role.id === roleId) {
        const hasPermission = role.permissions.includes(permissionId);
        return {
          ...role,
          permissions: hasPermission
            ? role.permissions.filter(p => p !== permissionId)
            : [...role.permissions, permissionId],
        };
      }
      return role;
    }));
  };

  const permissionCategories = Array.from(new Set(permissions.map(p => p.category)));

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
            <h1 className="text-2xl font-bold text-gray-900">Roles & Permissions</h1>
            <p className="text-gray-500 mt-1">Configure user roles and their permissions</p>
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? (
            <>
              <RefreshCw size={18} className="animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Save size={18} />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

      {/* Save Status */}
      {saveStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2"
        >
          <span className="text-sm font-semibold">Changes saved successfully!</span>
        </motion.div>
      )}

      {/* Permissions Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-200 p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-maroon-100 text-maroon-900">
            <Shield size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Permission Matrix</h2>
            <p className="text-sm text-gray-500">Configure which permissions each role has access to</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left font-bold text-gray-900">Permission</th>
                {roles.map((role) => (
                  <th key={role.id} className="px-4 py-3 text-center font-bold text-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: role.color }}
                      />
                      <span>{role.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {permissionCategories.map((category) => (
                <tr key={category} className="border-b border-gray-100">
                  <td colSpan={roles.length + 1} className="px-4 py-2 bg-gray-50 font-bold text-gray-700 uppercase text-xs tracking-wider">
                    {category}
                  </td>
                </tr>
              ))}
              {permissions.map((permission) => (
                <tr key={permission.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-semibold text-gray-900">{permission.name}</p>
                      <p className="text-xs text-gray-500">{permission.description}</p>
                    </div>
                  </td>
                  {roles.map((role) => {
                    const hasPermission = role.permissions.includes(permission.id);
                    return (
                      <td key={role.id} className="px-4 py-3 text-center">
                        <button
                          onClick={() => togglePermission(role.id, permission.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            hasPermission
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                          }`}
                        >
                          {hasPermission ? <Check size={16} /> : <X size={16} />}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Role Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-bold text-gray-900 mb-6">Role Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border border-gray-200 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: role.color }}
                />
                <h3 className="font-bold text-gray-900">{role.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{role.description}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  {role.permissions.length} permissions
                </p>
                <div className="flex flex-wrap gap-1">
                  {role.permissions.slice(0, 3).map((perm) => (
                    <span
                      key={perm}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {perm}
                    </span>
                  ))}
                  {role.permissions.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{role.permissions.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
