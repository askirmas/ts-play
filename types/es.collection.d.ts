/// <reference lib="es5" />

type onIntersection<T1,T2, T, F> = (T1 & T2) extends never ? F : T 

interface Set<T> {
  has<V>(value: V): onIntersection<T, V, boolean, false>
  delete<V>(value: onIntersection<T, V, V, never>): boolean
}

interface Map<K, V> {
  has<T>(value: T): onIntersection<K, T, boolean, false>
  delete<T>(value: onIntersection<K, T, T, never>): boolean
}
