import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Movie, Character, Outfit } from '../types';

interface DataContextType {
  movies: Movie[];
  characters: Character[];
  outfits: Outfit[];
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType>({
  movies: [],
  characters: [],
  outfits: [],
  loading: true,
  error: null,
});

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [moviesRes, charsRes, outfitsRes] = await Promise.all([
          supabase.from('movies').select('*'),
          supabase.from('characters').select('*'),
          supabase.from('outfits').select('*')
        ]);

        if (moviesRes.error) throw moviesRes.error;
        if (charsRes.error) throw charsRes.error;
        if (outfitsRes.error) throw outfitsRes.error;

        // Map data to match our frontend types
        setMovies(moviesRes.data.map(m => ({
          id: m.id,
          title: m.title,
          genre: m.genre,
          year: m.year,
          posterUrl: m.poster_url
        })));

        setCharacters(charsRes.data.map(c => ({
          id: c.id,
          name: c.name,
          portraitUrl: c.portrait_url,
          movieId: c.movie_id
        })));

        setOutfits(outfitsRes.data.map(o => ({
          id: o.id,
          name: o.name,
          category: o.category,
          price: o.price_str,
          imageUrl: o.image_url,
          link: o.ecommerce_link,
          characterId: o.character_id
        })));

      } catch (err: any) {
        console.error('Error fetching Supabase data:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ movies, characters, outfits, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
