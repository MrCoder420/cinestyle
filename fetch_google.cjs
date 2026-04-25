const https = require('https');

const outfits = {
  'o1': 'Shah Rukh Khan DDLJ leather jacket train',
  'o2': 'Shah Rukh Khan DDLJ mustard sweater',
  'o3': 'Kajol DDLJ mustard salwar suit tujhe dekha to',
  'o4': 'Shahid Kapoor Kabir Singh blue hoodie',
  'o5': 'Shahid Kapoor Kabir Singh white kurta',
  'o6': 'Deepika Padukone Mastani lehenga',
  'o7': 'Ranveer Singh Bajirao dhoti',
  'o8': 'Aamir Khan Dil Chahta Hai printed shirt',
  'o9': 'Akshaye Khanna Dil Chahta Hai linen kurta',
  'o10': 'Aamir Khan 3 Idiots Rancho shirt',
  'o11': 'Shah Rukh Khan Kuch Kuch Hota Hai basketball jersey',
  'o12': 'Kajol Kuch Kuch Hota Hai dungarees',
  'o13': 'Ranveer Singh Gully Boy hoodie streetwear',
  'o14': 'Kareena Kapoor Jab We Met pink suit',
  'o15': 'Madhuri Dixit Devdas red saree',
  'o16': 'Kangana Ranaut Queen floral kurti'
};

function searchGoogleImage(query) {
  return new Promise((resolve) => {
    const url = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(query);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/src="(https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=[^"]+)"/);
        if (match) {
          resolve(match[1]);
        } else {
          resolve('NOT_FOUND');
        }
      });
    }).on('error', () => resolve('ERROR'));
  });
}

async function run() {
  const results = {};
  for (const [key, query] of Object.entries(outfits)) {
    results[key] = await searchGoogleImage(query);
  }
  console.log(JSON.stringify(results, null, 2));
}
run();
