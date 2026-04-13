import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

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
