import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 5 submissions per 10 minutes per ip.
const MAX = 5;
const WINDOW = "10 m";
const WINDOW_MS = 10 * 60 * 1000;

// durable limiter: only active when upstash env vars are set (add them in vercel).
// until then we fall back to an in-memory limiter, which is best-effort on
// serverless (state is per-instance and resets on cold start).
let durable: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  durable = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(MAX, WINDOW),
    prefix: "cta:contact",
  });
}

const hits = new Map<string, number[]>();
function memAllow(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length <= MAX;
}

export async function checkRateLimit(ip: string): Promise<boolean> {
  if (durable) {
    const { success } = await durable.limit(ip);
    return success;
  }
  return memAllow(ip);
}

export const rateLimitIsDurable = () => durable !== null;
