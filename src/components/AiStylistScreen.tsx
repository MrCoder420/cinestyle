import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, ArrowLeft, Loader2 } from 'lucide-react';
import { Outfit } from '../types';
import { PAGE_TRANSITION } from './Common';

export function AiStylistScreen({ onBack, onSelectOutfit }: { onBack: () => void, onSelectOutfit: (o: Outfit) => void }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Outfit[]>([]);
  const [error, setError] = useState('');

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    setRecommendations([]);

    try {
      const response = await fetch('http://localhost:3001/api/ai-stylist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error('AI Server failed to respond.');

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setRecommendations(data.recommendations || []);
    } catch (err: any) {
      setError(err.message || 'Something went wrong while asking the AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32 min-h-screen bg-surface">
      <div className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl px-6 md:px-12 lg:px-24 py-4 border-b border-outline-variant/10 xl:max-w-7xl xl:mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" onClick={onBack} />
          <h1 className="text-xl font-bold font-serif italic flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" /> AI Fashion Stylist
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 mt-8 xl:max-w-3xl xl:mx-auto">
        <div className="bg-surface-container-low rounded-3xl p-6 md:p-10 text-center border border-primary/20 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif italic">What are you looking for?</h2>
          <p className="text-on-surface-variant text-sm md:text-base mb-8">
            Tell me what vibe, event, or movie aesthetic you want, and I'll find the perfect outfits from our database.
          </p>

          <form onSubmit={handleAskAI} className="relative max-w-xl mx-auto">
            <input 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A dark, formal suit like John Wick..."
              className="w-full bg-surface py-4 pl-6 pr-16 rounded-full border border-outline-variant/20 focus:border-primary focus:outline-none shadow-lg transition-colors text-sm md:text-base"
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading || !prompt.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 -ml-1" />}
            </button>
          </form>
        </div>

        {error && (
          <div className="p-4 bg-error/10 text-error rounded-xl font-bold text-center text-sm mb-8">
            {error}
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 text-primary">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="font-bold animate-pulse">Analyzing catalog for the perfect match...</p>
          </div>
        )}

        {!loading && recommendations.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> AI Top Picks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recommendations.map((outfit) => (
                <div key={outfit.id} onClick={() => onSelectOutfit(outfit)} className="cursor-pointer group">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-2 relative">
                    <img src={outfit.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 right-2 bg-primary text-on-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full shadow-lg">Match</div>
                  </div>
                  <p className="font-bold text-sm truncate">{outfit.name}</p>
                  <p className="text-xs text-on-surface-variant truncate">{outfit.category}</p>
                  <p className="text-xs font-bold text-primary mt-1">{outfit.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {!loading && recommendations.length === 0 && prompt && !error && (
          <div className="text-center py-12 text-on-surface-variant">
            <p>I couldn't find any exact matches for that in our current catalog.</p>
            <p className="text-sm mt-2">Try searching for a different vibe or character!</p>
          </div>
        )}
      </div>
    </motion.main>
  );
}
