'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/mockData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--bg-secondary)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        minWidth: '240px', // For horizontal scroll on mobile
      }}
    >
      {/* Badges */}
      <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {product.badge && (
          <span style={{
            background: product.badge === 'SALE' ? '#ef4444' : product.badge === 'HOT' ? 'var(--accent-primary)' : '#3b82f6',
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 800,
            padding: '4px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span style={{
            background: 'var(--bg-glass-strong)',
            backdropFilter: 'blur(4px)',
            color: 'var(--accent-primary)',
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '4px 8px',
            borderRadius: '4px',
            border: '1px solid var(--border-accent)'
          }}>
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Image Area - 1:1 Aspect Ratio strictly enforced */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-tertiary)'
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Quick View Overlay (Desktop only) */}
        <div 
          className="quick-view-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10, 10, 15, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            backdropFilter: isHovered ? 'blur(2px)' : 'none'
          }}
        >
          <button style={{
            background: 'var(--bg-glass-strong)',
            color: '#fff',
            border: '1px solid var(--border-light)',
            borderRadius: '50px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease'
          }}>
            <Eye size={16} /> Quick View
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.5rem' }}>
        <span className="text-small">{product.category}</span>
        <h3 style={{ 
          color: 'var(--text-primary)', 
          fontSize: '1.125rem', 
          fontWeight: 600,
          lineHeight: 1.3,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.name}
        </h3>
        
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            {product.originalPrice && (
              <div style={{ 
                color: 'var(--text-tertiary)', 
                textDecoration: 'line-through', 
                fontSize: '0.875rem',
                marginBottom: '2px'
              }}>
                ${product.originalPrice}
              </div>
            )}
            <div style={{ 
              color: 'var(--accent-primary)', 
              fontSize: '1.25rem', 
              fontWeight: 800,
              fontFamily: 'var(--font-heading)'
            }}>
              ${product.price}
            </div>
          </div>
          
          <button style={{
            background: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border-light)',
            transition: 'all 0.2s ease',
            boxShadow: isHovered ? '0 0 10px rgba(255,106,0,0.2)' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-primary)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--bg-tertiary)';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--border-light)';
          }}
          aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .quick-view-overlay {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
