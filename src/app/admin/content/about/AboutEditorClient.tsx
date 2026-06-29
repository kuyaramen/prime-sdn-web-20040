"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function AboutEditorClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeSection, setActiveSection] = useState<string>("story");

  const [aboutContent, setAboutContent] = useState({
    mainHeading: "ABOUT PRIME SDN",
    mainStatement: "A PUBLIC-PRIVATE MOVEMENT TO PROMOTE INNOVATION IN SURIGAO DEL NORTE",
    story: "PRIME SDN (Provincial Innovation Movement for Entrepreneurship and Sustainable Development Network) is a collaborative initiative launched by the provincial government of Surigao del Norte to drive innovation, economic growth, and sustainable development across the province.",
    buttonText: "Learn More",
    buttonLink: "/about",
  });

  const [governance, setGovernance] = useState({
    title: "Governance Structure",
    description: "PRIME SDN operates under a multi-stakeholder governance model that ensures inclusive decision-making and accountability.",
    structure: [
      "Provincial Government Lead",
      "Private Sector Representatives",
      "Academic Institutions",
      "Civil Society Organizations",
      "Youth and Community Leaders",
    ],
  });

  const [timeline, setTimeline] = useState<TimelineEvent[]>([
    {
      id: "1",
      year: "2021",
      title: "Inception",
      description: "PRIME SDN was conceptualized as a response to the need for a coordinated innovation ecosystem in Surigao del Norte.",
    },
    {
      id: "2",
      year: "2022",
      title: "Launch",
      description: "Official launch of PRIME SDN with the signing of the provincial innovation ordinance.",
    },
    {
      id: "3",
      year: "2023",
      title: "First Programs",
      description: "Implementation of initial programs including startup grants and innovation hubs.",
    },
    {
      id: "4",
      year: "2024",
      title: "Expansion",
      description: "Expansion to all municipalities with increased partnerships and funding opportunities.",
    },
  ]);

  const [team, setTeam] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Governor",
      role: "Chief Patron",
      bio: "Leading the provincial government's commitment to innovation and sustainable development.",
      image: "/images/team/governor.jpg",
    },
    {
      id: "2",
      name: "Executive Director",
      role: "Program Lead",
      bio: "Overseeing the strategic implementation of PRIME SDN initiatives across the province.",
      image: "/images/team/director.jpg",
    },
  ]);

  const [partners, setPartners] = useState({
    title: "Strategic Partners",
    partners: [
      "Department of Science and Technology",
      "Department of Trade and Industry",
      "Local Universities",
      "Private Sector Organizations",
      "International Development Agencies",
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

  const addTimelineEvent = () => {
    const newEvent: TimelineEvent = {
      id: Date.now().toString(),
      year: "Year",
      title: "New Milestone",
      description: "Add description...",
    };
    setTimeline([...timeline, newEvent]);
  };

  const removeTimelineEvent = (id: string) => {
    setTimeline(timeline.filter(t => t.id !== id));
  };

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: "New Member",
      role: "Role",
      bio: "Add bio...",
      image: "/images/team/placeholder.jpg",
    };
    setTeam([...team, newMember]);
  };

  const removeTeamMember = (id: string) => {
    setTeam(team.filter(t => t.id !== id));
  };

  const sectionList = [
    { id: "story", label: "Our Story", icon: "📖" },
    { id: "governance", label: "Governance", icon: "🏛️" },
    { id: "timeline", label: "Timeline", icon: "📅" },
    { id: "team", label: "Team", icon: "👥" },
    { id: "partners", label: "Partners", icon: "🤝" },
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
            <h1 className="text-2xl font-bold text-gray-900">About Page Editor</h1>
            <p className="text-gray-500 mt-1">Edit the About page content</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/about" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
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
          {activeSection === "story" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Our Story</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Main Heading</label>
                  <input
                    type="text"
                    value={aboutContent.mainHeading}
                    onChange={(e) => setAboutContent({ ...aboutContent, mainHeading: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Main Statement</label>
                  <RichTextEditor
                    value={aboutContent.mainStatement}
                    onChange={(value) => setAboutContent({ ...aboutContent, mainStatement: value })}
                    minHeight="150px"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Story Content</label>
                  <RichTextEditor
                    value={aboutContent.story}
                    onChange={(value) => setAboutContent({ ...aboutContent, story: value })}
                    minHeight="300px"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Button Text</label>
                    <input
                      type="text"
                      value={aboutContent.buttonText}
                      onChange={(e) => setAboutContent({ ...aboutContent, buttonText: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Button Link</label>
                    <input
                      type="text"
                      value={aboutContent.buttonLink}
                      onChange={(e) => setAboutContent({ ...aboutContent, buttonLink: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "governance" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Governance Structure</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={governance.title}
                    onChange={(e) => setGovernance({ ...governance, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
                  <RichTextEditor
                    value={governance.description}
                    onChange={(value) => setGovernance({ ...governance, description: value })}
                    minHeight="150px"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">Governance Structure</label>
                  <div className="space-y-2">
                    {governance.structure.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newStructure = [...governance.structure];
                            newStructure[index] = e.target.value;
                            setGovernance({ ...governance, structure: newStructure });
                          }}
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setGovernance({ ...governance, structure: [...governance.structure, ""] })}
                    className="mt-3 text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
                  >
                    <Plus size={14} />
                    <span>Add Structure Item</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "timeline" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Timeline</h2>
                <button
                  onClick={addTimelineEvent}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
                >
                  <Plus size={16} />
                  <span>Add Event</span>
                </button>
              </div>

              <div className="space-y-4">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-gray-200 rounded-xl p-4 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                            <input
                              type="text"
                              value={event.year}
                              onChange={(e) => {
                                const newTimeline = [...timeline];
                                newTimeline[index] = { ...event, year: e.target.value };
                                setTimeline(newTimeline);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                            <input
                              type="text"
                              value={event.title}
                              onChange={(e) => {
                                const newTimeline = [...timeline];
                                newTimeline[index] = { ...event, title: e.target.value };
                                setTimeline(newTimeline);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                          <textarea
                            value={event.description}
                            onChange={(e) => {
                              const newTimeline = [...timeline];
                              newTimeline[index] = { ...event, description: e.target.value };
                              setTimeline(newTimeline);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                            rows={2}
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeTimelineEvent(event.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors shrink-0"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "team" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Team</h2>
                <button
                  onClick={addTeamMember}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
                >
                  <Plus size={16} />
                  <span>Add Team Member</span>
                </button>
              </div>

              <div className="space-y-4">
                {team.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-gray-200 rounded-xl p-4 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => {
                                const newTeam = [...team];
                                newTeam[index] = { ...member, name: e.target.value };
                                setTeam(newTeam);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                            <input
                              type="text"
                              value={member.role}
                              onChange={(e) => {
                                const newTeam = [...team];
                                newTeam[index] = { ...member, role: e.target.value };
                                setTeam(newTeam);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                          <textarea
                            value={member.bio}
                            onChange={(e) => {
                              const newTeam = [...team];
                              newTeam[index] = { ...member, bio: e.target.value };
                              setTeam(newTeam);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                            rows={2}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                          <input
                            type="text"
                            value={member.image}
                            onChange={(e) => {
                              const newTeam = [...team];
                              newTeam[index] = { ...member, image: e.target.value };
                              setTeam(newTeam);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeTeamMember(member.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors shrink-0"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "partners" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Strategic Partners</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={partners.title}
                    onChange={(e) => setPartners({ ...partners, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">Partners</label>
                  <div className="space-y-2">
                    {partners.partners.map((partner, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <input
                          type="text"
                          value={partner}
                          onChange={(e) => {
                            const newPartners = [...partners.partners];
                            newPartners[index] = e.target.value;
                            setPartners({ ...partners, partners: newPartners });
                          }}
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setPartners({ ...partners, partners: [...partners.partners, ""] })}
                    className="mt-3 text-sm font-semibold text-maroon-900 hover:underline flex items-center gap-1"
                  >
                    <Plus size={14} />
                    <span>Add Partner</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
