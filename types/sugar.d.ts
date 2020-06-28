/** Dictionary with `string` keys */
declare type Dict<V = unknown> = {[key: string]: V}

/** Empty object */
declare type Empty = Record<never, unknown>

/** Just `function` */
declare type Fn<A extends unknown[], R, T = unknown> = (this: T, ...parameters: A) => R
/** Monadic function */
declare type Monad<A, R> = (parameter: A) => R

declare type Maybe<T> = undefined | T

/** Include `null` and `undefined` to T */
declare type Nullable<T> = null | undefined | T
