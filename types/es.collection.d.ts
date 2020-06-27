/// <reference lib="es5" />

interface Set<T> {
  has<V>(value: V): (V & T) extends never ? false : boolean 
  /** Fallback */
  has(value: any): boolean
}

interface Map<K, V> {
  has<T>(value: T): (K & T) extends never ? false : boolean 
  /** Fallback */
  has(key: any): boolean 
}
