import { Movie, Character, Outfit } from './types';

export const MOVIES: Movie[] = [
  {
    id: 'm1',
    title: 'The Neon Veil',
    genre: 'Noir Thriller',
    year: '2024',
    posterUrl: 'https://picsum.photos/seed/neon-veil/600/900',
  },
  {
    id: 'm2',
    title: 'The Last Silk',
    genre: 'Mystery',
    year: '2023',
    posterUrl: 'https://picsum.photos/seed/last-silk/600/900',
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'c1',
    name: 'Elias Thorne',
    portraitUrl: 'https://picsum.photos/seed/elias/400/400',
    movieId: 'm1',
  },
  {
    id: 'c2',
    name: 'Sloane Vane',
    portraitUrl: 'https://picsum.photos/seed/sloane/400/400',
    movieId: 'm1',
  }
];

export const OUTFITS: Outfit[] = [
  {
    id: 'o1',
    name: 'Midnight Trench',
    category: 'Classic Noir',
    price: '₹12,499',
    imageUrl: 'https://picsum.photos/seed/trench/600/800',
    characterId: 'c1',
  },
  {
    id: 'o2',
    name: 'Camel Overcoat',
    category: 'Retro Chic',
    price: '₹12,499',
    imageUrl: 'https://picsum.photos/seed/overcoat/600/800',
    characterId: 'c1',
  },
  {
    id: 'o3',
    name: 'Velvet Gown',
    category: 'Gala Evening',
    price: '₹18,200',
    imageUrl: 'https://picsum.photos/seed/gown/600/800',
    characterId: 'c2',
  }
];
