"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, ArrowLeft, Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function WebsiteSettingsClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeSection, setActiveSection] = useState<string>("general");

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "PRIME SDN",
    siteTagline: "Provincial Innovation Movement for Entrepreneurship and Sustainable Development Network",
    siteDescription: "A public-private movement to promote innovation in Surigao del Norte",
    siteUrl: "https://primesdn.gov.ph",
    logo: "/images/logo.png",
    favicon: "/images/favicon.ico",
    defaultLanguage: "en",
    timezone: "Asia/Manila",
  });

  const [contactSettings, setContactSettings] = useState({
    email: "info@primesdn.gov.ph",
    phone: "+63 832 123 4567",
    address: "Provincial Capitol, Surigao City, Surigao del Norte, Philippines",
    facebook: "https://facebook.com/primesdn",
    twitter: "https://twitter.com/primesdn",
    instagram: "https://instagram.com/primesdn",
    linkedin: "https://linkedin.com/company/primesdn",
    youtube: "https://youtube.com/primesdn",
  });

  const [seoSettings, setSeoSettings] = useState({
    defaultMetaTitle: "PRIME SDN - Surigao del Norte Innovation Ecosystem",
    defaultMetaDescription: "A public-private movement to promote innovation, entrepreneurship, and sustainable development in Surigao del Norte.",
    googleAnalyticsId: "",
    googleTagManagerId: "",
    facebookPixelId: "",
    enableRobots: true,
    robotsTxt: "User-agent: *\nAllow: /",
  });

  const [maintenanceSettings, setMaintenanceSettings] = useState({
    maintenanceMode: false,
    maintenanceMessage: "We are currently performing scheduled maintenance. Please check back soon.",
    maintenanceStartDate: "",
    maintenanceEndDate: "",
  });

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus("success");
    
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const sectionList = [
    { id: "general", label: "General", icon: "⚙️" },
    { id: "contact", label: "Contact & Social", icon: "📞" },
    { id: "seo", label: "SEO & Analytics", icon: "🔍" },
    { id: "maintenance", label: "Maintenance", icon: "🔧" },
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
            <h1 className="text-2xl font-bold text-gray-900">Website Settings</h1>
            <p className="text-gray-500 mt-1">Configure your website settings</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sticky top-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Settings</h3>
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
          {activeSection === "general" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">General Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={generalSettings.siteName}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Site URL</label>
                    <input
                      type="url"
                      value={generalSettings.siteUrl}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, siteUrl: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Site Tagline</label>
                  <input
                    type="text"
                    value={generalSettings.siteTagline}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteTagline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Site Description</label>
                  <textarea
                    value={generalSettings.siteDescription}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Logo URL</label>
                    <input
                      type="text"
                      value={generalSettings.logo}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, logo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Favicon URL</label>
                    <input
                      type="text"
                      value={generalSettings.favicon}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, favicon: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Default Language</label>
                    <select
                      value={generalSettings.defaultLanguage}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, defaultLanguage: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    >
                      <option value="en">English</option>
                      <option value="fil">Filipino</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Timezone</label>
                    <select
                      value={generalSettings.timezone}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, timezone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    >
                      <option value="Asia/Manila">Asia/Manila (PST)</option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Contact & Social Media</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Mail size={16} />
                      Email
                    </label>
                    <input
                      type="email"
                      value={contactSettings.email}
                      onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Phone size={16} />
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={contactSettings.phone}
                      onChange={(e) => setContactSettings({ ...contactSettings, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin size={16} />
                    Address
                  </label>
                  <textarea
                    value={contactSettings.address}
                    onChange={(e) => setContactSettings({ ...contactSettings, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                    rows={2}
                  />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Social Media Links</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Facebook size={18} className="text-blue-600" />
                      <input
                        type="url"
                        value={contactSettings.facebook}
                        onChange={(e) => setContactSettings({ ...contactSettings, facebook: e.target.value })}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="Facebook URL"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <Twitter size={18} className="text-blue-400" />
                      <input
                        type="url"
                        value={contactSettings.twitter}
                        onChange={(e) => setContactSettings({ ...contactSettings, twitter: e.target.value })}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="Twitter URL"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <Instagram size={18} className="text-pink-600" />
                      <input
                        type="url"
                        value={contactSettings.instagram}
                        onChange={(e) => setContactSettings({ ...contactSettings, instagram: e.target.value })}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="Instagram URL"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin size={18} className="text-blue-700" />
                      <input
                        type="url"
                        value={contactSettings.linkedin}
                        onChange={(e) => setContactSettings({ ...contactSettings, linkedin: e.target.value })}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="LinkedIn URL"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <Youtube size={18} className="text-red-600" />
                      <input
                        type="url"
                        value={contactSettings.youtube}
                        onChange={(e) => setContactSettings({ ...contactSettings, youtube: e.target.value })}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="YouTube URL"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "seo" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">SEO & Analytics</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Default Meta Title</label>
                  <input
                    type="text"
                    value={seoSettings.defaultMetaTitle}
                    onChange={(e) => setSeoSettings({ ...seoSettings, defaultMetaTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Default Meta Description</label>
                  <textarea
                    value={seoSettings.defaultMetaDescription}
                    onChange={(e) => setSeoSettings({ ...seoSettings, defaultMetaDescription: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                    rows={3}
                  />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Analytics Integration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Google Analytics ID</label>
                      <input
                        type="text"
                        value={seoSettings.googleAnalyticsId}
                        onChange={(e) => setSeoSettings({ ...seoSettings, googleAnalyticsId: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="G-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Google Tag Manager ID</label>
                      <input
                        type="text"
                        value={seoSettings.googleTagManagerId}
                        onChange={(e) => setSeoSettings({ ...seoSettings, googleTagManagerId: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="GTM-XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook Pixel ID</label>
                      <input
                        type="text"
                        value={seoSettings.facebookPixelId}
                        onChange={(e) => setSeoSettings({ ...seoSettings, facebookPixelId: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="XXXXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2">Robots.txt</h3>
                      <p className="text-xs text-gray-500">Control search engine crawling</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={seoSettings.enableRobots}
                        onChange={(e) => setSeoSettings({ ...seoSettings, enableRobots: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-maroon-700/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-maroon-900" />
                    </label>
                  </div>
                  {seoSettings.enableRobots && (
                    <div className="mt-4">
                      <textarea
                        value={seoSettings.robotsTxt}
                        onChange={(e) => setSeoSettings({ ...seoSettings, robotsTxt: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 font-mono text-xs resize-none"
                        rows={4}
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "maintenance" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Maintenance Mode</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div>
                    <h3 className="font-bold text-gray-900">Enable Maintenance Mode</h3>
                    <p className="text-sm text-gray-600">Temporarily take the website offline for maintenance</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={maintenanceSettings.maintenanceMode}
                      onChange={(e) => setMaintenanceSettings({ ...maintenanceSettings, maintenanceMode: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-maroon-700/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600" />
                  </label>
                </div>

                {maintenanceSettings.maintenanceMode && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Maintenance Message</label>
                      <textarea
                        value={maintenanceSettings.maintenanceMessage}
                        onChange={(e) => setMaintenanceSettings({ ...maintenanceSettings, maintenanceMessage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Start Date</label>
                        <input
                          type="datetime-local"
                          value={maintenanceSettings.maintenanceStartDate}
                          onChange={(e) => setMaintenanceSettings({ ...maintenanceSettings, maintenanceStartDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">End Date</label>
                        <input
                          type="datetime-local"
                          value={maintenanceSettings.maintenanceEndDate}
                          onChange={(e) => setMaintenanceSettings({ ...maintenanceSettings, maintenanceEndDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
