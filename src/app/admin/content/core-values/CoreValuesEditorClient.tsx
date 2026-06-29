"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function CoreValuesEditorClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const [coreValuesContent, setCoreValuesContent] = useState({
    mainHeading: "CORE VALUES",
    mainStatement: "SURIGAONON VALUES THAT DRIVE OUR INNOVATION ECOSYSTEM",
    description: "These core values guide our actions, decisions, and partnerships as we work together to build a thriving innovation ecosystem in Surigao del Norte.",
    buttonText: "Explore Core Values",
    buttonLink: "/core-values",
  });

  const [coreValues, setCoreValues] = useState<CoreValue[]>([
    {
      id: "1",
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our endeavors.",
      icon: "💎",
    },
    {
      id: "2",
      title: "Innovation",
      description: "We embrace creativity, experimentation, and forward-thinking to drive progress and solve challenges.",
      icon: "💡",
    },
    {
      id: "3",
      title: "Collaboration",
      description: "We believe in the power of working together across sectors, disciplines, and communities.",
      icon: "🤝",
    },
    {
      id: "4",
      title: "Excellence",
      description: "We strive for quality and excellence in everything we do, setting high standards for performance.",
      icon: "⭐",
    },
    {
      id: "5",
      title: "Sustainability",
      description: "We are committed to practices that ensure long-term environmental, social, and economic well-being.",
      icon: "🌱",
    },
    {
      id: "6",
      title: "Inclusivity",
      description: "We ensure that our initiatives benefit all members of society, leaving no one behind.",
      icon: "🌍",
    },
  ]);

  const [principles, setPrinciples] = useState({
    title: "Guiding Principles",
    principles: [
      "Community-Centered Approach",
      "Evidence-Based Decision Making",
      "Stakeholder Engagement",
      "Continuous Learning",
      "Accountability and Transparency",
    ],
  });

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus("success");
    
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const addCoreValue = () => {
    const newValue: CoreValue = {
      id: Date.now().toString(),
      title: "New Core Value",
      description: "Add description...",
      icon: "✨",
    };
    setCoreValues([...coreValues, newValue]);
  };

  const removeCoreValue = (id: string) => {
    setCoreValues(coreValues.filter(v => v.id !== id));
  };

  const updateCoreValue = (id: string, field: keyof CoreValue, value: string) => {
    setCoreValues(coreValues.map(v => 
      v.id === id ? { ...v, [field]: value } : v
    ));
  };

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
            <h1 className="text-2xl font-bold text-gray-900">Core Values Page Editor</h1>
            <p className="text-gray-500 mt-1">Edit the Core Values page content</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/core-values" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
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

      <div className="space-y-6">
        {/* Main Core Values Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Main Content</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Heading</label>
              <input
                type="text"
                value={coreValuesContent.mainHeading}
                onChange={(e) => setCoreValuesContent({ ...coreValuesContent, mainHeading: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="CORE VALUES"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Main Statement</label>
              <RichTextEditor
                value={coreValuesContent.mainStatement}
                onChange={(value) => setCoreValuesContent({ ...coreValuesContent, mainStatement: value })}
                minHeight="150px"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
              <RichTextEditor
                value={coreValuesContent.description}
                onChange={(value) => setCoreValuesContent({ ...coreValuesContent, description: value })}
                minHeight="200px"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Button Text</label>
                <input
                  type="text"
                  value={coreValuesContent.buttonText}
                  onChange={(e) => setCoreValuesContent({ ...coreValuesContent, buttonText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="Explore Core Values"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Button Link</label>
                <input
                  type="text"
                  value={coreValuesContent.buttonLink}
                  onChange={(e) => setCoreValuesContent({ ...coreValuesContent, buttonLink: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="/core-values"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Core Values</h2>
            <button
              onClick={addCoreValue}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
            >
              <Plus size={16} />
              <span>Add Core Value</span>
            </button>
          </div>

          <div className="space-y-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl p-4 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Icon (Emoji)</label>
                        <input
                          type="text"
                          value={value.icon}
                          onChange={(e) => updateCoreValue(value.id, "icon", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="💎"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                        <input
                          type="text"
                          value={value.title}
                          onChange={(e) => updateCoreValue(value.id, "title", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="Integrity"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                      <textarea
                        value={value.description}
                        onChange={(e) => updateCoreValue(value.id, "description", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                        rows={3}
                        placeholder="Add description..."
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removeCoreValue(value.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guiding Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Guiding Principles</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Section Title</label>
              <input
                type="text"
                value={principles.title}
                onChange={(e) => setPrinciples({ ...principles, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="Guiding Principles"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Principles</label>
              <div className="space-y-2">
                {principles.principles.map((principle, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <input
                      type="text"
                      value={principle}
                      onChange={(e) => {
                        const newPrinciples = [...principles.principles];
                        newPrinciples[index] = e.target.value;
                        setPrinciples({ ...principles, principles: newPrinciples });
                      }}
                      className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPrinciples({ ...principles, principles: [...principles.principles, ""] })}
                className="mt-3 text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
              >
                <Plus size={14} />
                <span>Add Principle</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* SEO Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">SEO Settings</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="Core Values - PRIME SDN"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
              <textarea
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                rows={3}
                placeholder="Our core values that drive the innovation ecosystem..."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
