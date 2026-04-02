'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { products } from '@/lib/mockData';

export default function FlashSale() {
  const flashProducts = products.filter(p => p.isFlashSale).slice(0, 3);

  return (
    <section id="offers" className="section" style={{ position: 'relative' }}>

      {/* Background with slight red/orange tint to indicate urgency */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.05), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="grid md:grid-cols-4" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-2xl)' 
        }}>
          
          {/* Intro & Timer */}
          <div className="flex-col justify-center" style={{ gap: 'var(--spacing-lg)' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', marginBottom: '0.5rem' }}>
                <Zap size={24} className="animate-glow" style={{ borderRadius: '50%' }} />
                <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Flash Sale</span>
              </div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Hurry Up!</h2>
              <p className="text-body mb-lg" style={{ maxWidth: '300px', marginBottom: '2rem' }}>
                Deals end soon. Grab your favorite tech before it's gone for good.
              </p>
              
              <CountdownTimer />

              <Link href="/offers" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                View All Offers <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </motion.div>
          </div>

          {/* Products */}
          <div className="md:grid-cols-3 gap-md scroll-x md:scroll-grid" style={{
            gridColumn: 'span 3',
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'minmax(240px, 1fr)',
            overflowX: 'auto',
          }}>
            {flashProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <ProductCard product={product} />
                  {/* Stock Bar Area */}
                  <div style={{ marginTop: '1rem', padding: '0 0.5rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      fontSize: '0.7rem', 
                      marginBottom: '6px', 
                      color: 'var(--text-secondary)',
                      whiteSpace: 'nowrap',
                      gap: '4px'
                    }}>
                      <span>Available: <b>{(index * 3) + 5}</b></span>
                      <span>Sold: <b>{85 - (index * 15)}%</b></span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${85 - (index * 15)}%`, height: '100%', background: '#ef4444' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
       <style jsx>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, 1fr) !important;
            grid-auto-flow: row !important;
          }
        }
      `}</style>
    </section>
  );
}
