import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ECOSYSTEM_PILLARS } from "@/components/Ecosystem/ecosystemData";
import { EducationTalentClient } from "@/app/frameworks/education-and-talent/EducationTalentClient";
import ResearchInnovationClient from "@/app/frameworks/research-and-innovation/ResearchInnovationClient";
import DigitalTransformationClient from "@/app/frameworks/digital-transformation/DigitalTransformationClient";

import HeroSection from "@/components/framework/HeroSection";
import OverviewSection from "@/components/framework/OverviewSection";
import WhyItMattersSection from "@/components/framework/WhyItMattersSection";
import ObjectivesSection from "@/components/framework/ObjectivesSection";
import ProgramsSection from "@/components/framework/ProgramsSection";
import ProcessSection from "@/components/framework/ProcessSection";
import TimelineSection from "@/components/framework/TimelineSection";
import StakeholdersSection from "@/components/framework/StakeholdersSection";
import ImpactStatsSection from "@/components/framework/ImpactStatsSection";
import ResourcesSection from "@/components/framework/ResourcesSection";
import RelatedFrameworksSection from "@/components/framework/RelatedFrameworksSection";
import CTASection from "@/components/framework/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ECOSYSTEM_PILLARS.map((pillar) => ({
    slug: pillar.slug,
  }));
}

export default async function PillarPage({ params }: PageProps) {
  const { slug } = await params;
  const pillar = ECOSYSTEM_PILLARS.find((p) => p.slug === slug);

  if (!pillar) {
    notFound();
  }

  // Use the new Education & Talent client for the education-talent pillar
  if (slug === "education-and-talent") {
    return <EducationTalentClient />;
  }

  // Use the new Research & Innovation client for the research-and-innovation pillar
  if (slug === "research-and-innovation") {
    return <ResearchInnovationClient />;
  }

  // Use the new Digital Transformation client for the digital-transformation pillar
  if (slug === "digital-transformation") {
    return <DigitalTransformationClient />;
  }

  return (
    <div className="min-h-screen bg-[#FCFCFB] text-slate-900 pb-0 selection:bg-slate-200">
      
      {/* Minimalism Header / Breadcrumb Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Ecosystem Explorer
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.accentColor }} />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              SDN PRIME 2040
            </span>
          </div>
        </div>
      </nav>

      <main>
        {/* Section 1: Immersive Hero Section */}
        <HeroSection pillar={pillar} />

        {/* Section 2: Framework Overview */}
        <OverviewSection pillar={pillar} />

        {/* Section 3: Why This Framework Matters */}
        <WhyItMattersSection pillar={pillar} />

        {/* Section 4: Strategic Objectives */}
        <ObjectivesSection pillar={pillar} />

        {/* Section 5: Programs & Initiatives */}
        <ProgramsSection pillar={pillar} />

        {/* Section 6: Process / Workflow */}
        <ProcessSection pillar={pillar} />

        {/* Section 7: Timeline */}
        <TimelineSection pillar={pillar} />

        {/* Section 8: Stakeholders */}
        <StakeholdersSection pillar={pillar} />

        {/* Section 9: Statistics & Impact */}
        <ImpactStatsSection pillar={pillar} />

        {/* Section 10: Resources */}
        <ResourcesSection pillar={pillar} />

        {/* Section 11: Related Frameworks */}
        <RelatedFrameworksSection currentPillar={pillar} />

        {/* Section 12: Call To Action */}
        <CTASection pillar={pillar} />
      </main>
      
    </div>
  );
}
