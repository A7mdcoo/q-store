'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/lib/mockData';
import { Smartphone, Headphones, Watch, Laptop, Tablet, Cable } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const iconMap: Record<string, React.ReactNode> = {
  'Smartphones': <Smartphone size={28} strokeWidth={1.5} />,
  'Audio': <Headphones size={28} strokeWidth={1.5} />,
  'Wearables': <Watch size={28} strokeWidth={1.5} />,
  'Laptops': <Laptop size={28} strokeWidth={1.5} />,
  'Tablets': <Tablet size={28} strokeWidth={1.5} />,
  'Accessories': <Cable size={28} strokeWidth={1.5} />,
};

export default function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const sys = useRef({
    isPaused: false,
    isDragging: false,
    startX: 0,
    scrollStart: 0,
    currentFloat: 0,
  });

  useEffect(() => {
    let animationId: number;
    const container = scrollRef.current;
    if (!container) return;

    // Use a high number of copies to ensure it always overflows even on ultra-wide monitors
    const totalContentWidth = container.scrollWidth;
    const singleSectionWidth = totalContentWidth / 10; 
    
    // Start in a comfortable middle position
    sys.current.currentFloat = singleSectionWidth * 4;
    container.scrollLeft = sys.current.currentFloat;

    const scroller = () => {
      const state = sys.current;
      
      if (!state.isPaused && !state.isDragging) {
        state.currentFloat += 0.55; // Calibrated speed
        container.scrollLeft = state.currentFloat;
        
        // Endless loop logic: if we move past the 7th section, jump back to the 4th
        if (state.currentFloat >= singleSectionWidth * 7) {
          state.currentFloat -= singleSectionWidth * 3;
          container.scrollLeft = state.currentFloat;
        } 
        
        if (state.currentFloat <= singleSectionWidth * 2) {
           state.currentFloat += singleSectionWidth * 3;
           container.scrollLeft = state.currentFloat;
        }
      }

      
      animationId = requestAnimationFrame(scroller);
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(scroller);
    }, 200);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, []);

  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };


  const handleMouseDown = (e: React.MouseEvent) => {
    sys.current.isPaused = true;
    sys.current.isDragging = true;
    if (!scrollRef.current) return;
    sys.current.startX = e.pageX - scrollRef.current.offsetLeft;
    sys.current.scrollStart = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sys.current.isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - sys.current.startX) * 1.5;
    scrollRef.current.scrollLeft = sys.current.scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    sys.current.isDragging = false;
    sys.current.isPaused = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const handleTouchStart = () => {
    sys.current.isPaused = true;
  };

  const handleTouchEnd = () => {
    sys.current.isPaused = false;
  };

  const handleScroll = () => {
    // If the scroll happened manually (not by our animation), sync the float
    if (scrollRef.current && (sys.current.isPaused || sys.current.isDragging)) {
      sys.current.currentFloat = scrollRef.current.scrollLeft;
    }
  };





  // 10x duplication to ensure seamless infinite scroll
  const displayCategories = Array(10).fill(categories).flat();

  return (
    <section className="section" style={{ background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
      <div className="container" style={{ padding: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', padding: '0 var(--spacing-md)' }}>
          <h2 className="h2">Browse by <span className="text-accent-gradient">Category</span></h2>
          <p className="text-body mt-2">Find exactly what you are looking for.</p>
        </div>

        <div 
          ref={scrollRef}
          className="categories-container no-scrollbar" 
          onMouseEnter={() => { sys.current.isPaused = true; }}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          style={{
            cursor: 'grab',
            display: 'flex', 
            gap: 'var(--spacing-md)',
            overflowX: 'auto',
            padding: '1.5rem var(--spacing-md)',
            paddingBottom: '3rem',
            scrollbarWidth: 'none',
            scrollBehavior: 'auto',
            scrollSnapType: 'none',
            touchAction: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}



        >
          {displayCategories.map((category, index) => (
            <motion.div
              layout
              key={`${category.id}-${index}`}
              style={{ flex: '0 0 auto' }}
            >


              <Link href={`/category/${category.name.toLowerCase()}`} draggable={false} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                background: 'var(--bg-secondary)',
                padding: '1.5rem 1rem',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%',
                width: '160px',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                userSelect: 'none'
              }}
              className="category-card"
              >
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '60px',
                  height: '60px',
                  background: 'var(--accent-glow)',
                  filter: 'blur(30px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                  opacity: 0,
                  transition: 'opacity 0.4s ease'
                }} className="category-glow" />

                <div style={{
                  background: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, transparent 100%)',
                  color: 'var(--accent-primary)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,106,0,0.2)',
                  boxShadow: 'inset 0 0 20px rgba(255,106,0,0.05)',
                  transition: 'all 0.4s ease',
                  zIndex: 2
                }} className="category-icon">
                  {iconMap[category.name] || <Smartphone size={28} strokeWidth={1.5} />}
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', textAlign: 'center', zIndex: 2, color: 'var(--text-primary)' }}>
                  {category.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .categories-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .categories-container::-webkit-scrollbar {
          display: none;
        }

        .category-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .category-card:hover .category-glow {
          opacity: 1 !important;
        }
        .category-card:hover .category-icon {
          transform: scale(1.1);
          background: var(--accent-primary) !important;
          color: #fff !important;
          box-shadow: 0 0 20px var(--accent-glow) !important;
        }
      `}</style>
    </section>
  );
}
