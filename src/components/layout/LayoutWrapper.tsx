"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SessionProvider } from "../providers/SessionProvider";
import { ReactNode } from "react";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { PrimeGuide } from "./PrimeGuide";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  // Pages with Hero Banners that should use heroMode
  const heroModePages = [
    "/",
    "/discover",
    "/about",
    "/opportunities",
    "/news",
    "/frameworks",
  ];

  const heroMode = pathname ? heroModePages.some(page => pathname === page || pathname.startsWith(page + "/")) : false;

  if (isAdmin) {
    return (
      <SessionProvider>
        <main className="flex-1 flex flex-col">{children}</main>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
        <Header heroMode={heroMode} />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <PrimeGuide />
      </ReactLenis>
    </SessionProvider>
  );
}
