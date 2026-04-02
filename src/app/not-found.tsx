'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      background: 'var(--bg-primary)'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ 
          fontSize: 'clamp(6rem, 15vw, 10rem)', 
          fontWeight: 900, 
          margin: 0,
          background: 'linear-gradient(135deg, var(--accent-primary) 0%, #ff9559 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1
        }}>
          404
        </h1>
        
        <h2 className="h2" style={{ marginBottom: '1rem', marginTop: '-1rem' }}>
          Page <span className="text-accent-gradient">Not Found</span>
        </h2>
        
        <p className="text-body" style={{ maxWidth: '400px', margin: '0 auto 2.5rem' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              window.location.href = document.referrer || '/';
            }}
            className="btn btn-secondary"
            style={{ gap: '0.5rem' }}
          >
            <ArrowLeft size={18} /> Go Back
          </button>
          
          <a href="/" className="btn btn-primary" style={{ gap: '0.5rem' }}>
            <Home size={18} /> Return Home
          </a>
        </div>
      </motion.div>

      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1,
        opacity: 0.5
      }} />
    </div>
  );
}
