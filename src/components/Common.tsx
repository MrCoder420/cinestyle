import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const FakeAdBanner = ({ type = 'luxury' }: { type?: 'luxury' | 'casual' | 'tech' }) => {
  const ads = {
    luxury: {
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      title: "Elevate your style",
      desc: "Discover the new luxury collection. Premium fabrics, timeless design. Get 30% off today."
    },
    casual: {
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
      title: "Everyday Comfort",
      desc: "Refresh your daily wardrobe with our breathable, sustainable cotton series."
    },
    tech: {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      title: "Next-Gen Audio",
      desc: "Immerse yourself with cinematic sound. The new noise-canceling headphones are here."
    }
  };

  const ad = ads[type];

  return (
    <div className="w-full bg-surface-container my-8 rounded-xl overflow-hidden border border-outline-variant/20 relative group cursor-pointer hover:border-primary/50 transition-colors">
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-10">
        Sponsored
      </div>
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 aspect-[21/9] md:aspect-auto md:h-32 bg-surface-container-high overflow-hidden">
          <img src={ad.img} alt="Ad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="p-4 md:w-2/3 flex flex-col justify-center bg-surface-container-low relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <h4 className="text-primary font-bold text-lg mb-1 font-serif italic">{ad.title}</h4>
          <p className="text-on-surface-variant text-sm mb-3">{ad.desc}</p>
          <div className="text-xs font-bold text-primary flex items-center gap-1 uppercase tracking-widest mt-auto">
            Shop Now <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { type: 'spring', damping: 25, stiffness: 200 }
};

export const ScreenHeader = ({ 
  title, 
  onBack, 
  rightElement 
}: { 
  title: string, 
  onBack?: () => void, 
  rightElement?: React.ReactNode 
}) => (
  <header className="w-full top-0 sticky z-40 bg-surface/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-outline-variant/10">
    {onBack ? (
      <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:opacity-80 transition-opacity">
        <ArrowLeft className="w-5 h-5 text-primary" />
      </button>
    ) : <div className="w-10" />}
    <span className="font-serif text-xl font-bold tracking-tight text-primary italic">{title}</span>
    {rightElement ? rightElement : <div className="w-10" />}
  </header>
);

export const LoadingSpinner = () => (
  <div className="min-h-screen bg-surface flex items-center justify-center">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
    />
  </div>
);
