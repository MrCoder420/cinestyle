require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://sxqaokenqupmggosbyhr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWFva2VucXVwbWdnb3NieWhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzA2MTkwNywiZXhwIjoyMDkyNjM3OTA3fQ.b0ejBSxIE7SPWjmzqoIqCc2Jw6mnnV4-qWkJYpGjPek';

const supabase = createClient(supabaseUrl, supabaseKey);

async function trimMovies() {
  console.log('Fetching all movies...');
  const { data: movies, error } = await supabase.from('movies').select('id');
  
  if (error) {
    console.error('Error fetching movies:', error);
    return;
  }

  if (movies.length <= 5) {
    console.log(`Only ${movies.length} movies exist. Nothing to delete.`);
    return;
  }

  // Keep the first 5 movies
  const moviesToKeep = movies.slice(0, 5).map(m => m.id);
  
  console.log(`Keeping ${moviesToKeep.length} movies.`);
  console.log('Deleting all other movies...');

  // Delete all movies whose ID is not in the keep list
  const { error: deleteError } = await supabase
    .from('movies')
    .delete()
    .not('id', 'in', `(${moviesToKeep.join(',')})`);

  if (deleteError) {
    console.error('Error deleting movies:', deleteError);
  } else {
    console.log('✅ Successfully deleted the other movies! (Characters and outfits were also deleted automatically due to ON DELETE CASCADE).');
  }
}

trimMovies();
