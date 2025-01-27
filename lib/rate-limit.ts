import { NextRequest } from 'next/server';
import { LRUCache } from 'lru-cache';

export interface RateLimitOptions {
  uniqueTokenPerInterval?: number;
  interval?: number;
}

export interface RateLimiter {
  check: (request: NextRequest, limit: number, token: string) => Promise<void>;
}

export function rateLimit(options?: RateLimitOptions): RateLimiter {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: async (request: NextRequest, limit: number, token: string) => {
      const ip = request.ip ?? '127.0.0.1';
      const tokenKey = `${token}:${ip}`;
      const tokenCount = (tokenCache.get(tokenKey) as number[]) || [0];
      
      if (tokenCount[0] === 0) {
        tokenCache.set(tokenKey, [1]);
      } else {
        tokenCount[0] += 1;
        
        if (tokenCount[0] > limit) {
          throw new Error('Rate limit exceeded');
        }
        
        tokenCache.set(tokenKey, tokenCount);
      }
    },
  };
} 