import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, MapPin, Star, Phone, MessageCircle, Instagram, X, Send, CheckCircle } from 'lucide-react';
import { PAGE_TRANSITION, ScreenHeader } from './Common';
import { Outfit } from '../types';

const BOUTIQUES = [
  {
    id: 'b1',
    name: 'Regal Threads Atelier',
    specialty: 'Period & Cinematic Costumes',
    rating: 4.9,
    reviews: 312,
    location: 'Bandra West, Mumbai',
    turnaround: '7–10 days',
    priceRange: '₹2,500 – ₹12,000',
    avatar: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80',
    badge: 'Top Pick',
    whatsapp: '+91 98200 11111',
    instagram: '@regalthreads_atelier',
    specialties: ['Leather Coats', 'Period Jackets', 'Custom Embroidery'],
  },
  {
    id: 'b2',
    name: 'Stitch & Screen Studio',
    specialty: 'Movie-Inspired Fashion',
    rating: 4.7,
    reviews: 185,
    location: 'Koregaon Park, Pune',
    turnaround: '5–7 days',
    priceRange: '₹1,800 – ₹8,500',
    avatar: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=200&q=80',
    badge: 'Fast Delivery',
    whatsapp: '+91 98900 22222',
    instagram: '@stitchandscreen',
    specialties: ['Shirts & Suits', 'Wizard Robes', 'Denim & Leather'],
  },
  {
    id: 'b3',
    name: 'The Costume Collective',
    specialty: 'Bollywood & Hollywood Replicas',
    rating: 4.8,
    reviews: 427,
    location: 'Indiranagar, Bengaluru',
    turnaround: '10–14 days',
    priceRange: '₹3,000 – ₹20,000',
    avatar: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=200&q=80',
    badge: 'Premium',
    whatsapp: '+91 97000 33333',
    instagram: '@costumecollective_in',
    specialties: ['Full Costume Sets', 'Luxury Fabrics', 'Screen-Accurate'],
  },
  {
    id: 'b4',
    name: 'FabForge Tailors',
    specialty: 'Contemporary Cinematic Style',
    rating: 4.6,
    reviews: 98,
    location: 'Connaught Place, Delhi',
    turnaround: '3–5 days',
    priceRange: '₹1,200 – ₹6,000',
    avatar: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=200&q=80',
    badge: 'Budget Friendly',
    whatsapp: '+91 99100 44444',
    instagram: '@fabforge_tailors',
    specialties: ['Casual Fits', 'Quick Alterations', 'Modern Street Style'],
  },
];

const badgeColors: Record<string, string> = {
  'Top Pick': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Fast Delivery': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Premium': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'Budget Friendly': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
};

function ShareModal({ boutique, outfit, onClose }: { boutique: typeof BOUTIQUES[0], outfit: Outfit | null, onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [note, setNote] = useState('');

  const message = outfit
    ? `Hi ${boutique.name}! I found this outfit on CineStyle that I'd love to have tailored:\n\n🎬 *${outfit.name}*\nCategory: ${outfit.category}\n\n${note ? `My note: ${note}\n\n` : ''}Could you give me a quote?`
    : `Hi ${boutique.name}! I'm interested in getting an outfit tailored. ${note}`;

  const whatsappUrl = `https://wa.me/${boutique.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  const handleSend = () => {
    window.open(whatsappUrl, '_blank');
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-surface-container rounded-2xl p-6 w-full max-w-md shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {sent ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Request Sent!</h3>
            <p className="text-on-surface-variant text-sm">Opening WhatsApp to connect with <span className="text-primary font-bold">{boutique.name}</span>.</p>
            <button onClick={onClose} className="mt-6 w-full py-3 rounded-xl bg-primary/10 text-primary font-bold text-sm">Done</button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-bold text-lg">{boutique.name}</h3>
                {outfit && <p className="text-sm text-on-surface-variant mt-0.5">Sharing: <span className="text-primary">{outfit.name}</span></p>}
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            {outfit && (
              <div className="flex gap-3 mb-5 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
                <img src={outfit.imageUrl} className="w-16 h-20 object-cover rounded-lg shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-sm">{outfit.name}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{outfit.category}</p>
                  <p className="text-xs text-primary font-bold mt-1">{outfit.price}</p>
                </div>
              </div>
            )}
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Add a note (size, preferred fabric, deadline...)"
              className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-3 text-sm text-on-surface resize-none h-24 focus:outline-none focus:border-primary/50 mb-4"
            />
            <button
              onClick={handleSend}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-colors text-white font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export function BoutiqueScreen({ onBack, outfit }: { onBack: () => void, outfit?: Outfit | null }) {
  const [selectedBoutique, setSelectedBoutique] = useState<typeof BOUTIQUES[0] | null>(null);

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Boutique Partners" onBack={onBack} />

      {/* Hero */}
      <div className="px-6 md:px-12 lg:px-24 py-6 xl:max-w-4xl xl:mx-auto">
        <div className="bg-gradient-to-br from-primary/20 to-primary-container/10 border border-primary/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Scissors className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Get it Tailored</h2>
              <p className="text-on-surface-variant text-xs">Trusted boutiques, cinematic precision</p>
            </div>
          </div>
          {outfit ? (
            <p className="text-sm text-on-surface-variant">
              You're sharing <span className="text-primary font-bold">"{outfit.name}"</span> — pick a boutique to send it to via WhatsApp!
            </p>
          ) : (
            <p className="text-sm text-on-surface-variant">Browse our verified boutique partners and get any cinematic outfit custom-tailored to your measurements.</p>
          )}
        </div>

        {/* Boutique Cards */}
        <div className="space-y-4">
          {BOUTIQUES.map(b => (
            <div key={b.id} className="bg-surface-container-low border border-outline-variant/20 rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
              <div className="p-5">
                <div className="flex gap-4 items-start mb-4">
                  <img src={b.avatar} alt={b.name} className="w-14 h-14 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base">{b.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColors[b.badge]}`}>{b.badge}</span>
                    </div>
                    <p className="text-on-surface-variant text-xs mt-0.5">{b.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold">{b.rating}</span>
                      <span className="text-xs text-on-surface-variant">({b.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-primary" />
                    <span>{b.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Scissors className="w-3.5 h-3.5 shrink-0 text-primary" />
                    <span>{b.turnaround}</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {b.specialties.map(s => (
                    <span key={s} className="text-[10px] bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full font-medium">{s}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-0.5">Price Range</p>
                    <p className="text-sm font-bold text-primary">{b.priceRange}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={`https://instagram.com/${b.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-pink-500/20 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSelectedBoutique(b)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors text-white font-bold text-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {outfit ? 'Share Outfit' : 'Contact'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBoutique && (
          <ShareModal boutique={selectedBoutique} outfit={outfit || null} onClose={() => setSelectedBoutique(null)} />
        )}
      </AnimatePresence>
    </motion.main>
  );
}
