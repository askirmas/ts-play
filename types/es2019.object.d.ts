/// <reference lib="es2019.object" />

interface ObjectConstructor {
  fromEntries<T extends Iterable<[string, any]>>(entries: T):
  T extends Iterable<[infer K, infer V]> 
  ? {[k in K & string]: V} 
  : {[k: string]: any}

  fromEntries<T extends Iterable<[PropertyKey, any]>>(entries: T):
  T extends Iterable<[PropertyKey, infer V]> 
  ? {[k: string]: V} 
  : {[k: string]: any}

  fromEntries<T extends Iterable<any>>(entries: T):
  T extends Iterable<(infer V)[]> 
  ? {[k: string]: V} 
}