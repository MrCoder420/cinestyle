import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import { supabase } from '../supabaseClient';

export function LoginScreen({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        // Depending on Supabase settings, email confirmation might be required
        alert('Signed up successfully! You can now log in.');
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onLoginSuccess();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10"
        >
          <div className="text-center mb-8">
            <h1 className="font-serif italic text-5xl font-bold tracking-tighter text-primary mb-2">CineStyle</h1>
            <p className="text-on-surface-variant text-sm tracking-wide">Dress like your favorite characters.</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/60" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full bg-surface-container-low border border-white/10 rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/60" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full bg-surface-container-low border border-white/10 rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {error && <p className="text-error text-xs font-bold text-center">{error}</p>}

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-bold tracking-wide shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-on-primary-container/30 border-t-on-primary-container rounded-full animate-spin"></div>
              ) : isSignUp ? (
                <><UserPlus className="w-5 h-5" /> Sign Up</>
              ) : (
                <><LogIn className="w-5 h-5" /> Sign In</>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
