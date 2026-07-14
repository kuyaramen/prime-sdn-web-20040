import {
  Compass,
  Building2,
  GraduationCap,
  FlaskConical,
  TrendingUp,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  building: Building2,
  "graduation-cap": GraduationCap,
  "flask-conical": FlaskConical,
  "trending-up": TrendingUp,
  palette: Palette,
  rocket: Rocket,
};

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
}

export function PillarCard({ title, description, icon }: PillarCardProps) {
  const IconComponent = iconMap[icon] || Compass;

  return (
    <div className="flex flex-col items-center text-center p-6 group">
      <div className="w-16 h-16 rounded-full bg-cream-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-[#1E4FBF]">
        <IconComponent
          size={28}
          className="text-[#1E4FBF] transition-colors group-hover:text-white"
        />
      </div>
      <h3 className="font-display text-lg font-bold text-[#1E4FBF] mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
