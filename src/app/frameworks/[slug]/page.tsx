import { PillarPage } from "@/components/framework/PillarPage";
import { ECOSYSTEM_PILLARS } from "@/components/Ecosystem/ecosystemData";

export default async function FrameworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!slug || slug === '') {
    return <div>No slug provided</div>;
  }

  const pillar = ECOSYSTEM_PILLARS.find((p) => p.slug === slug);
  
  if (!pillar) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
            Pillar not found
          </div>
          <div className="text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
            Looking for: {slug}
          </div>
          <div className="text-xs mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.5 }}>
            Available slugs:
          </div>
          <div className="text-xs space-y-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.5 }}>
            {ECOSYSTEM_PILLARS.map(p => (
              <div key={p.id}>{p.slug} → {p.id}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <PillarPage pillarSlug={pillar.id} />;
}
