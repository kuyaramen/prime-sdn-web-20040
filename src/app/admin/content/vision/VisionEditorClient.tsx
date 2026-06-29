"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function VisionEditorClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const [visionContent, setVisionContent] = useState({
    mainHeading: "VISION",
    mainStatement: "SURIGAO DEL NORTE: A THRIVING INNOVATION ECOSYSTEM BY 2040.",
    description: "Through PRIME SDN, the province seeks to nurture an ecosystem that empowers entrepreneurs, strengthens research and talent development, embraces digital transformation, and fosters resilient communities capable of creating lasting economic and social impact.",
    buttonText: "Learn More",
    buttonLink: "/vision",
  });

  const [pillars, setPillars] = useState<Pillar[]>([
    {
      id: "1",
      title: "Innovation & Technology",
      description: "Fostering a culture of innovation through cutting-edge technology, research, and development.",
      icon: "🚀",
    },
    {
      id: "2",
      title: "Entrepreneurship",
      description: "Empowering local entrepreneurs with resources, mentorship, and access to capital.",
      icon: "💼",
    },
    {
      id: "3",
      title: "Education & Research",
      description: "Building strong partnerships with educational institutions to drive knowledge creation.",
      icon: "🎓",
    },
    {
      id: "4",
      title: "Sustainable Development",
      description: "Promoting environmentally conscious growth and sustainable practices across all sectors.",
      icon: "🌱",
    },
    {
      id: "5",
      title: "Collaboration",
      description: "Creating synergies between government, industry, academia, and communities.",
      icon: "🤝",
    },
    {
      id: "6",
      title: "Inclusivity",
      description: "Ensuring that innovation benefits all segments of society, leaving no one behind.",
      icon: "🌍",
    },
  ]);

  const [strategicAlignment, setStrategicAlignment] = useState({
    title: "Strategic Alignment",
    alignments: [
      "Philippine Development Plan 2023-2028",
      "Caraga Regional Development Plan",
      "Surigao del Norte Comprehensive Land Use Plan",
      "National Innovation Agenda",
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

  const addPillar = () => {
    const newPillar: Pillar = {
      id: Date.now().toString(),
      title: "New Pillar",
      description: "Add description...",
      icon: "⭐",
    };
    setPillars([...pillars, newPillar]);
  };

  const removePillar = (id: string) => {
    setPillars(pillars.filter(p => p.id !== id));
  };

  const updatePillar = (id: string, field: keyof Pillar, value: string) => {
    setPillars(pillars.map(p => 
      p.id === id ? { ...p, [field]: value } : p
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
            <h1 className="text-2xl font-bold text-gray-900">Vision Page Editor</h1>
            <p className="text-gray-500 mt-1">Edit the Vision page content</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/vision" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
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
        {/* Main Vision Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Main Vision Content</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Heading</label>
              <input
                type="text"
                value={visionContent.mainHeading}
                onChange={(e) => setVisionContent({ ...visionContent, mainHeading: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="VISION"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Main Statement</label>
              <RichTextEditor
                value={visionContent.mainStatement}
                onChange={(value) => setVisionContent({ ...visionContent, mainStatement: value })}
                minHeight="150px"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
              <RichTextEditor
                value={visionContent.description}
                onChange={(value) => setVisionContent({ ...visionContent, description: value })}
                minHeight="200px"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Button Text</label>
                <input
                  type="text"
                  value={visionContent.buttonText}
                  onChange={(e) => setVisionContent({ ...visionContent, buttonText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="Learn More"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Button Link</label>
                <input
                  type="text"
                  value={visionContent.buttonLink}
                  onChange={(e) => setVisionContent({ ...visionContent, buttonLink: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="/vision"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Vision Pillars</h2>
            <button
              onClick={addPillar}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
            >
              <Plus size={16} />
              <span>Add Pillar</span>
            </button>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
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
                          value={pillar.icon}
                          onChange={(e) => updatePillar(pillar.id, "icon", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="🚀"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => updatePillar(pillar.id, "title", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="Innovation & Technology"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                      <textarea
                        value={pillar.description}
                        onChange={(e) => updatePillar(pillar.id, "description", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                        rows={3}
                        placeholder="Add description..."
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removePillar(pillar.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Strategic Alignment</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Section Title</label>
              <input
                type="text"
                value={strategicAlignment.title}
                onChange={(e) => setStrategicAlignment({ ...strategicAlignment, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="Strategic Alignment"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Alignment Items</label>
              <div className="space-y-2">
                {strategicAlignment.alignments.map((alignment, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <input
                      type="text"
                      value={alignment}
                      onChange={(e) => {
                        const newAlignments = [...strategicAlignment.alignments];
                        newAlignments[index] = e.target.value;
                        setStrategicAlignment({ ...strategicAlignment, alignments: newAlignments });
                      }}
                      className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStrategicAlignment({ ...strategicAlignment, alignments: [...strategicAlignment.alignments, ""] })}
                className="mt-3 text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
              >
                <Plus size={14} />
                <span>Add Alignment Item</span>
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
                placeholder="Vision - PRIME SDN"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
              <textarea
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                rows={3}
                placeholder="Our vision for Surigao del Norte by 2040..."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
