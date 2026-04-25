require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/ai-stylist', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    // 1. Fetch some context from the database to feed to Gemini
    const { data: outfits, error: dbError } = await supabase
      .from('outfits')
      .select('id, name, category, price_str, ecommerce_link, characters(name, movies(title))');

    if (dbError) throw dbError;

    // Build a compact string representation of the catalog for the AI
    const catalogContext = outfits.map(o => 
      `ID: ${o.id} | Name: ${o.name} | Category: ${o.category} | Worn by: ${o.characters?.name} in ${o.characters?.movies?.title}`
    ).join('\n');

    // 2. Call Gemini API
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const systemPrompt = `You are CineStyle, an elite fashion assistant. Based on the user's request and the following clothing catalog, recommend the most suitable outfits. 
    You must ONLY recommend items that exist in the catalog context below. 
    Return your response as a JSON array of outfit IDs that best match the query. ONLY output valid JSON. No markdown ticks, no extra text.
    
    CATALOG:
    ${catalogContext}`;

    const result = await model.generateContent([
      systemPrompt,
      `User query: ${prompt}`
    ]);

    const responseText = result.response.text();
    console.log("Raw Gemini Response:", responseText);

    // Try to parse the JSON array of IDs
    const recommendedIds = JSON.parse(responseText.replace(/```json/g, '').replace(/```/g, '').trim());

    // 3. Return the full outfit objects that match the recommended IDs
    const recommendedOutfits = outfits.filter(o => recommendedIds.includes(o.id));

    res.json({ recommendations: recommendedOutfits });
  } catch (error) {
    console.error('AI Stylist Error:', error);
    res.status(500).json({ error: 'Failed to process AI request' });
  }
});

app.listen(PORT, () => {
  console.log(`CineStyle Backend running on http://localhost:${PORT}`);
});
