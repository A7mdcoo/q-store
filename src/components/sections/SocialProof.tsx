'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function SocialProof() {
  const posts = [
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              marginBottom: '1rem',
              overflow: 'hidden',
              border: '2px solid var(--accent-primary)',
              boxShadow: 'var(--shadow-glow)',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/images/q_logo.png"
              alt="Q Store Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 className="h2" style={{ marginBottom: '0.5rem' }}>
            Follow Us{' '}
            <span style={{ color: 'var(--text-secondary)' }}>@q_store_mobile</span>
          </h2>
          <p className="text-body">Tag us in your setup to be featured!</p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-sm)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
          className="social-grid"
        >
          {posts.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="social-post"
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <img
                src={url}
                alt={`Q Store Instagram post ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="post-img"
              />
              <div
                className="post-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,10,15,0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Camera size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .social-post:hover .post-img  { transform: scale(1.1); }
        .social-post:hover .post-overlay { opacity: 1 !important; }
        @media (min-width: 768px) {
          .social-grid { grid-template-columns: repeat(3, 1fr) !important; gap: var(--spacing-md) !important; }
        }
      `}</style>
    </section>
  );
}
