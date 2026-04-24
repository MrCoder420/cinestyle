import { Movie, Character, Outfit } from './types';

export const MOVIES: Movie[] = [
  {
    id: 'm1',
    title: 'Dilwale Dulhania Le Jayenge',
    genre: 'Romantic Drama',
    year: '1995',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5b/DDLJ_poster.jpg',
  },
  {
    id: 'm2',
    title: 'Kabir Singh',
    genre: 'Romantic Drama',
    year: '2019',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Kabir_Singh_poster.jpg',
  },
  {
    id: 'm3',
    title: 'Bajirao Mastani',
    genre: 'Period Romance',
    year: '2015',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Bajirao_Mastani_poster.jpg',
  },
  {
    id: 'm4',
    title: 'Dil Chahta Hai',
    genre: 'Comedy Drama',
    year: '2001',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/2/20/Dil_Chahta_Hai.jpg',
  },
  {
    id: 'm5',
    title: '3 Idiots',
    genre: 'Comedy Drama',
    year: '2009',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg',
  },
  {
    id: 'm6',
    title: 'Kuch Kuch Hota Hai',
    genre: 'Romantic Drama',
    year: '1998',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Kuch_Kuch_Hota_Hai_film_poster.jpg/220px-Kuch_Kuch_Hota_Hai_film_poster.jpg',
  },
  {
    id: 'm7',
    title: 'Gully Boy',
    genre: 'Musical Drama',
    year: '2019',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Gully_Boy_poster.jpg',
  },
  {
    id: 'm8',
    title: 'Jab We Met',
    genre: 'Romantic Comedy',
    year: '2007',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/7/73/Jab_We_Met_film_poster.jpg',
  },
  {
    id: 'm9',
    title: 'Devdas',
    genre: 'Tragic Romance',
    year: '2002',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Devdas_film_poster.jpg',
  },
  {
    id: 'm10',
    title: 'Queen',
    genre: 'Drama',
    year: '2014',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Queen_2014_Hindi_film_poster.jpg',
  },
];

export const CHARACTERS: Character[] = [
  // DDLJ
  { id: 'c1', name: 'Raj Malhotra', actor: 'Shah Rukh Khan', movieId: 'm1', portraitUrl: 'https://picsum.photos/seed/raj-ddlj/400/400' },
  { id: 'c2', name: 'Simran Singh', actor: 'Kajol', movieId: 'm1', portraitUrl: 'https://picsum.photos/seed/simran-ddlj/400/400' },

  // Kabir Singh
  { id: 'c3', name: 'Kabir Singh', actor: 'Shahid Kapoor', movieId: 'm2', portraitUrl: 'https://picsum.photos/seed/kabir-singh/400/400' },
  { id: 'c4', name: 'Preeti Sikka', actor: 'Kiara Advani', movieId: 'm2', portraitUrl: 'https://picsum.photos/seed/preeti-kabir/400/400' },

  // Bajirao Mastani
  { id: 'c5', name: 'Mastani', actor: 'Deepika Padukone', movieId: 'm3', portraitUrl: 'https://picsum.photos/seed/mastani/400/400' },
  { id: 'c6', name: 'Bajirao', actor: 'Ranveer Singh', movieId: 'm3', portraitUrl: 'https://picsum.photos/seed/bajirao/400/400' },

  // Dil Chahta Hai
  { id: 'c7', name: 'Akash', actor: 'Aamir Khan', movieId: 'm4', portraitUrl: 'https://picsum.photos/seed/akash-dch/400/400' },
  { id: 'c8', name: 'Siddharth', actor: 'Akshaye Khanna', movieId: 'm4', portraitUrl: 'https://picsum.photos/seed/sidharth-dch/400/400' },

  // 3 Idiots
  { id: 'c9', name: 'Rancho (Phunsukh Wangdu)', actor: 'Aamir Khan', movieId: 'm5', portraitUrl: 'https://picsum.photos/seed/rancho/400/400' },
  { id: 'c10', name: 'Farhan Qureshi', actor: 'R. Madhavan', movieId: 'm5', portraitUrl: 'https://picsum.photos/seed/farhan-idiots/400/400' },

  // KKHH
  { id: 'c11', name: 'Rahul Khanna', actor: 'Shah Rukh Khan', movieId: 'm6', portraitUrl: 'https://picsum.photos/seed/rahul-kkhh/400/400' },
  { id: 'c12', name: 'Anjali', actor: 'Kajol', movieId: 'm6', portraitUrl: 'https://picsum.photos/seed/anjali-kkhh/400/400' },

  // Gully Boy
  { id: 'c13', name: 'Murad', actor: 'Ranveer Singh', movieId: 'm7', portraitUrl: 'https://picsum.photos/seed/murad-gully/400/400' },

  // Jab We Met
  { id: 'c14', name: 'Geet Dhillon', actor: 'Kareena Kapoor', movieId: 'm8', portraitUrl: 'https://picsum.photos/seed/geet-jwm/400/400' },
  { id: 'c15', name: 'Aditya Kashyap', actor: 'Shahid Kapoor', movieId: 'm8', portraitUrl: 'https://picsum.photos/seed/aditya-jwm/400/400' },

  // Devdas
  { id: 'c16', name: 'Chandramukhi', actor: 'Madhuri Dixit', movieId: 'm9', portraitUrl: 'https://picsum.photos/seed/chandra-devdas/400/400' },
  { id: 'c17', name: 'Paro', actor: 'Aishwarya Rai', movieId: 'm9', portraitUrl: 'https://picsum.photos/seed/paro-devdas/400/400' },

  // Queen
  { id: 'c18', name: 'Rani Mehra', actor: 'Kangana Ranaut', movieId: 'm10', portraitUrl: 'https://picsum.photos/seed/rani-queen/400/400' },
];

export const OUTFITS: Outfit[] = [
  // Raj Malhotra - DDLJ
  {
    id: 'o1',
    name: 'Raj\'s Iconic Leather Jacket',
    description: 'The brown bomber leather jacket worn by Raj in DDLJ\'s iconic train scene. A timeless piece of Bollywood fashion.',
    category: 'Bollywood',
    price: '₹3,499',
    imageUrl: 'https://picsum.photos/seed/raj-leather/600/800',
    characterId: 'c1',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/jackets?rawQuery=men+brown+leather+jacket' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+brown+leather+jacket+bollywood+style' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/men-leather-jackets' },
    ],
  },
  {
    id: 'o2',
    name: 'Raj\'s Mustard Sweater',
    description: 'The classic cable-knit mustard yellow sweater Raj wears in the Swiss Alps — pure 90s Bollywood aesthetic.',
    category: 'Bollywood',
    price: '₹1,299',
    imageUrl: 'https://picsum.photos/seed/raj-sweater/600/800',
    characterId: 'c1',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/sweaters?rawQuery=men+mustard+cable+knit+sweater' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+yellow+mustard+knit+sweater' },
    ],
  },

  // Simran - DDLJ
  {
    id: 'o3',
    name: 'Simran\'s Mustard Salwar Suit',
    description: 'The cheerful yellow salwar kameez Simran wears during the song "Tujhe Dekha To" — effortlessly feminine and graceful.',
    category: 'Bollywood',
    price: '₹2,199',
    imageUrl: 'https://picsum.photos/seed/simran-salwar/600/800',
    characterId: 'c2',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/salwar?rawQuery=women+yellow+salwar+kameez' },
      { store: 'Utsav Fashion', url: 'https://www.utsavfashion.com/salwar-kameez/yellow' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=women+yellow+salwar+suit' },
    ],
  },

  // Kabir Singh
  {
    id: 'o4',
    name: 'Kabir\'s Blue Hoodie',
    description: 'The iconic distressed blue hoodie worn by Kabir Singh throughout the film — a street-style staple.',
    category: 'Bollywood',
    price: '₹999',
    imageUrl: 'https://picsum.photos/seed/kabir-hoodie/600/800',
    characterId: 'c3',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/hoodies?rawQuery=men+blue+oversized+hoodie' },
      { store: 'Spykar', url: 'https://www.spykar.com/collections/hoodies' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+blue+distressed+hoodie+kabir+singh+style' },
    ],
  },
  {
    id: 'o5',
    name: 'Kabir\'s White Kurta',
    description: 'The plain white kurta worn by Kabir in emotional scenes — minimal, raw, and powerful.',
    category: 'Bollywood',
    price: '₹799',
    imageUrl: 'https://picsum.photos/seed/kabir-kurta/600/800',
    characterId: 'c3',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/kurtas?rawQuery=men+white+plain+kurta' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/mens-white-kurta' },
      { store: 'Fabindia', url: 'https://www.fabindia.com/men/kurtas/white' },
    ],
  },

  // Mastani - Bajirao Mastani
  {
    id: 'o6',
    name: 'Mastani\'s Royal Lehenga',
    description: 'Inspired by Mastani\'s grand lehenga from the "Deewani Mastani" sequence — regal, jewel-toned and heavily embroidered.',
    category: 'Bollywood',
    price: '₹8,999',
    imageUrl: 'https://picsum.photos/seed/mastani-lehenga/600/800',
    characterId: 'c5',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/lehenga-choli?rawQuery=royal+embroidered+lehenga+party+wear' },
      { store: 'Pernia\'s Pop-Up', url: 'https://www.perniaspopupshop.com/lehengas' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=royal+bridal+lehenga+embroidered+heavy+work' },
    ],
  },

  // Bajirao
  {
    id: 'o7',
    name: 'Bajirao\'s Warrior Dhoti',
    description: 'The bold Peshwai dhoti paired with a gold angvastram — a regal warrior look from Bajirao Mastani.',
    category: 'Bollywood',
    price: '₹2,499',
    imageUrl: 'https://picsum.photos/seed/bajirao-dhoti/600/800',
    characterId: 'c6',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/dhotis?rawQuery=men+traditional+dhoti+festive' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+maratha+dhoti+ethnic+wear' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/mens-dhoti' },
    ],
  },

  // Akash - Dil Chahta Hai
  {
    id: 'o8',
    name: 'Akash\'s Printed Short Shirt',
    description: 'The bold short-sleeve printed shirt Akash wears in Dil Chahta Hai — defining early 2000s Bollywood casual chic.',
    category: 'Bollywood',
    price: '₹899',
    imageUrl: 'https://picsum.photos/seed/akash-shirt/600/800',
    characterId: 'c7',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/shirts?rawQuery=men+printed+short+sleeve+casual+shirt' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/mens-printed-shirts' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+printed+casual+shirt+half+sleeve' },
    ],
  },

  // Siddharth - Dil Chahta Hai
  {
    id: 'o9',
    name: 'Siddharth\'s Linen Kurta',
    description: 'The minimalist linen cotton kurta worn by the brooding artist Siddharth — effortlessly intellectual.',
    category: 'Bollywood',
    price: '₹1,099',
    imageUrl: 'https://picsum.photos/seed/siddharth-kurta/600/800',
    characterId: 'c8',
    buyLinks: [
      { store: 'Fabindia', url: 'https://www.fabindia.com/men/kurtas/linen' },
      { store: 'Myntra', url: 'https://www.myntra.com/kurtas?rawQuery=men+linen+solid+kurta' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/mens-linen-kurta' },
    ],
  },

  // Rancho - 3 Idiots
  {
    id: 'o10',
    name: 'Rancho\'s ICE College Uniform',
    description: 'The classic white button-down college shirt with jeans combo — Rancho\'s simple genius look from 3 Idiots.',
    category: 'Bollywood',
    price: '₹599',
    imageUrl: 'https://picsum.photos/seed/rancho-shirt/600/800',
    characterId: 'c9',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/shirts?rawQuery=men+white+solid+casual+shirt' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+white+casual+shirt+college+style' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/mens-white-shirts' },
    ],
  },

  // Rahul KKHH
  {
    id: 'o11',
    name: 'Rahul\'s Sports Jersey',
    description: 'The sporty college basketball jersey Rahul wears in Kuch Kuch Hota Hai — the original 90s college look.',
    category: 'Bollywood',
    price: '₹799',
    imageUrl: 'https://picsum.photos/seed/rahul-jersey/600/800',
    characterId: 'c11',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/sports-jersey?rawQuery=men+basketball+jersey+sporty' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=men+sports+basketball+jersey+90s+style' },
      { store: 'Decathlon', url: 'https://www.decathlon.in/p/8394498/basketball/basketball-jersey' },
    ],
  },

  // Anjali KKHH
  {
    id: 'o12',
    name: 'Anjali\'s Dungarees & Headband',
    description: 'The classic tomboy look — denim dungarees and a solid headband from Anjali\'s iconic college avatar.',
    category: 'Bollywood',
    price: '₹1,499',
    imageUrl: 'https://picsum.photos/seed/anjali-dungaree/600/800',
    characterId: 'c12',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/dungarees?rawQuery=women+denim+dungaree+casual' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/womens-dungaree' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=women+denim+dungaree+90s+style' },
    ],
  },

  // Murad - Gully Boy
  {
    id: 'o13',
    name: 'Murad\'s Streetwear Fit',
    description: 'Graphic tee, baggy cargo pants and a snapback cap — Murad\'s raw Dharavi street style from Gully Boy.',
    category: 'Bollywood',
    price: '₹1,899',
    imageUrl: 'https://picsum.photos/seed/murad-street/600/800',
    characterId: 'c13',
    buyLinks: [
      { store: 'The Souled Store', url: 'https://www.thesouledstore.com/collections/urban-streetwear' },
      { store: 'Myntra', url: 'https://www.myntra.com/cargo-trousers?rawQuery=men+baggy+cargo+pants+streetwear' },
      { store: 'Bewakoof', url: 'https://www.bewakoof.com/mens-graphic-t-shirts' },
    ],
  },

  // Geet - Jab We Met
  {
    id: 'o14',
    name: 'Geet\'s Pink Salwar Suit',
    description: 'The bubbly pink salwar kameez worn by Geet in Jab We Met — joyful, colourful Punjabi girl energy.',
    category: 'Bollywood',
    price: '₹1,799',
    imageUrl: 'https://picsum.photos/seed/geet-pink/600/800',
    characterId: 'c14',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/salwar?rawQuery=women+pink+salwar+kameez+casual' },
      { store: 'Utsav Fashion', url: 'https://www.utsavfashion.com/salwar-kameez/pink' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=women+pink+punjabi+salwar+kameez' },
    ],
  },

  // Chandramukhi - Devdas
  {
    id: 'o15',
    name: 'Chandramukhi\'s Silk Saree',
    description: 'The rich red and gold silk saree Chandramukhi wears in Devdas — dramatic, graceful, and unforgettable.',
    category: 'Bollywood',
    price: '₹5,999',
    imageUrl: 'https://picsum.photos/seed/chandramukhi-saree/600/800',
    characterId: 'c16',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/sarees?rawQuery=women+red+silk+saree+wedding+heavy' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=women+red+silk+saree+gold+border' },
      { store: 'Nalli Silks', url: 'https://www.nalli.com/sarees/silk-sarees/red' },
    ],
  },

  // Rani - Queen
  {
    id: 'o16',
    name: 'Rani\'s Quirky Floral Kurti',
    description: 'The sweet, modest floral kurti Rani wears at the start of Queen — a small-town girl\'s charm in full bloom.',
    category: 'Bollywood',
    price: '₹699',
    imageUrl: 'https://picsum.photos/seed/rani-kurti/600/800',
    characterId: 'c18',
    buyLinks: [
      { store: 'Myntra', url: 'https://www.myntra.com/kurtis?rawQuery=women+floral+print+kurti+casual' },
      { store: 'Amazon', url: 'https://www.amazon.in/s?k=women+floral+kurti+casual+ethnic' },
      { store: 'Ajio', url: 'https://www.ajio.com/s/womens-floral-kurti' },
    ],
  },
];
