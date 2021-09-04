/** Dictionary with `string` keys
 * @see Why not object https://www.typescriptlang.org/play?#code/C4TwDgpgBAIglgY2AJQDwGkoQB7AgOwBMBnKABQCcB7SC0dCEAGigBUoBeKAV3wGt8VAO74AfJyjIICKhUIYWrUQCgZ+YsCiFEKAPoaKcfAHMAXFD6MqAM1g60Bo8fE48RUo5NQA-FGAVuaHNrAEMAG2JoLn9A1Sp1TW0kZF18bgBbACMICnNLEBs7ZNQ0rJyXXAISKFLsih8-AKCoUIioxti1DS17VOI8q1t4Ys9jAB9a8qxK9yhRiYy6hpjm1siJFeVlUEgi4ABJfAxpt2rKGhz6RkUJXgFhMQkAbwBtPigjKHQAXXNWAF84gkekhDvp-E4BgUhjpDqhRhVTh4IV5fCsoMFwutok0gd0kgd8KlFjkoYVhoSSiSKIiqqRJvU0U0MS0se1Nl1ErCiepzPMGSc6RZBns4fzqeImYEWWt2bjtuBoBSAMqodhcO6CETiLivPh8lHGX5sQGckHAZV9A2GEwLMr1VxC-LknTK5bMzFtDa4nZKnQAOTVt34Wseure5gZxoBeK5SH9VrmhrtS0ds2dMKQbqlqzZ3tiQA
*/
declare type Dict<V = unknown, K extends string = string> = Record<K, V>

/** Empty object */ //TODO <never, never> ?
declare type EmptyObject = Record<never, unknown>
/** Empty array */
declare type EmptyArray = never[]
declare type AnyObject = Record<string, any>


/** Just `function` */
declare type Fn<A extends unknown[], R, T = unknown> = (this: T, ...parameters: A) => R
/** Monadic function */
declare type Monad<A, R> = (parameter: A) => R

declare type Maybe<T> = undefined | T

/** Include `null` and `undefined` to T */
declare type Nullable<T> = null | undefined | T

declare type AreEqualE<T1, T2> = Exclude<T1, T2> extends never ? Exclude<T2, T1> extends never ? true : false : false
declare type AreEqualD<T1, T2> = T1 extends T1&T2 ? T2 extends T1&T2 ? true : false : false
declare type AreEqualC<T1, T2> = T1|T2 extends T1 ? T1|T2 extends T2 ? true : false : false

//declare type Keyof<T> = T extends Record<infer K, unknown> ? K : never

// Magic
declare type IsTupleL<T extends readonly unknown[]> = number extends T["length"] ? false : true
declare type IsTupleI<T extends readonly unknown[]> = string extends Indexes<T> ? false : true


// TODO Proto = Array
declare type Indexes<T extends readonly unknown[], Proto = EmptyArray> = Exclude<keyof T, keyof Proto>
declare type OwnTypes<T extends readonly unknown[], Proto = Object> = Exclude<keyof T, keyof Proto>

declare type Ever<E, Def = never, V = E> = [E] extends [never] ? Def : V