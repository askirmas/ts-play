/// <reference lib="es5" />

interface ObjectConstructor {
  keys<T extends ArrayLike<any>>(o: T): string[]
  keys<T extends {}>(o: T): (string & keyof T)[]
  entries<T extends {[k: string]: any}>(o: T): [string & keyof T, T[keyof T]][]
  /** Only from es2019 */
  // TODO fromEntries
}