'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  subtotal: number;
  totalItems: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Demo data for "Q Store"
const DEMO_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'Q-Pod Pro Max',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    quantity: 1,
    category: 'Audio',
  },
  {
    id: '2',
    name: 'Stealth Watch Series 7',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    quantity: 2,
    category: 'Wearables',
  },
];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(DEMO_ITEMS);

  // Calculate totals
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product._id || item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          (item.id === product._id || item.id === product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        id: product._id || product.id, 
        name: product.name || product.title, 
        price: product.price, 
        image: product.image?.asset?.url || product.image || '', 
        quantity: 1,
        category: product.category?.title || product.category
      }];
    });
    setIsCartOpen(true); // Open cart when adding item
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        totalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
