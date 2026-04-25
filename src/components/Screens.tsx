import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search as SearchIcon, 
  Heart, 
  User, 
  ArrowLeft, 
  ShoppingBag, 
  Star, 
  ArrowRight,
  X,
  Plus,
  Trash2,
  Share2,
  Check,
  Sparkles,
  ShoppingCart,
  Settings
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { Movie, Character, Outfit, Screen } from '../types';
import { PAGE_TRANSITION, ScreenHeader } from './Common';

// --- Search Screen ---
export function SearchScreen({ onNavigate }: { onNavigate: (s: any, d?: any) => void }) {
  const { outfits } = useData();
  const [query, setQuery] = useState('');
  const filteredOutfits = outfits.filter(o => 
    o.name.toLowerCase().includes(query.toLowerCase()) || 
    o.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <div className="sticky top-0 z-50 bg-surface px-6 md:px-12 lg:px-24 py-4 space-y-4 xl:max-w-7xl xl:mx-auto">
        <div className="flex items-center gap-3 bg-surface-container-highest rounded-2xl px-4 py-3 border border-outline-variant/10">
          <SearchIcon className="w-5 h-5 text-on-surface-variant" />
          <input 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search characters, movies, looks..." 
            className="bg-transparent border-none outline-none text-on-surface w-full text-sm"
          />
          {query && <X className="w-5 h-5 text-on-surface-variant cursor-pointer" onClick={() => setQuery('')} />}
        </div>
      </div>
      <div className="px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 xl:max-w-7xl xl:mx-auto">
        {filteredOutfits.map(outfit => (
          <div key={outfit.id} onClick={() => onNavigate('product-detail', outfit)} className="cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-2">
              <img src={outfit.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-sm font-semibold truncate">{outfit.name}</h4>
          </div>
        ))}
      </div>
    </motion.main>
  );
}

// --- Wishlist Screen ---
export function WishlistScreen({ onNavigate }: { onNavigate: (s: any, d?: any) => void }) {
  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Moodboard" />
      <div className="px-6 md:px-12 lg:px-24 py-8 md:py-24 text-center xl:max-w-7xl xl:mx-auto">
        <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-primary/40" />
        </div>
        <h2 className="text-xl font-bold mb-2">Your Moodboard is Empty</h2>
        <p className="text-on-surface-variant text-sm mb-8">Start saving your favorite cinematic looks.</p>
        <button onClick={() => onNavigate('home')} className="px-8 py-3 bg-primary text-on-primary-container rounded-full font-bold">Explore Now</button>
      </div>
    </motion.main>
  );
}

// --- Profile Screen ---
export function ProfileScreen({ user, onBack, onLogout, onNavigate }: { user: SupabaseUser | null, onBack: () => void, onLogout: () => void, onNavigate: (s: Screen) => void }) {
  const menuItems = [
    { icon: ShoppingBag, label: 'My Orders' },
    { icon: Heart, label: 'My Moodboard' },
    { icon: Star, label: 'Style Preferences' },
    { icon: User, label: 'Account Settings' },
  ];

  const isAdmin = !!user; // In a real app we'd check the user's role from the DB

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <div className="relative h-48 md:h-72 lg:h-96 w-full">
        <img className="w-full h-full object-cover opacity-40" src="https://picsum.photos/seed/cinema/800/400" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <button onClick={onBack} className="absolute top-6 left-6 w-10 h-10 bg-surface/40 backdrop-blur-md rounded-full flex items-center justify-center"><ArrowLeft className="w-5 h-5" /></button>
      </div>
      <div className="px-6 -mt-12 flex flex-col items-center">
        <img src={user?.photoURL || ""} className="w-24 h-24 rounded-full border-4 border-surface shadow-xl mb-4" referrerPolicy="no-referrer" />
        <h2 className="text-2xl font-bold">{user?.displayName || "Guest"}</h2>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mt-1">Cinephile Elite</p>
      </div>
      <div className="px-6 md:px-12 lg:px-24 mt-8 space-y-3 md:max-w-2xl md:mx-auto">
        {isAdmin && (
          <button onClick={() => onNavigate('admin')} className="w-full flex items-center justify-between p-4 mb-6 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors">
            <div className="flex items-center gap-4">
              <Settings className="w-5 h-5 text-primary" />
              <div className="text-left">
                <span className="font-bold text-sm text-primary block">Admin Dashboard</span>
                <span className="text-xs text-primary/70">Manage movies and outfits</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>
        )}
        
        {menuItems.map((item, i) => (
          <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/5 hover:bg-surface-container transition-colors">
            <div className="flex items-center gap-4">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm">{item.label}</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-20" />
          </button>
        ))}
        <button onClick={onLogout} className="w-full mt-8 py-4 rounded-xl border border-error/20 text-error font-bold text-sm uppercase tracking-widest hover:bg-error/10 transition-colors">Sign Out</button>
      </div>
    </motion.main>
  );
}
