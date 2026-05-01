import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search as SearchIcon, 
  Heart, 
  User, 
  ArrowLeft, 
  Star, 
  ArrowRight,
  X,
  Trash2,
  Settings,
  Check,
  Bell,
  Palette,
  Pencil
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { Outfit, Screen } from '../types';
import { PAGE_TRANSITION, ScreenHeader, FakeAdBanner } from './Common';

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
      <div className="px-6 md:px-12 lg:px-24 mt-8 xl:max-w-7xl xl:mx-auto">
        <FakeAdBanner type="casual" />
      </div>
    </motion.main>
  );
}

// --- Wishlist / Moodboard Screen ---
export function WishlistScreen({ onNavigate }: { onNavigate: (s: any, d?: any) => void }) {
  const [favourites, setFavourites] = useState<Outfit[]>(() => {
    try { return JSON.parse(localStorage.getItem('cinestyle_favourites') || '[]'); } 
    catch { return []; }
  });

  const remove = (id: string) => {
    const updated = favourites.filter(o => o.id !== id);
    setFavourites(updated);
    localStorage.setItem('cinestyle_favourites', JSON.stringify(updated));
  };

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="My Moodboard" />
      {favourites.length === 0 ? (
        <div className="px-6 md:px-12 lg:px-24 py-20 text-center xl:max-w-7xl xl:mx-auto">
          <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary/40" />
          </div>
          <h2 className="text-xl font-bold mb-2">Your Moodboard is Empty</h2>
          <p className="text-on-surface-variant text-sm mb-8">Tap the ♥ on any outfit to save it here.</p>
          <button onClick={() => onNavigate('home')} className="px-8 py-3 bg-primary text-on-primary-container rounded-full font-bold">Explore Now</button>
        </div>
      ) : (
        <div className="px-6 md:px-12 lg:px-24 pt-4 xl:max-w-7xl xl:mx-auto">
          <p className="text-sm text-on-surface-variant mb-6">{favourites.length} saved look{favourites.length > 1 ? 's' : ''}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favourites.map(outfit => (
              <div key={outfit.id} className="group relative cursor-pointer" onClick={() => onNavigate('product-detail', outfit)}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-2">
                  <img src={outfit.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <button
                  onClick={e => { e.stopPropagation(); remove(outfit.id); }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                >
                  <Trash2 className="w-3.5 h-3.5 text-white" />
                </button>
                <h4 className="text-sm font-semibold truncate">{outfit.name}</h4>
                <p className="text-xs text-primary font-bold">{outfit.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="px-6 md:px-12 lg:px-24 mt-8 xl:max-w-7xl xl:mx-auto">
        <FakeAdBanner type="tech" />
      </div>
    </motion.main>
  );
}

// --- Style Preferences Modal ---
const STYLE_TAGS = ['Minimalist', 'Streetwear', 'Formal', 'Vintage', 'Bohemian', 'Athleisure', 'Gothic', 'Luxury', 'Casual', 'Cosplay', 'Western', 'Y2K'];

function StylePreferencesModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('cinestyle_style_prefs') || '[]'); }
    catch { return []; }
  });

  const toggle = (tag: string) => {
    setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const save = () => {
    localStorage.setItem('cinestyle_style_prefs', JSON.stringify(selected));
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-surface-container rounded-2xl p-6 w-full max-w-md shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">Style Preferences</h3>
          </div>
          <button onClick={onClose}><X className="w-5 h-5 text-on-surface-variant" /></button>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">Select the styles that match your vibe:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {STYLE_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => toggle(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                selected.includes(tag)
                  ? 'bg-primary text-on-primary-container border-primary'
                  : 'bg-surface-container-high border-outline-variant/20 text-on-surface-variant hover:border-primary/40'
              }`}
            >
              {selected.includes(tag) && <Check className="w-3 h-3 inline mr-1" />}
              {tag}
            </button>
          ))}
        </div>
        <button onClick={save} className="w-full py-3.5 rounded-xl bg-primary text-on-primary-container font-bold text-sm">
          Save Preferences
        </button>
      </motion.div>
    </motion.div>
  );
}

// --- Account Settings Modal ---
function AccountSettingsModal({ user, onClose }: { user: SupabaseUser | null, onClose: () => void }) {
  const [name, setName] = useState(user?.user_metadata?.full_name || user?.email?.split('@')[0] || '');
  const [notifications, setNotifications] = useState(() => localStorage.getItem('cinestyle_notifs') !== 'false');
  const [saved, setSaved] = useState(false);

  const save = () => {
    localStorage.setItem('cinestyle_notifs', String(notifications));
    setSaved(true);
    setTimeout(onClose, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-surface-container rounded-2xl p-6 w-full max-w-md shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {saved ? (
          <div className="text-center py-8">
            <Check className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
            <p className="font-bold text-lg">Settings Saved!</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Account Settings</h3>
              </div>
              <button onClick={onClose}><X className="w-5 h-5 text-on-surface-variant" /></button>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-bold block mb-1.5">Display Name</label>
                <div className="flex items-center gap-3 bg-surface-container-high rounded-xl px-4 py-3 border border-outline-variant/20">
                  <Pencil className="w-4 h-4 text-primary shrink-0" />
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="bg-transparent outline-none text-on-surface text-sm w-full"
                    placeholder="Your display name"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-bold block mb-1.5">Email</label>
                <div className="flex items-center gap-3 bg-surface-container-high rounded-xl px-4 py-3 border border-outline-variant/20 opacity-60">
                  <User className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-on-surface-variant">{user?.email || 'Not logged in'}</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-xl border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Style Notifications</span>
                </div>
                <button
                  onClick={() => setNotifications(n => !n)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-primary' : 'bg-surface-container-highest'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifications ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>
            <button onClick={save} className="w-full py-3.5 rounded-xl bg-primary text-on-primary-container font-bold text-sm">
              Save Changes
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// --- Profile Screen ---
export function ProfileScreen({ user, onBack, onLogout, onNavigate }: { user: SupabaseUser | null, onBack: () => void, onLogout: () => void, onNavigate: (s: Screen) => void }) {
  const [activeModal, setActiveModal] = useState<'style' | 'account' | null>(null);

  const menuItems = [
    { icon: Heart,   label: 'My Moodboard',      action: () => onNavigate('wishlist') },
    { icon: Star,    label: 'Style Preferences',  action: () => setActiveModal('style') },
    { icon: Settings, label: 'Account Settings',  action: () => setActiveModal('account') },
  ];

  const isAdmin = user?.email === 'admin@cinestyle.com' || user?.email === 'mrcoder420@gmail.com' || user?.email === 'nikhilbhor201@gmail.com';

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <div className="relative h-48 md:h-72 lg:h-96 w-full">
        <img className="w-full h-full object-cover opacity-40" src="https://picsum.photos/seed/cinema/800/400" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <button onClick={onBack} className="absolute top-6 left-6 w-10 h-10 bg-surface/40 backdrop-blur-md rounded-full flex items-center justify-center"><ArrowLeft className="w-5 h-5" /></button>
      </div>
      <div className="px-6 -mt-12 flex flex-col items-center">
        <img src={user?.user_metadata?.avatar_url || `https://api.dicebear.com/8.x/initials/svg?seed=${user?.email}`} className="w-24 h-24 rounded-full border-4 border-surface shadow-xl mb-4" referrerPolicy="no-referrer" />
        <h2 className="text-2xl font-bold">{user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Guest'}</h2>
        <p className="text-primary text-xs font-bold tracking-widest mt-1">{user?.email || 'No email found'}</p>
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
          <button key={i} onClick={item.action} className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/5 hover:bg-surface-container transition-colors">
            <div className="flex items-center gap-4">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm">{item.label}</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-40" />
          </button>
        ))}
        <button onClick={onLogout} className="w-full mt-8 py-4 rounded-xl border border-red-500/20 text-red-400 font-bold text-sm uppercase tracking-widest hover:bg-red-500/10 transition-colors">Sign Out</button>
      </div>
      <div className="px-6 md:px-12 lg:px-24 mt-8 xl:max-w-7xl xl:mx-auto">
        <FakeAdBanner type="luxury" />
      </div>

      <AnimatePresence>
        {activeModal === 'style'   && <StylePreferencesModal onClose={() => setActiveModal(null)} />}
        {activeModal === 'account' && <AccountSettingsModal user={user} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </motion.main>
  );
}
