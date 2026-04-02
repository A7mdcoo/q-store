'use client';

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CartProvider } from "@/components/providers/CartContext";
import { CartDrawer } from "@/components/layout/CartDrawer";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Footer from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <CartProvider>
        <Navbar />
        <CartDrawer />
        <main>
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </CartProvider>
    </ThemeProvider>
  );
}

