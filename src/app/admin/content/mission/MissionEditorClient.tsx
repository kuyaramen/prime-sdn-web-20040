"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface Objective {
  id: string;
  title: string;
  description: string;
}

export default function MissionEditorClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const [missionContent, setMissionContent] = useState({
    mainHeading: "MISSION",
    mainStatement: "NURTURING AN INNOVATION ECOSYSTEM FOR SUSTAINABLE GROWTH AND PROSPERITY.",
    description: "PRIME SDN is dedicated to creating a vibrant innovation ecosystem in Surigao del Norte by fostering collaboration between government, industry, academia, and communities. We aim to empower entrepreneurs, support research and development, and build sustainable infrastructure that drives economic growth and social progress.",
    buttonText: "Explore Mission",
    buttonLink: "/mission",
  });

  const [objectives, setObjectives] = useState<Objective[]>([
    {
      id: "1",
      title: "Foster Innovation",
      description: "Create an environment that encourages creativity, experimentation, and the development of innovative solutions to local challenges.",
    },
    {
      id: "2",
      title: "Support Entrepreneurs",
      description: "Provide comprehensive support to startups and SMEs through mentorship, funding access, and business development resources.",
    },
    {
      id: "3",
      title: "Build Partnerships",
      description: "Establish strong collaborations between government, private sector, educational institutions, and international partners.",
    },
    {
      id: "4",
      title: "Develop Talent",
      description: "Invest in education and skills development to build a workforce capable of driving innovation and economic growth.",
    },
    {
      id: "5",
      title: "Promote Sustainability",
      description: "Ensure that all initiatives contribute to sustainable development and environmental stewardship.",
    },
  ]);

  const [keyFocusAreas, setKeyFocusAreas] = useState({
    title: "Key Focus Areas",
    areas: [
      "Technology & Digital Transformation",
      "Agriculture & Agri-Technology",
      "Tourism & Cultural Heritage",
      "Renewable Energy & Sustainability",
      "Healthcare & Biotechnology",
      "Education & Skills Development",
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

  const addObjective = () => {
    const newObjective: Objective = {
      id: Date.now().toString(),
      title: "New Objective",
      description: "Add description...",
    };
    setObjectives([...objectives, newObjective]);
  };

  const removeObjective = (id: string) => {
    setObjectives(objectives.filter(o => o.id !== id));
  };

  const updateObjective = (id: string, field: keyof Objective, value: string) => {
    setObjectives(objectives.map(o => 
      o.id === id ? { ...o, [field]: value } : o
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
            <h1 className="text-2xl font-bold text-gray-900">Mission Page Editor</h1>
            <p className="text-gray-500 mt-1">Edit the Mission page content</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/mission" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
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
        {/* Main Mission Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Main Mission Content</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Heading</label>
              <input
                type="text"
                value={missionContent.mainHeading}
                onChange={(e) => setMissionContent({ ...missionContent, mainHeading: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="MISSION"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Main Statement</label>
              <RichTextEditor
                value={missionContent.mainStatement}
                onChange={(value) => setMissionContent({ ...missionContent, mainStatement: value })}
                minHeight="150px"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
              <RichTextEditor
                value={missionContent.description}
                onChange={(value) => setMissionContent({ ...missionContent, description: value })}
                minHeight="200px"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Button Text</label>
                <input
                  type="text"
                  value={missionContent.buttonText}
                  onChange={(e) => setMissionContent({ ...missionContent, buttonText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="Explore Mission"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Button Link</label>
                <input
                  type="text"
                  value={missionContent.buttonLink}
                  onChange={(e) => setMissionContent({ ...missionContent, buttonLink: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="/mission"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Mission Objectives</h2>
            <button
              onClick={addObjective}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
            >
              <Plus size={16} />
              <span>Add Objective</span>
            </button>
          </div>

          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl p-4 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                      <input
                        type="text"
                        value={objective.title}
                        onChange={(e) => updateObjective(objective.id, "title", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        placeholder="Foster Innovation"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                      <textarea
                        value={objective.description}
                        onChange={(e) => updateObjective(objective.id, "description", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                        rows={3}
                        placeholder="Add description..."
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removeObjective(objective.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">Key Focus Areas</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Section Title</label>
              <input
                type="text"
                value={keyFocusAreas.title}
                onChange={(e) => setKeyFocusAreas({ ...keyFocusAreas, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                placeholder="Key Focus Areas"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Focus Areas</label>
              <div className="space-y-2">
                {keyFocusAreas.areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <input
                      type="text"
                      value={area}
                      onChange={(e) => {
                        const newAreas = [...keyFocusAreas.areas];
                        newAreas[index] = e.target.value;
                        setKeyFocusAreas({ ...keyFocusAreas, areas: newAreas });
                      }}
                      className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setKeyFocusAreas({ ...keyFocusAreas, areas: [...keyFocusAreas.areas, ""] })}
                className="mt-3 text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
              >
                <Plus size={14} />
                <span>Add Focus Area</span>
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
                placeholder="Mission - PRIME SDN"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
              <textarea
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                rows={3}
                placeholder="Our mission to nurture innovation in Surigao del Norte..."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
