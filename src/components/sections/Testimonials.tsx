'use client';

import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';
import { testimonials } from '@/lib/mockData';

export default function Testimonials() {
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div style={{ display: 'flex', gap: '2px', color: '#fbbf24' }}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={16} fill="currentColor" />
        ))}
        {hasHalfStar && <StarHalf size={16} fill="currentColor" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} color="var(--border-light)" />
        ))}
      </div>
    );
  };

  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)' }}>
          <div>
            <h2 className="h2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Happy <span className="text-accent-gradient">Customers</span>
            </h2>
            <p className="text-body mt-2">Don't just take our word for it.</p>
          </div>
        </div>

        <div className="scroll-x md:scroll-grid md:grid-cols-3 gap-md">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minWidth: '280px' // For horizontal scroll
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{testimonial.name}</h4>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              
              <p className="text-body" style={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
