# CineStyle

CineStyle is an elite fashion aggregator and AI stylist platform that bridges the gap between cinematic fashion and real-world shopping. Users can explore trending outfits worn by their favorite characters from Hollywood and Bollywood movies, and directly purchase them via affiliate e-commerce links.

## Features
- **Dynamic Database**: Powered by Supabase (PostgreSQL), all movies, characters, and outfits are fetched in real-time.
- **Admin Dashboard**: Secure, role-based dashboard for managing the catalog (Add/Edit/Delete).
- **AI Fashion Stylist**: A dedicated backend server integrating Gemini 1.5 Flash to recommend outfits based on user queries.
- **Responsive Design**: Mobile-first architecture that seamlessly scales to cinematic layouts on 4K desktop monitors.
- **Supabase Authentication**: Secure Email & Password login for users and admins.

## Tech Stack
- **Frontend**: React (Vite), TailwindCSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express.js.
- **Database & Auth**: Supabase (PostgreSQL).
- **AI Integration**: Google Generative AI (Gemini).

## Quick Start

### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Setup environment variables in .env.local
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GEMINI_API_KEY=your_gemini_key

# Run the development server
npm run dev
```

### 2. Backend Setup (AI Stylist)
```bash
cd backend

# Install dependencies
npm install

# Setup environment variables in backend/.env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_key

# Run the backend server
node server.js
```

## Database Schema
The Supabase database consists of three main tables linked by Foreign Keys:
- `movies` (id, title, genre, industry, year, poster_url)
- `characters` (id, name, portrait_url, movie_id)
- `outfits` (id, name, category, price_str, image_url, ecommerce_link, character_id)

*Note: Initial data was seeded via the included `seed.cjs` script using the `@supabase/supabase-js` client.*
