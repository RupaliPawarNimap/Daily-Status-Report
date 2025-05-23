const express = require('express');
const app = express();
const port = 3000;

const locationData = {
  ip: "172.69.94.124",
  type: "ipv4",
  continent_code: "AS",
  continent_name: "Asia",
  country_code: "IN",
  country_name: "India",
  region_code: "MH",
  region_name: "Maharashtra",
  city: "Mumbai",
  zip: 400070,
  latitude: 19.076000213623047,
  longitude: 72.87770080566406,
  location: {},
  geoname_id: 1275339,
  capital: "New Delhi",
  languages: [
    {
      code: "hi",
      name: "Hindi",
      native: "हिन्दी"
    },
    {
      code: "en",
      name: "English",
      native: "English"
    }
  ],
  country_flag: "https://assets.ipstack.com/flags/in.svg",
  country_flag_emoji: "🇮🇳",
  country_flag_emoji_unicode: "U+1F1EE U+1F1F3",
  calling_code: "91",
  is_eu: false,
  time_zone: {
    id: "Asia/Kolkata",
    current_time: "2025-04-17T11:06:41+05:30",
    gmt_offset: 19800,
    code: "IST",
    is_daylight_saving: false
  },
  currency: {
    code: "INR",
    name: "Indian Rupee",
    plural: "Indian rupees",
    symbol: "Rs",
    symbol_native: "টকা"
  },
  connection: {
    asn: 13335,
    isp: "Cloudflare"
  },
  security: {
    is_proxy: false,
    proxy_type: null,
    is_crawler: false,
    crawler_name: null,
    crawler_type: null,
    is_tor: false,
    threat_level: "low",
    threat_types: null
  }
};

app.get('/api/location', (req, res) => {
  res.json(locationData);
});

app.listen(port, () => {
  console.log(`🌐 API server running at http://localhost:${port}/api/location`);
});
