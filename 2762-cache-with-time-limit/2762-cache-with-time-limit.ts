type TTLValue = {
    value: number;
    timer: ReturnType<typeof setTimeout>;
};

class TimeLimitedCache {
    cache = new Map<number, TTLValue>();

    set(key: number, value: number, duration: number): boolean {
        const _cache = this.cache.get(key);
        if (_cache) clearTimeout(_cache.timer);
        this.cache.set(key, {
            value,
            timer: setTimeout(() => this.cache.delete(key), duration),
        });
        return !!_cache;
    }

    get(key: number): number {
        const _cache = this.cache.get(key);
        return _cache ? _cache.value : -1;
    }

    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */