import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cinematic background" 
          className="w-full h-full object-cover opacity-60" 
          src="https://picsum.photos/seed/cinema-bg/1920/1080"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 cinematic-overlay"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h1 className="font-serif italic text-5xl font-bold tracking-tighter text-primary mb-2">CineStyle</h1>
            <p className="text-on-surface-variant text-sm tracking-wide">Dress like your favorite characters.</p>
          </div>

          <button 
            onClick={onLogin}
            className="w-full py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-bold tracking-wide shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
            </svg>
            <span>Continue with Google</span>
          </button>
        </motion.div>
      </div>
    </motion.main>
  );
}
