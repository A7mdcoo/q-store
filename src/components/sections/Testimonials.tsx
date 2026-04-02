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

        <div className="testimonials-scroll md:scroll-grid md:grid-cols-3 gap-md">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
              style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                scrollSnapAlign: 'center',
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
                  boxShadow: 'var(--shadow-sm)',
                  flexShrink: 0
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{testimonial.name}</h4>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              
              <p className="text-body" style={{ fontStyle: 'italic', lineHeight: 1.6, wordBreak: 'break-word' }}>
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .testimonials-scroll {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          gap: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          padding-left: var(--spacing-md);
          padding-right: var(--spacing-md);
          scrollbar-width: none;
        }
        .testimonials-scroll::-webkit-scrollbar {
          display: none;
        }
        .testimonial-card {
          min-width: 85%;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .testimonials-scroll {
            display: grid !important;
            padding: 0;
            overflow: visible;
          }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
          .testimonial-card {
            min-width: unset;
          }
        }
      `}</style>
    </section>
  );
}
