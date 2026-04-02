'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'var(--bg-glass-strong)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 51 }}>
          <div style={{
            background: 'var(--accent-primary)',
            color: '#fff',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.2rem',
            boxShadow: '0 0 15px var(--accent-glow)'
          }}>
            Q
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 700, 
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}>   
            STORE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <li><Link href="/" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Home</Link></li>
            <li><Link href="/products" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Products</Link></li>
            <li><Link href="/offers" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Deals <span className="badge">Hot</span></Link></li>
            <li><Link href="/contact" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Contact</Link></li>
          </ul>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 51 }}>
          <ThemeToggle />
          <button style={{ color: 'var(--text-primary)' }} aria-label="Search">
            <Search size={22} />
          </button>
          <div style={{ display: 'none' }} className="desktop-actions">
            <button style={{ color: 'var(--text-primary)' }} aria-label="Wishlist">
              <Heart size={22} />
            </button>
          </div>
          <button style={{ color: 'var(--text-primary)', position: 'relative' }} aria-label="Cart">
            <ShoppingCart size={22} />
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-8px',
              background: 'var(--accent-primary)',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 700,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--bg-primary)'
            }}>
              3
            </span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            style={{ color: 'var(--text-primary)' }} 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-light)',
              padding: '1rem var(--spacing-md)',
              boxShadow: 'var(--shadow-md)'
            }}
            className="mobile-nav-menu"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, display: 'block' }}>Home</Link></li>
              <li><Link href="/products" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'block' }}>Products</Link></li>
              <li>
                <Link href="/offers" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Deals <span className="badge">Hot</span>
                </Link>
              </li>
              <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'block' }}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .desktop-actions { display: block !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-nav-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
