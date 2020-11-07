export declare type OnCacheFetch<T> = (cache: MemoryCache<T>, indexes: string[]) => {};
export declare class MemoryCache<T> {
    lifeSeconds: number;
    cache: {
        [index: string]: {
            cached: number;
            object: T;
        };
    };
    fetch: OnCacheFetch<T>;
    constructor(fetch: OnCacheFetch<T>);
    get(index: string): T;
    set(index: string, object: T): void;
    purge(): void;
    ensure(indexes: string[]): Promise<void>;
}
