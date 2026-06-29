export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export const PILLAR_ICONS: Record<string, string> = {
  "visionary-leadership": "compass",
  "smart-province": "building",
  "innovative-human-capital": "graduation-cap",
  "collaborative-research-and-development": "flask-conical",
  "innovation-driven-economy": "trending-up",
  "creative-industries": "palette",
  "strong-startup-ecosystem": "rocket",
};

export const SITE_CONFIG = {
  name: "Prime SDN",
  fullName: "Prime Surigao 2040",
  tagline:
    "A public-private movement to promote innovation in the province of Surigao del Norte, Philippines — home to the surfing capital of the Philippines, pristine island ecosystems, and a resilient, innovation-ready spirit.",
  phone: "(086) 826 9001",
  email: "hello@primesdn.com",
  address: "Provincial Capitol, Surigao City, Surigao del Norte, Philippines",
  social: {
    facebook: "https://facebook.com/primesdn",
    instagram: "https://instagram.com/primesdn",
    twitter: "https://x.com/primesdn",
    youtube: "https://youtube.com/@primesdn",
  },
};
