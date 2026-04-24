export type Screen = 'login' | 'home' | 'movie-detail' | 'character-detail' | 'product-detail' | 'search' | 'wishlist' | 'profile';

export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: string;
  posterUrl: string;
}

export interface Character {
  id: string;
  name: string;
  actor: string;
  portraitUrl: string;
  movieId: string;
}

export interface Outfit {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  imageUrl: string;
  characterId: string;
  buyLinks: { store: string; url: string }[];
}
