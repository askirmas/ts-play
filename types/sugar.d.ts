/** Dictionary with `string` keys
 * @see Why not object https://www.typescriptlang.org/play?#code/C4TwDgpgBAIglgY2AJQDwGkoQB7AgOwBMBnKABQCcB7SC0dCEAGigBUoBeKAV3wGt8VAO74AfJyjIICKhUIYWrUQCgZ+YsCiFEKAPoaKcfAHMAXFD6MqAM1g60Bo8fE48RUo5NQA-FGAVuaHNrAEMAG2JoLn9A1Sp1TW0kZF18bgBbACMICnNLEBs7ZNQ0rJyXXAISKFLsih8-AKCoUIioxti1DS17VOI8q1t4Ys9jAB9a8qxK9yhRiYy6hpjm1siJFeVlUEgi4ABJfAxpt2rKGhz6RkUJXgFhMQkAbwBtPigjKHQAXXNWAF84gkekhDvp-E4BgUhjpDqhRhVTh4IV5fCsoMFwutok0gd0kgd8KlFjkoYVhoSSiSKIiqqRJvU0U0MS0se1Nl1ErCiepzPMGSc6RZBns4fzqeImYEWWt2bjtuBoBSAMqodhcO6CETiLivPh8lHGX5sQGckHAZV9A2GEwLMr1VxC-LknTK5bMzFtDa4nZKnQAOTVt34Wseure5gZxoBeK5SH9VrmhrtS0ds2dMKQbqlqzZ3tiQA
*/
declare type Dict<V = unknown> = Record<string, V>

/** Empty object */
declare type Empty = Record<never, unknown>

/** Just `function` */
declare type Fn<A extends unknown[], R, T = unknown> = (this: T, ...parameters: A) => R
/** Monadic function */
declare type Monad<A, R> = (parameter: A) => R

declare type Maybe<T> = undefined | T

/** Include `null` and `undefined` to T */
declare type Nullable<T> = null | undefined | T
