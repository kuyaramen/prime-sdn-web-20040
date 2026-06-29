"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Eye, RefreshCw, ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface Municipality {
  id: string;
  name: string;
  description: string;
  population: string;
  industries: string[];
  innovation: string[];
  investment: string[];
}

interface Attraction {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

export default function DiscoverSurigaoEditorClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeSection, setActiveSection] = useState<string>("overview");

  const [discoverContent, setDiscoverContent] = useState({
    mainHeading: "DISCOVER SURIGAO",
    mainStatement: "EXPERIENCE THE NATURAL WONDERS, CULTURE, AND INNOVATIVE SPIRIT OF SURIGAO DEL NORTE",
    description: "Located in the Caraga region of Mindanao, Surigao del Norte is a province blessed with pristine natural landscapes, rich cultural heritage, and a growing innovation ecosystem.",
  });

  const [provinceStats, setProvinceStats] = useState([
    { label: "Municipalities & Cities", value: "20" },
    { label: "Islands", value: "27" },
    { label: "Population", value: "580K" },
    { label: "Tourism Sites", value: "50+" },
    { label: "Innovation Programs", value: "12" },
  ]);

  const [municipalities, setMunicipalities] = useState<Municipality[]>([
    {
      id: "surigao-city",
      name: "Surigao City",
      description: "The capital city and gateway to the province, serving as the commercial and educational hub.",
      population: "171,000",
      industries: ["Trade & Commerce", "Education", "Tourism", "Port Services"],
      innovation: ["Digital Port Systems", "Smart City Initiatives", "Business Incubation"],
      investment: ["Commercial Real Estate", "Logistics", "Tourism Infrastructure"],
    },
    {
      id: "dapa",
      name: "Dapa",
      description: "Gateway to Siargao Island, known for its surfing destinations and growing tourism industry.",
      population: "28,000",
      industries: ["Tourism", "Hospitality", "Agriculture", "Fisheries"],
      innovation: ["Sustainable Tourism Tech", "Digital Marketing", "Eco-Tourism Apps"],
      investment: ["Resort Development", "Tourism Infrastructure", "Sustainable Projects"],
    },
  ]);

  const [attractions, setAttractions] = useState<Attraction[]>([
    {
      id: "siargao",
      name: "Siargao Island",
      description: "World-renowned surfing destination with pristine beaches and natural beauty.",
      category: "Tourism",
      image: "/images/siargao.jpg",
    },
    {
      id: "sohoton",
      name: "Sohoton Cove",
      description: "Protected landscape and seascape featuring caves, lagoons, and diverse marine life.",
      category: "Nature",
      image: "/images/sohoton.jpg",
    },
    {
      id: "bucas-grande",
      name: "Bucas Grande",
      description: "Island paradise with enchanting lagoons and crystal-clear waters.",
      category: "Tourism",
      image: "/images/bucas-grande.jpg",
    },
  ]);

  const [economicSectors, setEconomicSectors] = useState([
    { name: "Agriculture", description: "Rice, corn, coconut, and fishery production", programs: ["Agri-Innovation", "Farm Tech"] },
    { name: "Tourism", description: "Surfing, eco-tourism, and cultural tourism", programs: ["Tourism Development", "Sustainable Tourism"] },
    { name: "Mining", description: "Nickel and other mineral resources", programs: ["Responsible Mining", "Rehabilitation"] },
    { name: "Renewable Energy", description: "Solar, wind, and hydroelectric power", programs: ["Green Energy", "Power Infrastructure"] },
  ]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus("success");
    
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const addMunicipality = () => {
    const newMunicipality: Municipality = {
      id: Date.now().toString(),
      name: "New Municipality",
      description: "Add description...",
      population: "0",
      industries: [],
      innovation: [],
      investment: [],
    };
    setMunicipalities([...municipalities, newMunicipality]);
  };

  const removeMunicipality = (id: string) => {
    setMunicipalities(municipalities.filter(m => m.id !== id));
  };

  const addAttraction = () => {
    const newAttraction: Attraction = {
      id: Date.now().toString(),
      name: "New Attraction",
      description: "Add description...",
      category: "Tourism",
      image: "/images/placeholder.jpg",
    };
    setAttractions([...attractions, newAttraction]);
  };

  const removeAttraction = (id: string) => {
    setAttractions(attractions.filter(a => a.id !== id));
  };

  const sectionList = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "municipalities", label: "Municipalities", icon: "🏙️" },
    { id: "attractions", label: "Natural Attractions", icon: "🏝️" },
    { id: "economy", label: "Economic Sectors", icon: "💼" },
    { id: "innovation", label: "Innovation Ecosystem", icon: "🚀" },
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
            <h1 className="text-2xl font-bold text-gray-900">Discover Surigao Editor</h1>
            <p className="text-gray-500 mt-1">Edit the Discover Surigao page content</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/discover-surigao" target="_blank" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
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
          {activeSection === "overview" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Overview</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Main Heading</label>
                  <input
                    type="text"
                    value={discoverContent.mainHeading}
                    onChange={(e) => setDiscoverContent({ ...discoverContent, mainHeading: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Main Statement</label>
                  <RichTextEditor
                    value={discoverContent.mainStatement}
                    onChange={(value) => setDiscoverContent({ ...discoverContent, mainStatement: value })}
                    minHeight="150px"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
                  <RichTextEditor
                    value={discoverContent.description}
                    onChange={(value) => setDiscoverContent({ ...discoverContent, description: value })}
                    minHeight="200px"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">Province Statistics</label>
                  <div className="space-y-3">
                    {provinceStats.map((stat, index) => (
                      <div key={index} className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...provinceStats];
                            newStats[index] = { ...newStats[index], label: e.target.value };
                            setProvinceStats(newStats);
                          }}
                          className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                          placeholder="Label"
                        />
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...provinceStats];
                            newStats[index] = { ...newStats[index], value: e.target.value };
                            setProvinceStats(newStats);
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

          {activeSection === "municipalities" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Municipalities</h2>
                <button
                  onClick={addMunicipality}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
                >
                  <Plus size={16} />
                  <span>Add Municipality</span>
                </button>
              </div>

              <div className="space-y-4">
                {municipalities.map((municipality, index) => (
                  <motion.div
                    key={municipality.id}
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
                              value={municipality.name}
                              onChange={(e) => {
                                const newMunicipalities = [...municipalities];
                                newMunicipalities[index] = { ...municipality, name: e.target.value };
                                setMunicipalities(newMunicipalities);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Population</label>
                            <input
                              type="text"
                              value={municipality.population}
                              onChange={(e) => {
                                const newMunicipalities = [...municipalities];
                                newMunicipalities[index] = { ...municipality, population: e.target.value };
                                setMunicipalities(newMunicipalities);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                          <textarea
                            value={municipality.description}
                            onChange={(e) => {
                              const newMunicipalities = [...municipalities];
                              newMunicipalities[index] = { ...municipality, description: e.target.value };
                              setMunicipalities(newMunicipalities);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                            rows={2}
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeMunicipality(municipality.id)}
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

          {activeSection === "attractions" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Natural Attractions</h2>
                <button
                  onClick={addAttraction}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors text-sm font-semibold"
                >
                  <Plus size={16} />
                  <span>Add Attraction</span>
                </button>
              </div>

              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.id}
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
                              value={attraction.name}
                              onChange={(e) => {
                                const newAttractions = [...attractions];
                                newAttractions[index] = { ...attraction, name: e.target.value };
                                setAttractions(newAttractions);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                            <input
                              type="text"
                              value={attraction.category}
                              onChange={(e) => {
                                const newAttractions = [...attractions];
                                newAttractions[index] = { ...attraction, category: e.target.value };
                                setAttractions(newAttractions);
                              }}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                          <textarea
                            value={attraction.description}
                            onChange={(e) => {
                              const newAttractions = [...attractions];
                              newAttractions[index] = { ...attraction, description: e.target.value };
                              setAttractions(newAttractions);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                            rows={2}
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeAttraction(attraction.id)}
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

          {activeSection === "economy" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Economic Sectors</h2>
              
              <div className="space-y-4">
                {economicSectors.map((sector, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Sector Name</label>
                        <input
                          type="text"
                          value={sector.name}
                          onChange={(e) => {
                            const newSectors = [...economicSectors];
                            newSectors[index] = { ...newSectors[index], name: e.target.value };
                            setEconomicSectors(newSectors);
                          }}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                      <textarea
                        value={sector.description}
                        onChange={(e) => {
                          const newSectors = [...economicSectors];
                          newSectors[index] = { ...newSectors[index], description: e.target.value };
                          setEconomicSectors(newSectors);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "innovation" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Innovation Ecosystem</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Ecosystem Description</label>
                  <RichTextEditor
                    value="The innovation ecosystem in Surigao del Norte connects government, academia, industry, and communities to drive sustainable growth."
                    onChange={() => {}}
                    minHeight="200px"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">Key Stakeholders</label>
                  <div className="space-y-2">
                    {["Government", "Academia", "Industry", "Communities", "Startups", "Investors"].map((stakeholder, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <input
                          type="text"
                          value={stakeholder}
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
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
