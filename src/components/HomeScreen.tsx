import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, Search, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { useData } from '../context/DataContext';
import { Screen } from '../types';
import { PAGE_TRANSITION } from './Common';

interface HomeScreenProps {
  user: User | null;
  onNavigate: (s: any, d?: any) => void;
}

export function HomeScreen({ user, onNavigate }: HomeScreenProps) {
  const { movies, outfits } = useData();
  const filters = ['All', 'Trending', 'Bollywood', 'Hollywood', 'Classic Cinema', 'Red Carpet'];
  const [activeFilter, setActiveFilter] = useState('All');
  
  return (
    <motion.div {...PAGE_TRANSITION} className="pb-32">
      <header className="bg-surface sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-24 py-4 xl:max-w-7xl xl:mx-auto">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-primary cursor-pointer" />
          <h1 className="text-primary font-serif italic tracking-tighter text-3xl font-bold">CineStyle</h1>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => onNavigate('ai-stylist')} className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm hover:bg-primary/20 transition-colors border border-primary/20">
            <Sparkles className="w-4 h-4" /> <span className="hidden md:inline">AI Stylist</span>
          </button>
          <Search 
            className="w-6 h-6 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" 
            onClick={() => onNavigate('search')}
          />
          <Heart 
            className="w-6 h-6 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" 
            onClick={() => onNavigate('wishlist')}
          />
          <div 
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container cursor-pointer hover:border-primary transition-all"
            onClick={() => onNavigate('profile')}
          >
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src={user?.photoURL || "https://picsum.photos/seed/profile/200/200"}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 lg:px-24 pt-4 overflow-x-auto no-scrollbar flex gap-3 mb-8 xl:max-w-7xl xl:mx-auto">
        {filters.map((f) => (
          <button 
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
              activeFilter === f ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="mb-12 xl:max-w-7xl xl:mx-auto">
        <div className="px-6 md:px-12 lg:px-24 flex justify-between items-end mb-4">
          <h2 className="font-serif text-2xl text-on-surface font-bold tracking-tight">Trending</h2>
          <button onClick={() => onNavigate('search')} className="text-primary text-sm font-medium">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 lg:px-24 snap-x">
          {movies.map(movie => (
            <div key={movie.id} className="min-w-[180px] snap-start cursor-pointer active:scale-95 transition-transform" onClick={() => onNavigate('movie-detail', movie)}>
              <div className="aspect-[2/3] rounded-xl overflow-hidden mb-3 bg-surface-container">
                <img alt={movie.title} className="w-full h-full object-cover" src={movie.posterUrl} referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-sm font-semibold text-on-surface">{movie.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 xl:max-w-7xl xl:mx-auto">
        <h2 className="font-serif text-2xl text-on-surface font-bold tracking-tight mb-6">Trending Outfits</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {outfits.filter(o => activeFilter === 'All' || o.category.includes(activeFilter)).slice(0, 6).map((outfit, i) => (
            <div key={outfit.id} className={`flex flex-col gap-3 group cursor-pointer ${i % 2 === 1 ? 'mt-8' : ''}`} onClick={() => onNavigate('product-detail', outfit)}>
              <div className={`rounded-xl overflow-hidden bg-surface-container relative ${i % 2 === 0 ? 'h-[240px]' : 'h-[180px]'}`}>
                <img alt={outfit.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={outfit.imageUrl} referrerPolicy="no-referrer" />
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-2 rounded-full">
                  <ShoppingBag className="w-4 h-4 text-white" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-on-surface">{outfit.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
