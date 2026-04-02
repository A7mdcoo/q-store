'use client';

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, CreditCard, HeadphonesIcon } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: 'Fast Delivery 🚚',
      description: 'Get your tech delivered within 24 hours in major cities.',
      color: '#3b82f6'
    },
    {
      id: 2,
      icon: <CreditCard size={32} strokeWidth={1.5} />,
      title: 'Best Prices 💰',
      description: 'Unbeatable deals and price match guarantee on all items.',
      color: 'var(--accent-primary)'
    },
    {
      id: 3,
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: 'Warranty Guaranteed 🛡️',
      description: '1-year official warranty on all smartphones and laptops.',
      color: '#10b981'
    },
    {
      id: 4,
      icon: <HeadphonesIcon size={32} strokeWidth={1.5} />,
      title: 'Trusted Store ⭐',
      description: 'Over 10,000+ satisfied customers and 24/7 dedicated support.',
      color: '#8b5cf6'
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h2 className="h2">Why Choose <span className="text-accent-gradient">Q Store</span></h2>
          <p className="text-body mt-2">The ultimate premium tech shopping experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{
                background: 'var(--bg-secondary)',
                padding: '2rem 1.5rem',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1rem',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: feature.color,
                  filter: 'blur(50px)',
                  opacity: 0.15,
                  borderRadius: '50%'
                }} />

                <div style={{
                  background: 'var(--bg-tertiary)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: feature.color,
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
