'use client';

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Footer from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
    </ThemeProvider>
  );
}
