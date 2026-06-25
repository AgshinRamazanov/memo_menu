import { Redis } from '@upstash/redis';

// Initialize Upstash Redis REST client using environment variables
// Note: When running on Vercel, the client automatically handles these variables
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

const DEFAULT_PIN = "memotek7073";

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET handler: retrieve menu from Redis database
  if (req.method === 'GET') {
    try {
      const menuData = await redis.get('memo_menu_data');
      return res.status(200).json({ menuData: menuData || null });
    } catch (error) {
      console.error('Redis GET error:', error);
      return res.status(500).json({ error: 'Failed to retrieve menu data from Redis' });
    }
  }

  // POST handler: update menu in Redis database after validating the admin PIN
  if (req.method === 'POST') {
    try {
      const { pin, menuData } = req.body;
      const expectedPin = process.env.ADMIN_PIN || DEFAULT_PIN;

      if (pin !== expectedPin) {
        return res.status(401).json({ error: 'Invalid PIN code' });
      }

      if (!menuData || !menuData.categories || !menuData.items) {
        return res.status(400).json({ error: 'Invalid menu data structure' });
      }

      await redis.set('memo_menu_data', menuData);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Redis SET error:', error);
      return res.status(500).json({ error: 'Failed to save menu data to Redis' });
    }
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
