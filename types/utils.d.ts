declare type stringy = string | number

// type PropertyKey === keyof any

declare type Stringable<T = unknown> = T & (
  {toString(): string}
  | {toString: string}
)
declare type stringish = stringy | Stringable

/**
 * Resolves promise
 * @see https://stackoverflow.com/a/49889856/9412937 
*/
declare type Unpromise<P> = P extends PromiseLike<infer T> ? Unpromise<T> : P

// Set-Like
declare type SettishObject<V extends string> = {[value in V]: value}
declare type Settish<T> = T[] | Set<T>

// Map-Like
declare type MappishArray<K extends number, V> = Map<K, V> | ArrayLike<V> & Record<K, V>
declare type Mappish<K extends string|symbol, V> = Map<K, V> | Record<K, V>

// LOGICAL

/** Keeps shape of `T` and alternates value with @default undefined */
declare type Part<T, Alt = undefined> = { [P in keyof T]: Alt | T[P] }

/** Spawns `T` values with alternative @default undefined */
declare type Party<T, Alt = undefined> = T | { [P in keyof T]: Alt }

/** Keeps literal shape of `T` and alternate  all primitive and array leaves @default undefined */
declare type PartDeep<T, Alt = undefined> = T | (
  T extends Dict
  ? { [P in keyof T]: PartDeep<T[P]>}
  : Alt
)

// Collection helpers

declare type valueOfSet<T extends Set<any>> = Parameters<T["add"]>[0]
declare type keyOfMap<T extends Map<any, any>> = Parameters<T["set"]>[0]
declare type valueOfMap<T extends Map<any, any>> = Parameters<T["set"]>[1]

// Swiss-stuff

declare type Shredded<T, S = undefined | null>
= T extends {}
? {[P in keyof T]?: S | Shredded<T[P], S>}
: S | T  

// Object or Array
declare type ValueOf<
  T extends AnyObject,
  K extends number|string = Extract<keyof T, number|string>
> = T[Extract<K, keyof T>]

// Tuple 
// based on https://stackoverflow.com/a/52490977/9412937
type _Tuple<
  T,
  Length extends number,
  Optional extends boolean,
  Accumulated extends unknown[]
> = Length extends Accumulated["length"]
  ? Accumulated
  : _Tuple<
    T,
    Length,
    Optional,
    Optional extends true
    ? [...Accumulated, T?]
    : [...Accumulated, T]
  >

// type TR = _Tuple<number, 1, false, []>
// type TO = _Tuple<number, 2, true, _Tuple<number, 1, false, []>>


/** if `MinLength` > `MaxLength` will be loop */
//@ts-expect-error
declare type Tuple<T, MinLength extends number, MaxLength extends number = MinLength> = _Tuple<T, MaxLength, true, _Tuple<T, MinLength, false, []>>

//@ts-expect-error
declare type Range<Start extends number, End extends number> = Tuple<undefined, Start, End>["length"]

/** @see https://stackoverflow.com/a/50375286/10325032 */
declare type UnionToIntersection<Union> = (
  Union extends any ? (argument: Union) => void : never
) extends (argument: infer Intersection) => void
? Intersection
: never;
