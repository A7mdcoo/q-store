'use client';

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/components/providers/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, subtotal, updateQuantity, removeFromCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsCartOpen]);

  // Lock scroll when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          key="cart-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 100,
          }}
        />
      )}
      {isCartOpen && (
          <motion.div
            key="cart-drawer"
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cart-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '450px',
              background: 'var(--bg-primary)',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.2)',
              zIndex: 101,
              display: 'flex',
              flexDirection: 'column',
              borderLeft: '1px solid var(--border-light)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'between',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShoppingBag size={24} color="var(--accent-primary)" />
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Your Cart</h2>
                    <span className="badge" style={{ fontSize: '0.7rem' }}>{cartItems.length} Items</span>
                </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{ 
                    marginLeft: 'auto',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              {cartItems.length === 0 ? (
                <div style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  opacity: 0.6,
                }}>
                  <ShoppingBag size={64} strokeWidth={1} />
                  <p>Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn btn-primary"
                    style={{ marginTop: '1rem' }}
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      background: 'var(--bg-secondary)',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      background: '#fff',
                    }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>{item.category}</p>
                          <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>{item.name}</h3>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            style={{ color: 'var(--text-tertiary)', padding: '4px' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                        <p style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>${item.price.toFixed(2)}</p>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: 'var(--bg-primary)',
                          padding: '4px 8px',
                          borderRadius: '20px',
                          border: '1px solid var(--border-light)',
                        }}>
                          <button onClick={() => updateQuantity(item.id, -1)} style={{ color: 'var(--text-primary)' }}><Minus size={14} /></button>
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} style={{ color: 'var(--text-primary)' }}><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div style={{
                padding: '1.5rem',
                borderTop: '1px solid var(--border-light)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>${subtotal.toFixed(2)}</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <Link href="/cart" onClick={() => setIsCartOpen(false)} className="btn btn-secondary" style={{ width: '100%', fontSize: '0.9rem' }}>
                        View Cart
                    </Link>
                    <button className="btn btn-primary" style={{ width: '100%', fontSize: '0.9rem', gap: '0.5rem' }}>
                        Checkout <ArrowRight size={16} />
                    </button>
                </div>
                
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                    Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
      )}
      
      <style jsx>{`
        @media (max-width: 767px) {
          .cart-drawer {
            max-width: 100% !important;
            border-left: none !important;
            border-top: 1px solid var(--border-light);
            border-radius: 24px 24px 0 0;
            height: 90vh !important;
            top: auto !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
