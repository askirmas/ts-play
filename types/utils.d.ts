/// <reference lib="es5" />
/// <reference path="./ontology.d.ts"/>

declare type stringy = string | number

// type PropertyKey === keyof any

declare type stringed = "null" | "undefined" | "false" | "true"

declare type Stringable<T = unknown> = T & (
  {toString(): string}
  | {toString: string}
)
declare type stringish = stringy | Stringable

// Fast

declare type Maybe<T> = undefined | T

/** Include null and undefined to T */
declare type Nullable<T> = null | undefined | T

/** Keeps shape of T with undefinable value */
declare type Part<T> = { [P in keyof T]: undefined | T[P] }

// functions
declare type Fn<A extends any[], R, T = unknown> = (this: T, ...parameters: A) => R

declare type Monad<A, R> = (parameter: A) => R

declare type Monadish<A extends PropertyKey, R> = Monad<A,R> | Record<A, R> 
declare type Monadic<A extends PropertyKey, R> = Nullable<Monad<A,R> | Record<A, R> | boolean>

// Set-Like
declare type SettishObject<V extends string> = {[value in V]: value}
declare type Settish<T> = T[] | Set<T>

// Map-Like
declare type MappishArray<K extends number, V> = Map<K, V> | ArrayLike<V> & Record<K, V>
declare type Mappish<K extends string|symbol, V> = Map<K, V> | Record<K, V>

// LOGICAL

// Generated with `new Array(Math.pow(2, 5) - 1).fill(0).map((_, i) => (i+1).toString(2).split("").reverse().map((n, i) => n === "1" && `T${i + 1}`).filter(Boolean).join("&")).join(" | ")`
declare type AnyOf<T1, T2, T3 = never, T4 = never, T5 = never> = T1 | T2 | T1&T2 | T3 | T1&T3 | T2&T3 | T1&T2&T3 | T4 | T1&T4 | T2&T4 | T1&T2&T4 | T3&T4 | T1&T3&T4 | T2&T3&T4 | T1&T2&T3&T4 | T5 | T1&T5 | T2&T5 | T1&T2&T5 | T3&T5 | T1&T3&T5 | T2&T3&T5 | T1&T2&T3&T5 | T4&T5 | T1&T4&T5 | T2&T4&T5 | T1&T2&T4&T5 | T3&T4&T5 | T1&T3&T4&T5 | T2&T3&T4&T5 | T1&T2&T3&T4&T5

// Collection helpers

declare type valueOfSet<T extends Set<any>> = Parameters<T["add"]>[0]
declare type keyOfMap<T extends Map<any, any>> = Parameters<T["set"]>[0]
declare type valueOfMap<T extends Map<any, any>> = Parameters<T["set"]>[1]

// Swiss-stuff

declare type Shredded<T, S = undefined | null>
= T extends {}
? {[P in keyof T]?: S | Shredded<T[P], S>}
: S | T  