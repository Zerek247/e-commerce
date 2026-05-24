'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type WishlistContextType = {
  ids: string[];
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
  remove: (productId: string) => void;
  clear: () => void;
  count: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
const STORAGE_KEY = 'glow-wishlist';

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (saved) setIds(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error(e);
    }
  }, [ids, mounted]);

  const toggle = (productId: string) => {
    setIds((prev) => (prev.includes(productId) ? prev.filter((x) => x !== productId) : [...prev, productId]));
  };

  const has = (productId: string) => ids.includes(productId);

  const remove = (productId: string) => {
    setIds((prev) => prev.filter((x) => x !== productId));
  };

  const clear = () => setIds([]);

  return (
    <WishlistContext.Provider value={{ ids, toggle, has, remove, clear, count: ids.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
