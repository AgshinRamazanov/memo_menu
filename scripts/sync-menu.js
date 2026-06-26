import Redis from 'ioredis';
import { DEFAULT_MENU_DATA } from '../data.js';

// Load connection string from environment variables
const connectionString = process.env.REDIS_URL || 
                         process.env.KV_URL || 
                         process.env.STORAGE_URL;

if (!connectionString) {
  console.error("ERROR: No REDIS_URL or KV_URL found in environment variables!");
  process.exit(1);
}

async function sync() {
  console.log("Connecting to Redis...");
  const redis = new Redis(connectionString);
  try {
    console.log("Setting 'memo_menu_data' key with new default data...");
    await redis.set('memo_menu_data', JSON.stringify(DEFAULT_MENU_DATA));
    console.log("Successfully synchronized menu data to Redis!");
  } catch (err) {
    console.error("Redis operation failed:", err);
    process.exit(1);
  } finally {
    redis.disconnect();
  }
}

sync();
