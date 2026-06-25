import Redis from 'ioredis';

const DEFAULT_PIN = "memotek7073";

let redisClient = null;

function getRedisClient() {
  if (redisClient) return redisClient;

  // Look for REDIS_URL first, then fall back to Vercel KV URL variations
  const connectionString = process.env.REDIS_URL || 
                           process.env.KV_URL || 
                           process.env.STORAGE_URL;

  if (!connectionString) {
    const availableKeys = Object.keys(process.env).filter(k => 
      k.includes('URL') || k.includes('TOKEN') || k.includes('REDIS') || k.includes('KV') || k.includes('STORAGE')
    );
    throw new Error(`Missing REDIS_URL or KV_URL. Available keys: ${JSON.stringify(availableKeys)}`);
  }

  // Initialize standard TCP-based ioredis client
  redisClient = new Redis(connectionString);
  return redisClient;
}

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const envStatus = {
    REDIS_URL: !!process.env.REDIS_URL,
    KV_URL: !!process.env.KV_URL,
    STORAGE_URL: !!process.env.STORAGE_URL,
  };

  // GET handler: retrieve menu from Redis database
  if (req.method === 'GET') {
    try {
      const redis = getRedisClient();
      const rawData = await redis.get('memo_menu_data');
      const menuData = rawData ? JSON.parse(rawData) : null;
      return res.status(200).json({ menuData });
    } catch (error) {
      console.error('Redis GET error:', error);
      return res.status(500).json({ 
        error: `Failed to retrieve menu data: ${error.message}. Env status: ${JSON.stringify(envStatus)}` 
      });
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

      const redis = getRedisClient();
      await redis.set('memo_menu_data', JSON.stringify(menuData));
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Redis SET error:', error);
      return res.status(500).json({ 
        error: `Failed to save menu data to Redis: ${error.message}. Env status: ${JSON.stringify(envStatus)}` 
      });
    }
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
