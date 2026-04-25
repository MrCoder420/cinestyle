import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  Sparkles, 
  ShoppingCart,
  Plus,
  ShoppingBag,
  Heart
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Movie, Character, Outfit, Screen } from '../types';
import { PAGE_TRANSITION, ScreenHeader } from './Common';

export function MovieDetailScreen({ movie, onBack, onSelectCharacter }: { movie: Movie, onBack: () => void, onSelectCharacter: (c: Character) => void }) {
  const { characters: allCharacters } = useData();
  const characters = allCharacters.filter(c => c.movieId === movie.id);
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
      <div className="relative h-[450px] md:h-[500px] lg:h-[600px] w-full overflow-hidden xl:max-w-7xl xl:mx-auto xl:rounded-b-3xl">
        <img src={movie.posterUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 xl:p-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic mb-2">{movie.title}</h2>
          <p className="text-on-surface-variant md:text-lg">{movie.genre} • {movie.year}</p>
        </div>
      </div>
      <section className="px-6 md:px-12 lg:px-24 mt-8 xl:max-w-7xl xl:mx-auto">
        <h3 className="text-lg md:text-2xl font-bold mb-4">Cast & Wardrobe</h3>
        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-4">
          {characters.map(char => (
            <div key={char.id} onClick={() => onSelectCharacter(char)} className="min-w-[120px] md:min-w-[160px] lg:min-w-[180px] cursor-pointer group">
              <img src={char.portraitUrl} className="w-full aspect-square object-cover rounded-full mb-2 border-2 border-outline-variant/20 group-hover:border-primary transition-colors" referrerPolicy="no-referrer" />
              <p className="text-xs md:text-sm font-bold text-center">{char.name}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export function CharacterDetailScreen({ character, onBack, onSelectOutfit }: { character: Character, onBack: () => void, onSelectOutfit: (o: Outfit) => void }) {
  const { outfits: allOutfits } = useData();
  const outfits = allOutfits.filter(o => o.characterId === character.id);
  const [activeCategory, setActiveCategory] = useState('All Looks');

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Spotlight" onBack={onBack} />
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:max-w-7xl xl:mx-auto xl:rounded-b-3xl overflow-hidden">
        <img src={character.portraitUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute bottom-0 p-8 xl:p-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold italic">{character.name}</h2>
        </div>
      </div>
      <div className="px-6 md:px-12 lg:px-24 mt-8 xl:max-w-7xl xl:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
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

  // Parse a base price number from the string (e.g. "₹299 – ₹799" -> 799)
  const extractPrice = (priceStr: string) => {
    if (!priceStr || priceStr === 'N/A') return 1299;
    const matches = priceStr.match(/\d+(?:,\d+)?/g);
    if (matches && matches.length > 0) {
      return parseInt(matches[matches.length - 1].replace(',', ''), 10);
    }
    return 1299;
  };

  const basePrice = extractPrice(outfit.price);
  const formatPrice = (p: number) => `₹${p.toLocaleString('en-IN')}`;

  const vendors = [
    { id: 'amazon', name: 'Amazon', logo: '🛒', link: outfit.link || '#', price: outfit.price !== 'N/A' ? outfit.price : formatPrice(basePrice), inStock: true, primary: true },
    { id: 'flipkart', name: 'Flipkart', logo: '🛍️', link: outfit.link ? `${outfit.link}#flipkart` : '#', price: formatPrice(Math.round(basePrice * 0.95)), inStock: true, primary: false },
    { id: 'myntra', name: 'Myntra', logo: '🏷️', link: outfit.link ? `${outfit.link}#myntra` : '#', price: formatPrice(Math.round(basePrice * 1.1)), inStock: true, primary: false },
    { id: 'asos', name: 'ASOS', logo: '✨', link: '#', price: formatPrice(Math.round(basePrice * 1.3)), inStock: false, primary: false },
  ];

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32">
      <ScreenHeader title="Ensemble" onBack={onBack} />
      <div className="px-6 md:px-12 lg:px-24 pt-4 md:flex md:gap-12 md:items-start lg:max-w-6xl lg:mx-auto">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container mb-6 md:mb-0 md:w-1/2 lg:w-1/3 shrink-0 relative">
          <img src={outfit.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-primary hover:text-on-primary transition-colors" onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }}>
             {added ? <Check className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/3 md:pt-8">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-2">{outfit.category}</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">{outfit.name}</h2>
          
          <h3 className="text-xl font-bold mb-4">Where to Buy</h3>
          <div className="space-y-3">
            {vendors.map(vendor => (
              <a 
                key={vendor.id}
                href={vendor.inStock ? vendor.link : undefined}
                target={vendor.inStock ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  vendor.inStock 
                    ? vendor.primary 
                      ? 'border-primary/50 bg-primary/10 hover:border-primary hover:scale-[1.02]' 
                      : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50 hover:bg-surface-container' 
                    : 'border-outline-variant/10 bg-surface-container-highest opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl grayscale">{vendor.logo}</span>
                  <div>
                    <span className="font-bold block">{vendor.name}</span>
                    {vendor.primary && <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Original Match</span>}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="font-bold text-lg block">{vendor.price}</span>
                    {!vendor.inStock && <span className="text-xs font-bold text-error">Out of Stock</span>}
                  </div>
                  {vendor.inStock && (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${vendor.primary ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface'}`}>
                      <ShoppingCart className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
