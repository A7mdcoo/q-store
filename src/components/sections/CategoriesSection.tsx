'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/lib/mockData';

export default function CategoriesSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h2 className="h2">Browse by <span className="text-accent-gradient">Category</span></h2>
          <p className="text-body mt-2">Find exactly what you are looking for.</p>
        </div>

        <div className="scroll-x md:scroll-grid" style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'minmax(120px, 1fr)',
          gap: 'var(--spacing-md)',
          overflowX: 'auto',
          paddingBottom: '1rem',
          scrollbarWidth: 'none',
        }}>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/category/${category.name.toLowerCase()}`} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                background: 'var(--bg-secondary)',
                padding: '1.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                transition: 'all var(--transition-base)',
                height: '100%',
                minWidth: '120px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 106, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  background: 'var(--bg-tertiary)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  {category.iconUrl}
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
                  {category.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:scroll-grid {
            grid-auto-flow: row !important;
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
         @media (min-width: 1024px) {
          .md\\:scroll-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
