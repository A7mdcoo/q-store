'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/mockData';

export default function FeaturedDeals() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section id="products" className="section" style={{ position: 'relative' }}>

      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)' }}>
          <div>
            <h2 className="h2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Featured <span className="text-accent-gradient">Deals</span>
            </h2>
            <p className="text-body mt-2">Handpicked premium tech just for you.</p>
          </div>
          
          <Link href="/products" className="desktop-view-all" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            transition: 'color var(--transition-fast)'
          }}>
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-md">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mobile-view-all" style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
          <Link href="/products" className="btn btn-secondary" style={{ width: '100%' }}>
            View All Deals
          </Link>
        </div>
      </div>

      <style jsx>{`
        .desktop-view-all {
          display: none !important;
        }
        @media (min-width: 768px) {
          .desktop-view-all {
            display: flex !important;
          }
          .mobile-view-all {
            display: none !important;
          }
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
