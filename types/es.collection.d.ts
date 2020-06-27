/// <reference lib="es5" />

type onIntersection<T1,T2, T, F> = (T1 & T2) extends never ? F : T 

interface Set<T> {
  has<V>(value: V): onIntersection<T, V, boolean, false>
  delete<V>(value: onIntersection<T, V, V, never>): boolean
}
interface WeakSet<T> {
  has<V>(value: V): onIntersection<T, V, boolean, false>
  delete<V>(value: onIntersection<T, V, V, never>): boolean
}

interface Map<K, V> {
  has<T>(key: T): onIntersection<K, T, boolean, false>
  delete<T>(key: onIntersection<K, T, T, never>): boolean
  get<T>(key: onIntersection<K, T, T, never>): V | undefined;
}
interface WeakMap<K, V> {
  has<T>(key: T): onIntersection<K, T, boolean, false>
  delete<T>(key: onIntersection<K, T, T, never>): boolean
  get<T>(key: onIntersection<K, T, T, never>): V | undefined;
}
