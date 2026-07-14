"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      <section className="bg-maroon-900 py-20 px-4 text-white text-center">
        <SectionLabel text="Contact" className="mb-4 block opacity-70" />
        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-white/75 max-w-xl mx-auto">
          Have ideas, questions, or want to partner with Prime SDN? We&apos;d love to hear from you.
        </p>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">Send us a message</h2>

              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 mb-6">
                  <CheckCircle size={20} className="text-green-600 shrink-0" />
                  <p className="text-green-700 text-sm">Thank you! Your message has been sent. We&apos;ll get back to you shortly.</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 mb-6">
                  <AlertCircle size={20} className="text-red-600 shrink-0" />
                  <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 text-sm"
                      placeholder="Juan dela Cruz"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 text-sm"
                      placeholder="juan@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 text-sm"
                    placeholder="Partnership inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 text-sm resize-none"
                    placeholder="Tell us how we can work together..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" variant="primary" disabled={status === "loading"} className="w-full justify-center">
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-900/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-maroon-900" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-900/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-maroon-900" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Phone</p>
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-600 text-sm hover:text-teal-600">
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-900/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-maroon-900" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Email</p>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 text-sm hover:text-teal-600">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* OpenStreetMap embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm h-56">
                <iframe
                  title="Surigao City Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=125.4500,9.7400,125.5300,9.8100&layer=mapnik&marker=9.7765,125.4953"
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
