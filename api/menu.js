import { Redis } from '@upstash/redis';

const DEFAULT_PIN = "memotek7073";

let redisClient = null;

function getRedisClient(envStatus) {
  if (redisClient) return redisClient;

  const url = process.env.KV_REST_API_URL || 
              process.env.STORAGE_REST_API_URL || 
              process.env.UPSTASH_REDIS_REST_URL || 
              process.env.STORAGE_UPSTASH_REDIS_REST_URL ||
              process.env.STORAGE_REST_URL;

  const token = process.env.KV_REST_API_TOKEN || 
                process.env.STORAGE_REST_API_TOKEN || 
                process.env.UPSTASH_REDIS_REST_TOKEN || 
                process.env.STORAGE_UPSTASH_REDIS_REST_TOKEN ||
                process.env.STORAGE_REST_TOKEN;

  if (!url || !token) {
    const availableKeys = Object.keys(process.env).filter(k => 
      k.includes('URL') || k.includes('TOKEN') || k.includes('REDIS') || k.includes('KV') || k.includes('STORAGE')
    );
    throw new Error(`Missing Redis URL or Token. Available keys: ${JSON.stringify(availableKeys)}`);
  }

  redisClient = new Redis({ url, token });
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
    KV_REST_API_URL: !!process.env.KV_REST_API_URL,
    STORAGE_REST_API_URL: !!process.env.STORAGE_REST_API_URL,
    UPSTASH_REDIS_REST_URL: !!process.env.UPSTASH_REDIS_REST_URL,
    STORAGE_UPSTASH_REDIS_REST_URL: !!process.env.STORAGE_UPSTASH_REDIS_REST_URL,
    KV_URL: !!process.env.KV_URL,
    STORAGE_URL: !!process.env.STORAGE_URL,
  };

  // GET handler: retrieve menu from Redis database
  if (req.method === 'GET') {
    try {
      const redis = getRedisClient(envStatus);
      const menuData = await redis.get('memo_menu_data');
      return res.status(200).json({ menuData: menuData || null });
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

      const redis = getRedisClient(envStatus);
      await redis.set('memo_menu_data', menuData);
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
