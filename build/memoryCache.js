"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCache = void 0;
class MemoryCache {
    constructor(fetch) {
        this.lifeSeconds = 60;
        this.cache = {};
        this.fetch = fetch;
    }
    get(index) {
        return this.cache[index].object;
    }
    set(index, object) {
        let milliSeconds = (new Date()).getTime();
        this.cache[index] = { cached: milliSeconds, object: object };
    }
    purge() {
        let milliSeconds = (new Date()).getTime();
        for (let key in this.cache) {
            let diff = milliSeconds - this.cache[key].cached;
            if (diff > this.lifeSeconds * 1000) {
                delete this.cache[key];
            }
        }
    }
    async ensure(indexes) {
        this.purge();
        let diff = indexes.filter((index) => !(index in this.cache));
        if (diff.length > 0) {
            await this.fetch(this, diff);
        }
    }
}
exports.MemoryCache = MemoryCache;
