'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Container with distinct background */}
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
            borderRadius: '32px',
            padding: '4rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-20%',
            width: '400px',
            height: '400px',
            background: 'var(--accent-primary)',
            filter: 'blur(120px)',
            opacity: 0.15,
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-50%',
            right: '-20%',
            width: '400px',
            height: '400px',
            background: '#3b82f6', // Contrast glow
            filter: 'blur(120px)',
            opacity: 0.15,
            borderRadius: '50%'
          }} />

          {/* Content */}
          <span className="badge" style={{ position: 'relative', zIndex: 10 }}>Special Offer</span>
          <h2 className="h1" style={{ position: 'relative', zIndex: 10, maxWidth: '600px' }}>
            Upgrade your tech today
          </h2>
          <p className="text-body" style={{ position: 'relative', zIndex: 10, maxWidth: '500px', fontSize: '1.125rem' }}>
            Join thousands of satisfied customers. Experience premium quality, fast delivery, and unbeatable prices.
          </p>
          
          <Link 
            href="/products" 
            className="btn btn-primary" 
            style={{ 
              position: 'relative', 
              zIndex: 10, 
              marginTop: '1rem',
              padding: '1rem 2rem',
              fontSize: '1.125rem'
            }}
          >
            Start Shopping <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>

        </motion.div>
      </div>
      
    </section>
  );
}
