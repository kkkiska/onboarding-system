class LoginCache {
    constructor() {
        this.cache = new Set(); 
        this.cacheExpiration = 1 * 60 * 1000;
    }

    addToCache(email, password) {
        const cacheKey = `${email}:${password}`;
        this.cache.add(cacheKey); 

        setTimeout(() => {
            this.cache.delete(cacheKey); 
        }, this.cacheExpiration);
    }

    isCached(email, password) {
        const cacheKey = `${email}:${password}`;
        return this.cache.has(cacheKey);
    }
}

export default new LoginCache();