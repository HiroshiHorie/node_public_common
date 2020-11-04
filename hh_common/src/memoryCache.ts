/*
 * UNX
 */

export type OnCacheFetch<T> = (cache: MemoryCache<T>, indexes: string[]) => {}

export class MemoryCache<T> {

  public lifeSeconds: number = 60
  public cache: { [index: string]: { cached: number, object: T } } = {}
  public fetch: OnCacheFetch<T>

  constructor(fetch: OnCacheFetch<T>) {
    this.fetch = fetch
  }

  get(index: string): T {
    return this.cache[index].object
  }

  set(index: string, object: T) {
    let milliSeconds = (new Date()).getTime()
    this.cache[index] = { cached: milliSeconds, object: object }
  }

  purge() {
    let milliSeconds = (new Date()).getTime()

    for (let key in this.cache) {
      let diff = milliSeconds - this.cache[key].cached
      if (diff > this.lifeSeconds * 1000) {
        delete this.cache[key]
      }
    }
  }

  async ensure(indexes: string[]) {
    this.purge()
    let diff = indexes.filter((index) => !(index in this.cache))
    if (diff.length > 0) {
      await this.fetch(this, diff)
    }
  }
}
