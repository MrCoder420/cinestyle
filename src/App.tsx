import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search as SearchIcon, 
  Heart, 
  User, 
} from 'lucide-react';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from './firebase';
import { Movie, Character, Outfit, Screen } from './types';
import { LoadingSpinner } from './components/Common';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { SearchScreen, WishlistScreen, ProfileScreen } from './components/Screens';
import { MovieDetailScreen, CharacterDetailScreen, ProductDetailScreen } from './components/DetailScreens';

export default function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthReady(true);
      if (currentUser) {
        if (currentScreen === 'login') setCurrentScreen('home');
      } else {
        setCurrentScreen('login');
      }
    });
    return () => unsubscribe();
  }, [currentScreen]);

  const navigateTo = (screen: Screen, data?: any) => {
    if (screen === 'movie-detail') setSelectedMovie(data);
    if (screen === 'character-detail') setSelectedCharacter(data);
    if (screen === 'product-detail') setSelectedOutfit(data);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  if (!isAuthReady) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary/30">
      <AnimatePresence mode="wait">
        {currentScreen === 'login' && <LoginScreen onLogin={() => signInWithPopup(auth, googleProvider)} />}
        {currentScreen === 'home' && <HomeScreen user={user} onNavigate={navigateTo} />}
        {currentScreen === 'movie-detail' && selectedMovie && (
          <MovieDetailScreen movie={selectedMovie} onBack={() => navigateTo('home')} onSelectCharacter={(c) => navigateTo('character-detail', c)} />
        )}
        {currentScreen === 'character-detail' && selectedCharacter && (
          <CharacterDetailScreen character={selectedCharacter} onBack={() => navigateTo('movie-detail', selectedMovie)} onSelectOutfit={(o) => navigateTo('product-detail', o)} />
        )}
        {currentScreen === 'product-detail' && selectedOutfit && (
          <ProductDetailScreen outfit={selectedOutfit} onBack={() => navigateTo('character-detail', selectedCharacter)} />
        )}
        {currentScreen === 'search' && <SearchScreen onNavigate={navigateTo} />}
        {currentScreen === 'wishlist' && <WishlistScreen onNavigate={navigateTo} />}
        {currentScreen === 'profile' && <ProfileScreen user={user} onBack={() => navigateTo('home')} onLogout={() => signOut(auth)} />}
      </AnimatePresence>

      {currentScreen !== 'login' && (
        <nav className="fixed bottom-0 left-0 w-full z-50 px-6 pb-8 pt-4 bg-gradient-to-t from-surface via-surface to-transparent">
          <div className="max-w-md mx-auto glass-nav rounded-3xl p-2 flex justify-between items-center shadow-2xl border border-outline-variant/10">
            {[
              { id: 'home', icon: Home },
              { id: 'search', icon: SearchIcon },
              { id: 'wishlist', icon: Heart },
              { id: 'profile', icon: User },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => navigateTo(item.id as Screen)}
                className={`flex-1 flex flex-col items-center gap-1 py-2 transition-all ${
                  currentScreen === item.id ? 'text-primary scale-110' : 'text-on-surface-variant/60'
                }`}
              >
                <item.icon className={`w-6 h-6 ${currentScreen === item.id ? 'fill-primary/20' : ''}`} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{item.id}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
