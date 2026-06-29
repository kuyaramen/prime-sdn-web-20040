"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { loginSchema, type LoginFormData } from "@/lib/validations";
import { ShieldCheck, Mail, Lock, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "/admin/dashboard",
      });

      console.log("Sign in response:", res);

      if (res?.error) {
        console.error("Sign in error:", res.error);
        setError("Invalid email or password");
      } else if (res?.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError("Authentication failed");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-maroon-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="w-full max-w-md z-10">
        {/* Brand */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block font-display text-5xl sm:text-6xl font-bold leading-none mb-4 tracking-tight">
            <span className="text-white">PRIME</span>
            <span className="text-teal-400"> SDN</span>
          </Link>
          <p className="text-gray-400 text-sm font-medium tracking-wide">Admin Portal</p>
        </div>

        {/* Login Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/10">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-maroon-900 to-maroon-700 text-white shadow-lg">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-sm text-gray-500">Sign in to access your dashboard</p>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <span className="font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@primesdn.com"
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 bg-gray-50 ${
                    errors.email ? "border-red-300 bg-red-50" : "border-gray-200 focus:bg-white"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-xs text-red-600 font-medium">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 bg-gray-50 ${
                    errors.password ? "border-red-300 bg-red-50" : "border-gray-200 focus:bg-white"
                  }`}
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-xs text-red-600 font-medium">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-maroon-900 to-maroon-700 hover:from-maroon-800 hover:to-maroon-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-maroon-700/50 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors font-medium flex items-center justify-center gap-2">
            <ArrowRight size={16} className="rotate-180" />
            <span>Back to Public Portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
