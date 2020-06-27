/// <reference lib="es5" />


/** Issue https://www.typescriptlang.org/play/#code/MYewdgzgLgBAtgTwMoFNYF4ZhQdxqqAHmgCcBLMAcwD4AKASgCgZGAzAVzGCjPBgAsAhhFoAPAFwxSFSjAA+WdnABGKEvRgBvZjF0k07EmHjI0AOiEjRTAL5A */
interface Set<T> {
  has<V>(value: V): (V & T) extends never ? false : boolean 
  has(value: any): boolean
}

/** Issue https://www.typescriptlang.org/play/#code/MYewdgzgLgBAtgTwMoFNYF4ZhQdxqqAHmgCcBLMAcwD4AKASgCgZGAzAVzGCjPBgAsAhhFoAPAFwxSFSjAA+WdnABGKEvRgBvZjF0k07EmHjI0AOiEjRTAL5A */
interface Map<K, V> {
  has<T>(value: T): (K & T) extends never ? false : boolean 
  has(key: any): boolean 
}
