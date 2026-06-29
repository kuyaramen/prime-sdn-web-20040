"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Globe, Mail, Phone, MapPin, Building, Shield } from "lucide-react";

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
}

export function SettingsClient() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "PRIME SDN",
    siteDescription: "Prime Surigao 2040 - Innovation for the Future",
    contactEmail: "info@primesdn.com",
    contactPhone: "+63 123 456 7890",
    address: "Surigao City, Surigao del Norte, Philippines",
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
    },
  });

  const [activeTab, setActiveTab] = useState<"general" | "contact" | "social">("general");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage({ type: "success", message: "Settings saved successfully!" });
      setTimeout(() => setSaveMessage(null), 3000);
    }, 1000);
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("general")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "general"
              ? "text-maroon-900 border-b-2 border-maroon-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center gap-2">
            <Globe size={18} />
            General
          </div>
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "contact"
              ? "text-maroon-900 border-b-2 border-maroon-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center gap-2">
            <Mail size={18} />
            Contact
          </div>
        </button>
        <button
          onClick={() => setActiveTab("social")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "social"
              ? "text-maroon-900 border-b-2 border-maroon-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center gap-2">
            <Building size={18} />
            Social Media
          </div>
        </button>
      </div>

      {/* Settings Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        {activeTab === "general" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
              <input
                type="tel"
                value={settings.contactPhone}
                onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {activeTab === "social" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
              <input
                type="url"
                value={settings.socialLinks.facebook}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    socialLinks: { ...settings.socialLinks, facebook: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                placeholder="https://facebook.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
              <input
                type="url"
                value={settings.socialLinks.twitter}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    socialLinks: { ...settings.socialLinks, twitter: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                placeholder="https://twitter.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
              <input
                type="url"
                value={settings.socialLinks.linkedin}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    socialLinks: { ...settings.socialLinks, linkedin: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                placeholder="https://linkedin.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL</label>
              <input
                type="url"
                value={settings.socialLinks.youtube}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    socialLinks: { ...settings.socialLinks, youtube: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-900 focus:border-transparent"
                placeholder="https://youtube.com/..."
              />
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
          {saveMessage && (
            <div
              className={`text-sm ${
                saveMessage.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {saveMessage.message}
            </div>
          )}
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2 bg-maroon-900 text-white rounded-lg hover:bg-maroon-800 transition-colors disabled:opacity-50 ml-auto"
          >
            <Save size={18} />
            {isSaving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </motion.div>

      {/* Info Banner */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <Shield size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">Settings Access</p>
          <p>Only users with <strong>super_admin</strong> role can modify these settings. Changes here affect the entire site.</p>
        </div>
      </div>
    </div>
  );
}
