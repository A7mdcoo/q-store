'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useCart } from '@/components/providers/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, totalItems } = useCart();


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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 51 }} className="navbar-logo">
          <div style={{
            background: 'var(--accent-primary)',
            color: '#fff',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 0 15px var(--accent-glow)',
            flexShrink: 0
          }}>
            Q
          </div>
          <span className="logo-text" style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 700, 
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}>   
            STORE
          </span>
        </Link>


        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <li><Link href="/#home" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Home</Link></li>
            <li><Link href="/#products" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Products</Link></li>
            <li><Link href="/#offers" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Deals <span className="badge">Hot</span></Link></li>
            <li><Link href="/#contact" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Contact</Link></li>
          </ul>
        </nav>


        {/* Actions */}
        {/* Actions Container (Danger Zone Restricted) */}
        <div className="navbar-actions" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          zIndex: 51, 
          justifyContent: 'flex-end',
          minWidth: 0,
          flexShrink: 1
        }}>
          <button style={{ color: 'var(--text-primary)', padding: '0.35rem' }} aria-label="Search">
            <Search size={20} className="nav-icon" />
          </button>
          <div className="nav-theme-toggle" style={{ transform: 'translateY(-2px)' }}>
            <ThemeToggle />
          </div>




          <button 
            style={{ color: 'var(--text-primary)', position: 'relative', padding: '0.3rem', flexShrink: 0 }} 
            aria-label="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="nav-icon" size={20} />
            <span className="cart-badge" style={{
              position: 'absolute',
              top: '-3px',
              right: '-4px',
              background: 'var(--accent-primary)',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 700,
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid var(--bg-primary)'
            }}>
              {totalItems}
            </span>
          </button>



          
          {/* Mobile Menu Toggle */}
          <button 
            style={{ color: 'var(--text-primary)', padding: '0.3rem', flexShrink: 0 }} 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>



      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav-menu"
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
              <li><Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, display: 'block' }}>Home</Link></li>
              <li><Link href="/#products" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'block' }}>Products</Link></li>
              <li>
                <Link href="/#offers" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Deals <span className="badge">Hot</span>
                </Link>
              </li>
              <li><Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'block' }}>Contact</Link></li>
            </ul>
          </motion.div>




        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-nav, .desktop-actions, .desktop-search {
          display: none;
        }
        @media (max-width: 767px) {
          .navbar-wrapper {
            padding: 0.6rem 0 !important;
          }
          .container {
            padding: 0 0.5rem !important;
          }
          .navbar-actions {
            gap: 0.05rem !important;
          }
          .logo-text {
            display: none;
          }
          :global(.nav-icon) {
            width: 20px !important;
            height: 20px !important;
          }
        }

        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .desktop-search { display: block !important; }
          .desktop-actions { display: block !important; }
          .navbar-actions { gap: 1.5rem !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-nav-menu { display: none !important; }
        }


      `}</style>





    </header>
  );
}
