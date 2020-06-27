/// <reference lib="es2017.object" />

interface ObjectConstructor {
  entries<T extends {[k: string]: any}>(o: T): [string & keyof T, T[keyof T]][]
}