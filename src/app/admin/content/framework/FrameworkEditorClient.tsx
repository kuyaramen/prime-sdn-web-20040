"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface Pillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  accentColor: string;
  objectives: string[];
  programs: string[];
  projects: string[];
  statistics: { label: string; value: string }[];
  timeline: { date: string; milestone: string }[];
  gallery: string[];
  downloads: { title: string; url: string }[];
  partners: string[];
  videos: string[];
  successStories: string[];
  impactMetrics: { metric: string; value: string; change: string }[];
}

export default function FrameworkEditorClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [activePillar, setActivePillar] = useState<string>("innovation");

  const [frameworkContent, setFrameworkContent] = useState({
    mainHeading: "EXPLORE THE ECOSYSTEM",
    mainStatement: "SHAPING THE FUTURE OF SURIGAO DEL NORTE",
    description: "The PRIME SDN framework consists of seven interconnected pillars that work together to create a thriving innovation ecosystem.",
  });

  const [pillars, setPillars] = useState<Pillar[]>([
    {
      id: "innovation",
      title: "Innovation & Technology",
      slug: "innovation",
      description: "Fostering a culture of innovation through cutting-edge technology, research, and development.",
      iconName: "Rocket",
      accentColor: "#8B5CF6",
      objectives: [
        "Establish innovation hubs across municipalities",
        "Support R&D initiatives in key sectors",
        "Promote digital transformation",
      ],
      programs: [
        "Innovation Grant Program",
        "Tech Startup Incubator",
        "Digital Skills Training",
      ],
      projects: ["Smart City Initiative", "Tech Park Development"],
      statistics: [
        { label: "Startups Supported", value: "45" },
        { label: "R&D Projects", value: "23" },
        { label: "Tech Grants", value: "12" },
      ],
      timeline: [
        { date: "2024 Q1", milestone: "Innovation Hub Launch" },
        { date: "2024 Q3", milestone: "Tech Park Groundbreaking" },
      ],
      gallery: ["/images/innovation-hub.jpg"],
      downloads: [{ title: "Innovation Guide", url: "/docs/innovation-guide.pdf" }],
      partners: ["Tech Corp", "Innovation Labs"],
      videos: ["/videos/innovation-intro.mp4"],
      successStories: ["Startup Success: TechVenture Inc."],
      impactMetrics: [
        { metric: "Jobs Created", value: "320", change: "+15%" },
        { metric: "Investment Attracted", value: "$2.5M", change: "+22%" },
      ],
    },
    {
      id: "education",
      title: "Education & Research",
      slug: "education",
      description: "Building strong partnerships with educational institutions to drive knowledge creation.",
      iconName: "GraduationCap",
      accentColor: "#3B82F6",
      objectives: [
        "Strengthen university-industry partnerships",
        "Develop talent pipeline programs",
        "Support research initiatives",
      ],
      programs: [
        "Scholarship Program",
        "Research Grants",
        "Industry-Academia Collaboration",
      ],
      projects: ["University Partnership Initiative", "Research Center"],
      statistics: [
        { label: "Partner Universities", value: "5" },
        { label: "Scholarships Awarded", value: "150" },
        { label: "Research Projects", value: "35" },
      ],
      timeline: [
        { date: "2024 Q2", milestone: "Partnership Agreement Signed" },
        { date: "2024 Q4", milestone: "Research Center Launch" },
      ],
      gallery: ["/images/education-campus.jpg"],
      downloads: [{ title: "Education Program Guide", url: "/docs/education-guide.pdf" }],
      partners: ["Surigao State University", "Tech Institute"],
      videos: ["/videos/education-program.mp4"],
      successStories: ["Scholar Success: Maria Santos"],
      impactMetrics: [
        { metric: "Graduates Employed", value: "85%", change: "+10%" },
        { metric: "Research Funding", value: "$1.2M", change: "+18%" },
      ],
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      slug: "entrepreneurship",
      description: "Empowering local entrepreneurs with resources, mentorship, and access to capital.",
      iconName: "Briefcase",
      accentColor: "#10B981",
      objectives: [
        "Provide startup funding",
        "Offer mentorship programs",
        "Create networking opportunities",
      ],
      programs: [
        "Startup Fund",
        "Mentorship Network",
        "Business Development Support",
      ],
      projects: ["Startup Accelerator", "Business Incubator"],
      statistics: [
        { label: "Startups Funded", value: "28" },
        { label: "Mentors Active", value: "45" },
        { label: "Jobs Created", value: "320" },
      ],
      timeline: [
        { date: "2024 Q1", milestone: "Startup Fund Launch" },
        { date: "2024 Q2", milestone: "Mentorship Program Start" },
      ],
      gallery: ["/images/entrepreneurship-event.jpg"],
      downloads: [{ title: "Startup Application Form", url: "/docs/startup-form.pdf" }],
      partners: ["Local Business Chamber", "Investment Firms"],
      videos: ["/videos/entrepreneurship-success.mp4"],
      successStories: ["Startup Success: GreenTech Solutions"],
      impactMetrics: [
        { metric: "Revenue Generated", value: "$5.8M", change: "+35%" },
        { metric: "Businesses Launched", value: "45", change: "+28%" },
      ],
    },
    {
      id: "sustainability",
      title: "Sustainability",
      slug: "sustainability",
      description: "Promoting environmentally conscious growth and sustainable practices.",
      iconName: "Leaf",
      accentColor: "#22C55E",
      objectives: [
        "Promote green technologies",
        "Support eco-friendly businesses",
        "Implement sustainable practices",
      ],
      programs: [
        "Green Innovation Fund",
        "Sustainability Certification",
        "Clean Energy Initiative",
      ],
      projects: ["Solar Farm Initiative", "Waste Management Project"],
      statistics: [
        { label: "Green Projects", value: "18" },
        { label: "Carbon Reduced", value: "45%" },
        { label: "Certified Businesses", value: "32" },
      ],
      timeline: [
        { date: "2024 Q2", milestone: "Green Tech Fund Launch" },
        { date: "2024 Q4", milestone: "Solar Farm Completion" },
      ],
      gallery: ["/images/sustainability-project.jpg"],
      downloads: [{ title: "Sustainability Guidelines", url: "/docs/sustainability-guide.pdf" }],
      partners: ["Environmental Agency", "Green Energy Corp"],
      videos: ["/videos/sustainability-initiative.mp4"],
      successStories: ["Green Startup: EcoTech Solutions"],
      impactMetrics: [
        { metric: "Carbon Reduced", value: "500t", change: "+40%" },
        { metric: "Green Jobs Created", value: "120", change: "+25%" },
      ],
    },
    {
      id: "collaboration",
      title: "Collaboration",
      slug: "collaboration",
      description: "Creating synergies between government, industry, academia, and communities.",
      iconName: "Handshake",
      accentColor: "#F59E0B",
      objectives: [
        "Facilitate public-private partnerships",
        "Build community networks",
        "Enable cross-sector collaboration",
      ],
      programs: [
        "Partnership Platform",
        "Community Engagement",
        "Sector Forums",
      ],
      projects: ["Regional Partnership Initiative", "Knowledge Sharing Platform"],
      statistics: [
        { label: "Partnerships Formed", value: "56" },
        { label: "Community Events", value: "89" },
        { label: "Collaboration Projects", value: "42" },
      ],
      timeline: [
        { date: "2024 Q2", milestone: "Partnership Summit" },
        { date: "2024 Q4", milestone: "Platform Launch" },
      ],
      gallery: ["/images/collaboration-event.jpg"],
      downloads: [{ title: "Partnership Guide", url: "/docs/partnership-guide.pdf" }],
      partners: ["Regional Innovation Hubs", "Industry Associations"],
      videos: ["/videos/collaboration-success.mp4"],
      successStories: ["Partnership Success: Tech Alliance"],
      impactMetrics: [
        { metric: "Collaborations Formed", value: "45", change: "+30%" },
        { metric: "Knowledge Shared", value: "200 sessions", change: "+45%" },
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      slug: "infrastructure",
      description: "Developing the physical and digital infrastructure needed for innovation.",
      iconName: "Building2",
      accentColor: "#6366F1",
      objectives: [
        "Build innovation hubs",
        "Improve digital connectivity",
        "Develop co-working spaces",
      ],
      programs: [
        "Hub Development",
        "Digital Infrastructure",
        "Co-working Network",
      ],
      projects: ["Innovation Hub Construction", "Fiber Network Expansion"],
      statistics: [
        { label: "Hubs Built", value: "8" },
        { label: "Connected Areas", value: "15" },
        { label: "Co-working Spaces", value: "12" },
      ],
      timeline: [
        { date: "2024 Q3", milestone: "Hub 2 Opening" },
        { date: "2025 Q1", milestone: "Fiber Network Completion" },
      ],
      gallery: ["/images/infrastructure-hub.jpg"],
      downloads: [{ title: "Infrastructure Blueprint", url: "/docs/infrastructure-plan.pdf" }],
      partners: ["Construction Firms", "Telecom Companies"],
      videos: ["/videos/infrastructure-tour.mp4"],
      successStories: ["Hub Success: Tech Center Surigao"],
      impactMetrics: [
        { metric: "Users Served", value: "2,500", change: "+50%" },
        { metric: "Infrastructure Score", value: "85/100", change: "+15%" },
      ],
    },
    {
      id: "governance",
      title: "Governance",
      slug: "governance",
      description: "Ensuring transparent, accountable, and innovation-friendly policies.",
      iconName: "Scale",
      accentColor: "#EF4444",
      objectives: [
        "Develop innovation policies",
        "Streamline regulations",
        "Ensure accountability",
      ],
      programs: [
        "Policy Development",
        "Regulatory Review",
        "Transparency Initiative",
      ],
      projects: ["Innovation Ordinance", "Regulatory Sandbox"],
      statistics: [
        { label: "Policies Enacted", value: "15" },
        { label: "Regulations Streamlined", value: "23" },
        { label: "Transparency Score", value: "92%" },
      ],
      timeline: [
        { date: "2024 Q1", milestone: "Innovation Ordinance Passed" },
        { date: "2024 Q3", milestone: "Regulatory Sandbox Launch" },
      ],
      gallery: ["/images/policy-signing.jpg"],
      downloads: [{ title: "Policy Documents", url: "/docs/policies.pdf" }],
      partners: ["Local Government", "Policy Institute"],
      videos: ["/videos/policy-announcement.mp4"],
      successStories: ["Policy Success: Startup-Friendly Regulations"],
      impactMetrics: [
        { metric: "Compliance Time", value: "30 days", change: "-40%" },
        { metric: "Startup Registrations", value: "+60%", change: "+60%" },
      ],
    },
  ]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus("success");
    
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const updatePillar = (pillarId: string, field: keyof Pillar, value: any) => {
    setPillars(pillars.map(p => 
      p.id === pillarId ? { ...p, [field]: value } : p
    ));
  };

  const addObjective = (pillarId: string) => {
    setPillars(pillars.map(p => 
      p.id === pillarId ? { ...p, objectives: [...p.objectives, ""] } : p
    ));
  };

  const removeObjective = (pillarId: string, index: number) => {
    setPillars(pillars.map(p => 
      p.id === pillarId ? { ...p, objectives: p.objectives.filter((_, i) => i !== index) } : p
    ));
  };

  const addProgram = (pillarId: string) => {
    setPillars(pillars.map(p => 
      p.id === pillarId ? { ...p, programs: [...p.programs, ""] } : p
    ));
  };

  const removeProgram = (pillarId: string, index: number) => {
    setPillars(pillars.map(p => 
      p.id === pillarId ? { ...p, programs: p.programs.filter((_, i) => i !== index) } : p
    ));
  };

  const currentPillar = pillars.find(p => p.id === activePillar);

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
            <h1 className="text-2xl font-bold text-gray-900">Framework Editor</h1>
            <p className="text-gray-500 mt-1">Manage the PRIME SDN framework pillars</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/frameworks" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
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

      {/* Main Framework Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-bold text-gray-900 mb-6">Framework Overview</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Main Heading</label>
            <input
              type="text"
              value={frameworkContent.mainHeading}
              onChange={(e) => setFrameworkContent({ ...frameworkContent, mainHeading: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
              placeholder="EXPLORE THE ECOSYSTEM"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Main Statement</label>
            <RichTextEditor
              value={frameworkContent.mainStatement}
              onChange={(value) => setFrameworkContent({ ...frameworkContent, mainStatement: value })}
              minHeight="150px"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
            <RichTextEditor
              value={frameworkContent.description}
              onChange={(value) => setFrameworkContent({ ...frameworkContent, description: value })}
              minHeight="200px"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Pillar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sticky top-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Framework Pillars</h3>
            <div className="space-y-1">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activePillar === pillar.id
                      ? "bg-maroon-900 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: pillar.accentColor }}
                  />
                  <span className="truncate">{pillar.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar Editor */}
        <div className="lg:col-span-3">
          {currentPillar && (
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: currentPillar.accentColor }}
                  />
                  <h2 className="text-xl font-bold text-gray-900">{currentPillar.title}</h2>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Title</label>
                    <input
                      type="text"
                      value={currentPillar.title}
                      onChange={(e) => updatePillar(currentPillar.id, "title", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Slug</label>
                    <input
                      type="text"
                      value={currentPillar.slug}
                      onChange={(e) => updatePillar(currentPillar.id, "slug", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
                  <RichTextEditor
                    value={currentPillar.description}
                    onChange={(value) => updatePillar(currentPillar.id, "description", value)}
                    minHeight="150px"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Accent Color</label>
                    <input
                      type="color"
                      value={currentPillar.accentColor}
                      onChange={(e) => updatePillar(currentPillar.id, "accentColor", e.target.value)}
                      className="w-full h-10 rounded-xl border border-gray-200 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Icon Name (Lucide)</label>
                    <input
                      type="text"
                      value={currentPillar.iconName}
                      onChange={(e) => updatePillar(currentPillar.id, "iconName", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                      placeholder="Rocket"
                    />
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-bold text-gray-900">Objectives</label>
                    <button
                      onClick={() => addObjective(currentPillar.id)}
                      className="text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
                    >
                      <Plus size={14} />
                      <span>Add Objective</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {currentPillar.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <input
                          type="text"
                          value={objective}
                          onChange={(e) => {
                            const newObjectives = [...currentPillar.objectives];
                            newObjectives[index] = e.target.value;
                            updatePillar(currentPillar.id, "objectives", newObjectives);
                          }}
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                        <button
                          onClick={() => removeObjective(currentPillar.id, index)}
                          className="p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Programs */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-bold text-gray-900">Programs</label>
                    <button
                      onClick={() => addProgram(currentPillar.id)}
                      className="text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
                    >
                      <Plus size={14} />
                      <span>Add Program</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {currentPillar.programs.map((program, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <input
                          type="text"
                          value={program}
                          onChange={(e) => {
                            const newPrograms = [...currentPillar.programs];
                            newPrograms[index] = e.target.value;
                            updatePillar(currentPillar.id, "programs", newPrograms);
                          }}
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                        <button
                          onClick={() => removeProgram(currentPillar.id, index)}
                          className="p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">Statistics</label>
                  <div className="space-y-3">
                    {currentPillar.statistics.map((stat, index) => (
                      <div key={index} className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...currentPillar.statistics];
                            newStats[index] = { ...newStats[index], label: e.target.value };
                            updatePillar(currentPillar.id, "statistics", newStats);
                          }}
                          className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="Label"
                        />
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...currentPillar.statistics];
                            newStats[index] = { ...newStats[index], value: e.target.value };
                            updatePillar(currentPillar.id, "statistics", newStats);
                          }}
                          className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="Value"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
