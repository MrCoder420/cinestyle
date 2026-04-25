require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

// To run this, we need the Service Role key to bypass RLS, OR we can just use the Anon key since RLS isn't enabled yet or we allow anon inserts temporarily.
// Using the Service Role key provided by the user
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://sxqaokenqupmggosbyhr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWFva2VucXVwbWdnb3NieWhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzA2MTkwNywiZXhwIjoyMDkyNjM3OTA3fQ.b0ejBSxIE7SPWjmzqoIqCc2Jw6mnnV4-qWkJYpGjPek'; // Service role key

const supabase = createClient(supabaseUrl, supabaseKey);

// Import the data
// Since it's TS, we can't easily require it. We will parse it or recreate it here.
// Let's just read the JSON files we created earlier if they exist, or read constants.ts as text and parse it.
const fs = require('fs');

async function seed() {
  console.log('Starting seed process...');

  try {
    const constantsFile = fs.readFileSync('./src/constants.ts', 'utf-8');
    
    // Extract MOVIES array
    const moviesMatch = constantsFile.match(/export const MOVIES: Movie\[\] = (\[[\s\S]*?\]);/);
    const movies = eval(moviesMatch[1]);

    // Extract CHARACTERS array
    const charactersMatch = constantsFile.match(/export const CHARACTERS: Character\[\] = (\[[\s\S]*?\]);/);
    const characters = eval(charactersMatch[1]);

    // Extract OUTFITS array
    const outfitsMatch = constantsFile.match(/export const OUTFITS: Outfit\[\] = (\[[\s\S]*?\]);/);
    const outfits = eval(outfitsMatch[1]);

    console.log(`Found ${movies.length} movies, ${characters.length} characters, ${outfits.length} outfits.`);

    // 1. Insert Movies
    console.log('Inserting movies...');
    const mappedMovies = movies.map(m => ({
      id: m.id,
      title: m.title,
      genre: m.genre,
      industry: 'Hollywood', // Defaulting to Hollywood, we can update specific ones later
      year: m.year,
      poster_url: m.posterUrl
    }));
    
    const { error: mError } = await supabase.from('movies').upsert(mappedMovies);
    if (mError) throw mError;

    // 2. Insert Characters
    console.log('Inserting characters...');
    const mappedChars = characters.map(c => ({
      id: c.id,
      name: c.name,
      portrait_url: c.portraitUrl,
      movie_id: c.movieId
    }));

    const { error: cError } = await supabase.from('characters').upsert(mappedChars);
    if (cError) throw cError;

    // 3. Insert Outfits
    console.log('Inserting outfits...');
    const mappedOutfits = outfits.map(o => ({
      id: o.id,
      name: o.name,
      category: o.category,
      price_str: o.price,
      image_url: o.imageUrl,
      ecommerce_link: o.link || '',
      character_id: o.characterId
    }));

    const { error: oError } = await supabase.from('outfits').upsert(mappedOutfits);
    if (oError) throw oError;

    console.log('✅ Seeding complete! Database is populated.');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  }
}

seed();
