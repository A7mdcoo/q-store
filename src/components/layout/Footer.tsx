'use client';

import Link from 'next/link';
import { Share2, Video, Camera, Music } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { label: 'Facebook', icon: <Share2 size={16} />, href: '#' },
    { label: 'TikTok',   icon: <Music   size={16} />, href: '#' },
    { label: 'Instagram',icon: <Camera  size={16} />, href: '#', accent: true },
    { label: 'YouTube',  icon: <Video   size={16} />, href: '#' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-3xl)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
          opacity: 0.5,
          boxShadow: '0 0 30px 2px var(--accent-primary)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-2xl)',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
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
                  boxShadow: '0 0 15px var(--accent-glow)',
                }}
              >
                Q
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                STORE
              </span>
            </Link>

            <p
              className="text-small"
              style={{ maxWidth: '240px', lineHeight: 1.7, color: 'var(--text-secondary)' }}
            >
              Your ultimate destination for the latest mobile tech, accessories, and gadgets.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: s.accent ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                    color: s.accent ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-light)',
                    boxShadow: s.accent ? 'var(--shadow-glow)' : 'none',
                    transition: 'all var(--transition-base)',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'All Products', 'Flash Sale', 'Categories'].map((label) => (
                <li key={label}>
                  <Link
                    href="/"
                    style={{
                      color: label === 'Flash Sale' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Support</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Contact Us', 'FAQ', 'Shipping & Returns', 'Warranty Info'].map((label) => (
                <li key={label}>
                  <Link
                    href="/"
                    style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color var(--transition-fast)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Stay Updated</h4>
            <p className="text-small" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Get exclusive offers and tech news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', gap: '0.5rem' }}
            >
              <input
                type="email"
                placeholder="Email address"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  outline: 'none',
                  flex: 1,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--accent-primary)',
                  color: '#fff',
                  padding: '0 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 'var(--spacing-2xl)',
            paddingTop: 'var(--spacing-md)',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            textAlign: 'center',
          }}
        >
          <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
            &copy; {new Date().getFullYear()} Q Store. All rights reserved.
          </p>
          <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
            Designed &amp; Developed by{' '}
            <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>MAATech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
