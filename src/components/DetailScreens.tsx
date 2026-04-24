import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  ShoppingBag,
  ExternalLink,
  User,
} from 'lucide-react';
import { MOVIES, CHARACTERS, OUTFITS } from '../constants';
import { Movie, Character, Outfit } from '../types';
import { PAGE_TRANSITION, ScreenHeader } from './Common';

const STORE_COLORS: Record<string, string> = {
  'Myntra': 'bg-pink-500',
  'Amazon': 'bg-amber-500',
  'Ajio': 'bg-red-500',
  'Fabindia': 'bg-green-700',
  "Pernia's Pop-Up": 'bg-purple-600',
  'Nalli Silks': 'bg-orange-600',
  'Utsav Fashion': 'bg-indigo-500',
  'Spykar': 'bg-blue-600',
  'Decathlon': 'bg-blue-700',
  'The Souled Store': 'bg-gray-800',
  'Bewakoof': 'bg-yellow-600',
};

export function MovieDetailScreen({ movie, onBack, onSelectCharacter }: { movie: Movie, onBack: () => void, onSelectCharacter: (c: Character) => void }) {
  const characters = CHARACTERS.filter(c => c.movieId === movie.id);
  const [isShared, setIsShared] = useState(false);

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader 
        title="CineStyle" 
        onBack={onBack} 
        rightElement={
          <button onClick={() => { setIsShared(true); setTimeout(() => setIsShared(false), 2000); }} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest">
            {isShared ? <Check className="w-5 h-5 text-primary" /> : <Share2 className="w-5 h-5 text-primary" />}
          </button>
        } 
      />
      <div className="relative h-[450px] w-full overflow-hidden">
        <img src={movie.posterUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt={movie.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h2 className="text-4xl font-serif font-bold italic mb-2">{movie.title}</h2>
          <p className="text-on-surface-variant">{movie.genre} • {movie.year}</p>
        </div>
      </div>
      <section className="px-6 mt-8">
        <h3 className="text-lg font-bold mb-4">Cast & Wardrobe</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {characters.map(char => (
            <div key={char.id} onClick={() => onSelectCharacter(char)} className="min-w-[120px] cursor-pointer active:scale-95 transition-transform">
              <img src={char.portraitUrl} className="w-full aspect-square object-cover rounded-full mb-2 border-2 border-outline-variant/20" referrerPolicy="no-referrer" alt={char.name} />
              <p className="text-xs font-bold text-center">{char.name}</p>
              <p className="text-[10px] text-on-surface-variant text-center">{char.actor}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export function CharacterDetailScreen({ character, onBack, onSelectOutfit }: { character: Character, onBack: () => void, onSelectOutfit: (o: Outfit) => void }) {
  const outfits = OUTFITS.filter(o => o.characterId === character.id);

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Spotlight" onBack={onBack} />
      <div className="relative h-[400px]">
        <img src={character.portraitUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt={character.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute bottom-0 p-8">
          <h2 className="text-5xl font-serif font-bold italic">{character.name}</h2>
          <p className="text-on-surface-variant mt-1 flex items-center gap-2">
            <User className="w-4 h-4" /> {character.actor}
          </p>
        </div>
      </div>
      <div className="px-6 mt-8">
        <h3 className="text-lg font-bold mb-4">{outfits.length} Iconic Look{outfits.length !== 1 ? 's' : ''}</h3>
        <div className="grid grid-cols-2 gap-4">
          {outfits.map(outfit => (
            <div key={outfit.id} onClick={() => onSelectOutfit(outfit)} className="cursor-pointer group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-2">
                <img src={outfit.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" alt={outfit.name} />
              </div>
              <h4 className="text-sm font-bold">{outfit.name}</h4>
              <p className="text-xs text-primary font-semibold">{outfit.price}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

export function ProductDetailScreen({ outfit, onBack }: { outfit: Outfit, onBack: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader 
        title="Ensemble" 
        onBack={onBack}
        rightElement={
          <button onClick={handleShare} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest">
            {copied ? <Check className="w-5 h-5 text-primary" /> : <Share2 className="w-5 h-5 text-primary" />}
          </button>
        }
      />
      <div className="px-6 pt-4">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container mb-6">
          <img src={outfit.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt={outfit.name} />
        </div>

        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-serif font-bold flex-1 pr-4">{outfit.name}</h2>
          <span className="text-primary font-bold text-xl whitespace-nowrap">{outfit.price}</span>
        </div>

        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{outfit.description}</p>

        <div className="mb-3">
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-3 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Shop This Look
          </h3>
          <div className="flex flex-col gap-3">
            {outfit.buyLinks.map((link) => (
              <a
                key={link.store}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-white font-bold text-sm transition-opacity hover:opacity-90 active:opacity-75 ${STORE_COLORS[link.store] ?? 'bg-primary'}`}
              >
                <span>{link.store}</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
