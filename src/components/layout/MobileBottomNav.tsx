'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Grid, ShoppingBag, Percent, User } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home',       href: '/',           icon: Home },
  { name: 'Categories', href: '/categories', icon: Grid },
  { name: 'Cart',       href: '/cart',       icon: ShoppingBag, badge: 3 },
  { name: 'Offers',     href: '/offers',     icon: Percent },
  { name: 'Profile',    href: '/profile',    icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <>
      <nav
        id="mobile-bottom-nav"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(17, 17, 24, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-light)',
          height: 'var(--bottom-nav-height)',
          zIndex: 50,
        }}
      >
        <ul
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '60px',
            padding: '0 0.25rem',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname?.startsWith(item.href));
            const Icon = item.icon;

            return (
              <li key={item.name} style={{ flex: 1 }}>
                <Link
                  href={item.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    width: '100%',
                    padding: '6px 0',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />

                    {/* Cart badge */}
                    {item.badge && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-6px',
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
                          border: '2px solid var(--bg-primary)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Active glow indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255, 106, 0, 0.25)',
                          borderRadius: '50%',
                          filter: 'blur(8px)',
                          zIndex: -1,
                        }}
                      />
                    )}
                  </div>

                  <span style={{ fontSize: '0.6rem', fontWeight: isActive ? 700 : 500 }}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hide on desktop via a global style tag */}
      <style>{`
        @media (min-width: 768px) {
          #mobile-bottom-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
