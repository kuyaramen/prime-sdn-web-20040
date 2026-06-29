import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import {
  BookOpen,
  History,
  Target,
  Heart,
  Scale,
  Layers,
  TrendingUp,
  Shield,
  Building,
  Handshake,
  Download,
  HelpCircle,
  ArrowRight,
  FileText,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

async function getAboutStats() {
  const [
    stories,
    visionLetters,
    missionCards,
    coreValues,
    governancePrinciples,
    frameworkPillars,
    roadmapMilestones,
    policies,
    orgRoles,
    partners,
    downloads,
    faqs,
  ] = await Promise.all([
    db.aboutStory.count(),
    db.visionLetter.count(),
    db.missionCard.count(),
    db.coreValue.count(),
    db.governancePrinciple.count(),
    db.frameworkPillar.count(),
    db.roadmapMilestone.count(),
    db.policy.count(),
    db.organizationalRole.count(),
    db.strategicPartner.count(),
    db.downloadResource.count(),
    db.fAQ.count(),
  ]);

  const publishedStories = await db.aboutStory.count({ where: { published: true } });
  const publishedVision = await db.visionLetter.count({ where: { published: true } });
  const publishedMission = await db.missionCard.count({ where: { published: true } });
  const publishedPolicies = await db.policy.count();

  return {
    stories: { total: stories, published: publishedStories },
    vision: { total: visionLetters, published: publishedVision },
    mission: { total: missionCards, published: publishedMission },
    coreValues,
    governancePrinciples,
    frameworkPillars,
    roadmapMilestones,
    policies: { total: policies, published: publishedPolicies },
    orgRoles,
    partners,
    downloads,
    faqs,
  };
}

export default async function AboutDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin/login");
  }

  const stats = await getAboutStats();

  const quickActions = [
    { name: "Edit Vision", href: "/admin/about/vision", icon: Target, color: "bg-purple-500" },
    { name: "Edit Mission", href: "/admin/about/mission", icon: Heart, color: "bg-pink-500" },
    { name: "Add Partner", href: "/admin/about/partners", icon: Handshake, color: "bg-blue-500" },
    { name: "Upload Policy", href: "/admin/about/policies", icon: Shield, color: "bg-green-500" },
    { name: "Update Roadmap", href: "/admin/about/roadmap", icon: TrendingUp, color: "bg-orange-500" },
    { name: "Edit Framework", href: "/admin/about/framework", icon: Layers, color: "bg-indigo-500" },
    { name: "Manage Downloads", href: "/admin/about/downloads", icon: Download, color: "bg-teal-500" },
    { name: "Edit Story", href: "/admin/about/story", icon: History, color: "bg-amber-500" },
  ];

  const contentSections = [
    { name: "Our Story", href: "/admin/about/story", icon: History, total: stats.stories.total, published: stats.stories.published },
    { name: "Vision (PRIME 2055)", href: "/admin/about/vision", icon: Target, total: stats.vision.total, published: stats.vision.published },
    { name: "Mission (SMART)", href: "/admin/about/mission", icon: Heart, total: stats.mission.total, published: stats.mission.published },
    { name: "Core Values", href: "/admin/about/core-values", icon: Heart, total: stats.coreValues, published: stats.coreValues },
    { name: "Governance Principles", href: "/admin/about/governance", icon: Scale, total: stats.governancePrinciples, published: stats.governancePrinciples },
    { name: "Framework", href: "/admin/about/framework", icon: Layers, total: stats.frameworkPillars, published: stats.frameworkPillars },
    { name: "Innovation Roadmap", href: "/admin/about/roadmap", icon: TrendingUp, total: stats.roadmapMilestones, published: stats.roadmapMilestones },
    { name: "Policies & Governance", href: "/admin/about/policies", icon: Shield, total: stats.policies.total, published: stats.policies.published },
    { name: "Organization", href: "/admin/about/organization", icon: Building, total: stats.orgRoles, published: stats.orgRoles },
    { name: "Strategic Partners", href: "/admin/about/partners", icon: Handshake, total: stats.partners, published: stats.partners },
    { name: "Downloads & Resources", href: "/admin/about/downloads", icon: Download, total: stats.downloads, published: stats.downloads },
    { name: "FAQ", href: "/admin/about/faq", icon: HelpCircle, total: stats.faqs, published: stats.faqs },
  ];

  const totalPublished = contentSections.reduce((sum, section) => sum + section.published, 0);
  const totalDraft = contentSections.reduce((sum, section) => sum + (section.total - section.published), 0);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About Us Dashboard</h1>
        <p className="text-gray-600">Manage all About Us content for PRIME SDN</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">Published</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalPublished}</p>
          <p className="text-sm text-gray-600">Total Published Pages</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-500">Draft</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalDraft}</p>
          <p className="text-sm text-gray-600">Draft Pages</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">Resources</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.downloads}</p>
          <p className="text-sm text-gray-600">Downloads Available</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Layers className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">Framework</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.frameworkPillars}</p>
          <p className="text-sm text-gray-600">Framework Pillars</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className={`p-2 ${action.color} rounded-lg`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-gray-900">{action.name}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Sections</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Section</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Total</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Published</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Draft</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contentSections.map((section) => (
                <tr key={section.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <section.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium text-gray-900">{section.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-900">{section.total}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-medium">{section.published}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-medium">{section.total - section.published}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Manage
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
