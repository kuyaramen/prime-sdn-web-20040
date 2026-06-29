"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SessionProvider } from "../providers/SessionProvider";
import { ReactNode } from "react";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

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
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </ReactLenis>
    </SessionProvider>
  );
}
