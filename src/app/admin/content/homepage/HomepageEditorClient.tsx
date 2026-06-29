"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface SectionContent {
  id: string;
  title: string;
  content: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HomepageEditorClient() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const [sections, setSections] = useState<Record<string, SectionContent>>({
    hero: {
      id: "hero",
      title: "Hero Section",
      content: "SURIGAO PRIME 2040",
      image: "/images/hero_aerial_surigao_new.jpg",
    },
    vision: {
      id: "vision",
      title: "Vision Section",
      content: "SURIGAO DEL NORTE: A THRIVING INNOVATION ECOSYSTEM BY 2040.",
      buttonText: "Learn More",
      buttonLink: "/vision",
    },
    mission: {
      id: "mission",
      title: "Mission Section",
      content: "Through PRIME SDN, the province seeks to nurture an ecosystem that empowers entrepreneurs, strengthens research and talent development, embraces digital transformation, and fosters resilient communities.",
      buttonText: "Explore Mission",
      buttonLink: "/mission",
    },
    coreValues: {
      id: "coreValues",
      title: "Core Values Section",
      content: "SURIGAONON VALUES",
      buttonText: "Explore Core Values",
      buttonLink: "/core-values",
    },
    startups: {
      id: "startups",
      title: "Startups Section",
      content: "Comprehensive support for entrepreneurs through incubation programs, mentorship networks, funding access, and resources to build, scale, and succeed in Surigao del Norte.",
      buttonText: "Explore Startup Ecosystem",
      buttonLink: "/startups",
    },
    policies: {
      id: "policies",
      title: "Policies Section",
      content: "Backed by provincial ordinances, executive orders, and strategic frameworks, PRIME SDN advances accountable, transparent, and innovation-driven governance for a resilient Surigao del Norte.",
      buttonText: "Explore all policies",
      buttonLink: "/governance",
    },
    activities: {
      id: "activities",
      title: "Activities Section",
      content: "Explore events, innovation programs, startup engagements, and ecosystem milestones that cultivate collaboration, accelerate ideas, and showcase the progress of PRIME SDN across Surigao del Norte.",
      buttonText: "View all activities",
      buttonLink: "/activities",
    },
    news: {
      id: "news",
      title: "News Section",
      content: "Remain informed with updates, announcements, startup achievements, ecosystem partnerships, and innovation initiatives shaping the future of Surigao del Norte.",
      buttonText: "View all news",
      buttonLink: "/news",
    },
    cta: {
      id: "cta",
      title: "CTA Section",
      content: "Join researchers, entrepreneurs, and community leaders building Surigao's innovation ecosystem.",
    },
  });

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");
    
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus("success");
    
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const handleSectionChange = (sectionId: string, field: keyof SectionContent, value: string) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [field]: value,
      },
    }));
  };

  const sectionList = [
    { id: "hero", label: "Hero Section", icon: "🏠" },
    { id: "vision", label: "Vision", icon: "👁️" },
    { id: "mission", label: "Mission", icon: "🎯" },
    { id: "coreValues", label: "Core Values", icon: "💎" },
    { id: "startups", label: "Startups", icon: "🚀" },
    { id: "policies", label: "Policies", icon: "📜" },
    { id: "activities", label: "Activities", icon: "📅" },
    { id: "news", label: "News", icon: "📰" },
    { id: "cta", label: "CTA", icon: "📢" },
  ];

  const currentSection = sections[activeSection];

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
            <h1 className="text-2xl font-bold text-gray-900">Homepage Editor</h1>
            <p className="text-gray-500 mt-1">Edit all sections of the homepage</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
            <Eye size={18} />
            <span>Preview</span>
          </Link>
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sticky top-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Sections</h3>
            <div className="space-y-1">
              {sectionList.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === section.id
                      ? "bg-maroon-900 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{currentSection.title}</h2>
                <p className="text-sm text-gray-500 mt-1">Edit the content for this section</p>
              </div>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to reset this section to default?")) {
                    // Reset logic would go here
                  }
                }}
                className="text-sm font-semibold text-gray-500 hover:text-maroon-900 transition-colors"
              >
                Reset to Default
              </button>
            </div>

            <div className="space-y-6">
              {/* Content Editor */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Content</label>
                <RichTextEditor
                  value={currentSection.content}
                  onChange={(value) => handleSectionChange(activeSection, "content", value)}
                  minHeight="200px"
                />
              </div>

              {/* Image Upload (if applicable) */}
              {currentSection.image && (
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Background Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-maroon-300 transition-colors cursor-pointer">
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-3xl">🖼️</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-700">Click to upload image</p>
                      <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 10MB</p>
                    </div>
                  </div>
                  {currentSection.image && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm text-gray-600 truncate">{currentSection.image}</span>
                      <button className="text-sm font-semibold text-red-600 hover:underline">Remove</button>
                    </div>
                  )}
                </div>
              )}

              {/* Button Text (if applicable) */}
              {currentSection.buttonText && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Button Text</label>
                    <input
                      type="text"
                      value={currentSection.buttonText}
                      onChange={(e) => handleSectionChange(activeSection, "buttonText", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                      placeholder="e.g., Learn More"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Button Link</label>
                    <input
                      type="text"
                      value={currentSection.buttonLink}
                      onChange={(e) => handleSectionChange(activeSection, "buttonLink", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                      placeholder="e.g., /vision"
                    />
                  </div>
                </div>
              )}

              {/* SEO Settings */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">SEO Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                      placeholder="PRIME SDN - Surigao del Norte Innovation Ecosystem"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                      rows={3}
                      placeholder="A public-private movement to promote innovation in Surigao del Norte..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
