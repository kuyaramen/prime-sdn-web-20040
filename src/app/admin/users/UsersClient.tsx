"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createAdminUser, deleteAdminUser } from "@/app/actions/admin";
import { Plus, Trash2, X, Users, AlertCircle, ShieldAlert, Key } from "lucide-react";

interface AdminUser {
  id: string;
  email: string;
  role: string;
  name: string | null;
}

interface UsersClientProps {
  initialUsers: AdminUser[];
  currentUserId: string;
}

export function UsersClient({ initialUsers, currentUserId }: UsersClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("editor");
  const [error, setError] = useState<string | null>(null);

  const openAddModal = () => {
    setEmail("");
    setPassword("");
    setName("");
    setRole("editor");
    setError(null);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    startTransition(async () => {
      try {
        await createAdminUser(email, password, role, name || null);
        setModalOpen(false);
        router.refresh();
      } catch (err: any) {
        setError(err.message || "Failed to create user account.");
      }
    });
  };

  const handleDelete = async (id: string, email: string) => {
    if (id === currentUserId) {
      alert("You cannot delete your own admin account.");
      return;
    }

    if (!confirm(`Are you sure you want to delete the account for "${email}"?`)) return;

    startTransition(async () => {
      try {
        await deleteAdminUser(id);
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to delete user account.");
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Informative Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-900 leading-relaxed flex gap-4 shadow-sm">
        <div className="p-3 rounded-xl bg-amber-200/50 shrink-0">
          <ShieldAlert size={24} className="text-amber-700" />
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2 text-amber-900">Access Control &amp; Roles</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div><strong>super_admin:</strong> Full access including user management and settings</div>
            <div><strong>admin:</strong> Full access including user management</div>
            <div><strong>editor:</strong> Content CRUD for Activities, News, Startups, Policies</div>
            <div><strong>startup_manager:</strong> Startup-specific management</div>
            <div><strong>viewer:</strong> Read-only access to content</div>
          </div>
        </div>
      </div>

      {/* Top Controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Accounts</h2>
          <p className="text-sm text-gray-500 mt-1">Manage admin users and their permissions</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
          }}
        >
          <Plus size={20} />
          <span>Add User Account</span>
        </button>
      </div>

      {/* Grid / Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider font-bold text-xs">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {initialUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-semibold text-gray-900">{user.name || "-"}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-gray-100 text-gray-500 shrink-0">
                        <Key size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{user.email}</div>
                        {user.id === currentUserId && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-[#5A2396]/10 text-[#5A2396] text-[10px] rounded-lg font-bold uppercase tracking-wider">
                            You
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border-2 ${
                        user.role === "super_admin"
                          ? "bg-purple-100 text-purple-900 border-purple-300"
                          : user.role === "admin"
                          ? "bg-[#5A2396]/10 text-[#5A2396] border-[#5A2396]/30"
                          : user.role === "startup_manager"
                          ? "bg-[#1E4FBF]/10 text-[#1E4FBF] border-[#1E4FBF]/30"
                          : user.role === "viewer"
                          ? "bg-gray-100 text-gray-700 border-gray-300"
                          : "bg-[#D8A629]/10 text-[#D8A629] border-[#D8A629]/30"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => handleDelete(user.id, user.email)}
                      disabled={user.id === currentUserId || isPending}
                      className="p-2 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      title={user.id === currentUserId ? "Cannot delete yourself" : "Delete Account"}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden my-8">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 text-white"
              style={{
                background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-xl text-white">Add User Account</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-white/80 hover:text-white focus:outline-none cursor-pointer p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="mx-6 mt-5 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-3">
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <span className="font-medium">{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 bg-gray-50 focus:bg-white transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 bg-gray-50 focus:bg-white transition-all"
                  placeholder="e.g. editor@primesdn.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Initial Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 bg-gray-50 focus:bg-white transition-all"
                  placeholder="At least 6 characters"
                  required
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  User Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 transition-all"
                >
                  <option value="viewer">Viewer (Read-only)</option>
                  <option value="editor">Editor (Content CRUD)</option>
                  <option value="startup_manager">Startup Manager (Startups only)</option>
                  <option value="admin">Admin (Full access + Users)</option>
                  <option value="super_admin">Super Admin (Full access + Settings)</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-5 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-maroon-900 to-maroon-700 hover:from-maroon-800 hover:to-maroon-600 text-white rounded-xl text-sm font-semibold transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isPending && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  <span>Create Account</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
