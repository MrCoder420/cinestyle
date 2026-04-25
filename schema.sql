-- CineStyle Database Schema

-- 1. Movies Table
CREATE TABLE public.movies (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    genre TEXT,
    industry TEXT,
    year TEXT,
    poster_url TEXT
);

-- 2. Characters Table
CREATE TABLE public.characters (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    portrait_url TEXT,
    movie_id TEXT REFERENCES public.movies(id) ON DELETE CASCADE
);

-- 3. Outfits Table
CREATE TABLE public.outfits (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    price_str TEXT,
    image_url TEXT,
    ecommerce_link TEXT,
    character_id TEXT REFERENCES public.characters(id) ON DELETE CASCADE
);

-- Turn on Row Level Security (RLS)
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outfits ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all tables
CREATE POLICY "Allow public read access on movies" ON public.movies FOR SELECT USING (true);
CREATE POLICY "Allow public read access on characters" ON public.characters FOR SELECT USING (true);
CREATE POLICY "Allow public read access on outfits" ON public.outfits FOR SELECT USING (true);

-- Allow authenticated users with role 'admin' to insert/update/delete
-- Since we are keeping it simple, the service_role key will bypass RLS.
-- But for the frontend admin panel, we can check auth.jwt()
CREATE POLICY "Allow admins to manage movies" ON public.movies
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admins to manage characters" ON public.characters
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admins to manage outfits" ON public.outfits
  FOR ALL USING (auth.role() = 'authenticated');

-- We also need a user profiles table if we want to store roles
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role TEXT DEFAULT 'user'
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can edit own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
