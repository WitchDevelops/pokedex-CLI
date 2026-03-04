export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    add<T>(key: string, val: T) {
        this.#cache.set(key, {
        createdAt: Date.now(),
        val,
    });
  }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        if (!entry) return undefined;
        return entry.val;   
    }
    // Delete the old entries after the specified interval
    #reap() {
        const now = Date.now();
        for (const [key, entry] of this.#cache.entries()) {
            if (now - entry.createdAt >= this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}