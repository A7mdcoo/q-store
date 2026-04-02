'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px', // Header height offset
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at top, var(--bg-tertiary) 0%, var(--bg-primary) 70%)'
    }}>
      {/* Background Glow Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'rgba(255, 255, 255, 0.05)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid md:grid-cols-2 gap-xl items-center">
          
          {/* Text Content */}
          <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                <Flame size={14} /> Hot Deals 🔥
              </span>
              <h1 className="h1" style={{ marginBottom: '0.5rem' }}>
                Latest Tech.<br />
                <span className="text-accent-gradient">Best Prices.</span>
              </h1>
              <p className="text-body" style={{ fontSize: '1.125rem', maxWidth: '400px' }}>
                Mobiles, AirPods, Smart Watches & More. Upgrade your ecosystem with premium gear.
              </p>
            </motion.div>

            <motion.div 
              className="flex gap-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ flexWrap: 'wrap' }}
            >
              <Link href="/products" className="btn btn-primary">
                Shop Now <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/offers" className="btn btn-secondary">
                View Offers
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>10k+</span>
                <span className="text-small">Customers</span>
              </div>
              <div style={{ width: '1px', background: 'var(--border-light)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>24h</span>
                <span className="text-small">Fast Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* Image Showcase */}
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ 
              position: 'relative', 
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Using a tech composite placeholder - in production this would be a high-end 3D render */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: '350px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-glass)',
                border: '1px solid var(--border-light)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1622359419163-4a11f2a36b33?auto=format&fit=crop&q=80&w=800" 
                alt="Latest Smartphone"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,15,0.8), transparent)'
              }} />
              
              {/* Floating Price Tag */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: 'var(--bg-glass-strong)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <span className="text-small" style={{ textDecoration: 'line-through' }}>$1,299</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>$1,199</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 767px) {
          .hero-section {
            min-height: auto;
            padding-bottom: var(--spacing-2xl);
          }
          .hero-text {
            text-align: center;
            align-items: center;
          }
          .hero-text .flex {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
