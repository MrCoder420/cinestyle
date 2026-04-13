import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  Sparkles, 
  ShoppingCart,
  Plus,
  ShoppingBag
} from 'lucide-react';
import { MOVIES, CHARACTERS, OUTFITS } from '../constants';
import { Movie, Character, Outfit, Screen } from '../types';
import { PAGE_TRANSITION, ScreenHeader } from './Common';

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
        <img src={movie.posterUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h2 className="text-4xl font-serif font-bold italic mb-2">{movie.title}</h2>
          <p className="text-on-surface-variant">{movie.genre} • {movie.year}</p>
        </div>
      </div>
      <section className="px-6 mt-8">
        <h3 className="text-lg font-bold mb-4">Cast & Wardrobe</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {characters.map(char => (
            <div key={char.id} onClick={() => onSelectCharacter(char)} className="min-w-[120px] cursor-pointer">
              <img src={char.portraitUrl} className="w-full aspect-square object-cover rounded-full mb-2 border-2 border-outline-variant/20" referrerPolicy="no-referrer" />
              <p className="text-xs font-bold text-center">{char.name}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export function CharacterDetailScreen({ character, onBack, onSelectOutfit }: { character: Character, onBack: () => void, onSelectOutfit: (o: Outfit) => void }) {
  const outfits = OUTFITS.filter(o => o.characterId === character.id);
  const [activeCategory, setActiveCategory] = useState('All Looks');

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Spotlight" onBack={onBack} />
      <div className="relative h-[400px]">
        <img src={character.portraitUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute bottom-0 p-8">
          <h2 className="text-5xl font-serif font-bold italic">{character.name}</h2>
        </div>
      </div>
      <div className="px-6 mt-8 grid grid-cols-2 gap-4">
        {outfits.map(outfit => (
          <div key={outfit.id} onClick={() => onSelectOutfit(outfit)} className="cursor-pointer group">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-2">
              <img src={outfit.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-sm font-bold">{outfit.name}</h4>
          </div>
        ))}
      </div>
    </motion.main>
  );
}

export function ProductDetailScreen({ outfit, onBack }: { outfit: Outfit, onBack: () => void }) {
  const [added, setAdded] = useState(false);

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Ensemble" onBack={onBack} />
      <div className="px-6 pt-4">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container mb-6">
          <img src={outfit.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <h2 className="text-3xl font-serif font-bold mb-2">{outfit.name}</h2>
        <p className="text-primary font-bold text-xl mb-6">{outfit.price}</p>
        <button 
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }}
          className="w-full py-4 bg-primary text-on-primary-container rounded-full font-bold flex items-center justify-center gap-2"
        >
          {added ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </motion.main>
  );
}
