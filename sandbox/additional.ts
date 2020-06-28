type _Reserve<R extends string, T, E = never> = Record<string, T> & {[k in R]: E }
type Reserve<R extends string, T, E = never> = Record<string, T> & {[k in R]?: E }
type R1 = _Reserve<"a", string, never>
type R2 = _Reserve<"b"|"a", string, undefined>


function res1(source: R1) {
  const a: undefined = source.a
  , b: string = source.b
  , c: string = source.c
  return {a,b,c}
}

function res2(source: R2) {
  const a: undefined = source.a
  , b: undefined = source.b
  , c: string = source.c
  return {a, b, c}
}

type Additinioze<S, T0, E = never> = {
  [P in keyof S]: S[P] extends E ? T0 : S[P] 
}

type Additional<K extends string, T1, T2, E = never> = Additinioze<_Reserve<K, T2, E>, T1, E>

type check0 = Additinioze<_Reserve<"a", number, never>, string, never>
type check1 = Additional<"a", string, number>

function fn(source: check1) {
  const a: string = source.a
  //@ts-expect-error
  , a2: number = source.a
  , b: number = source.b
  //@ts-expect-error
  , b2: string = source.b
  , c: number = source.c
  return {a, a2, b, c}
} 

type check2 = Additional<"a"|"b", string, number>

function fn2(source: check2) {
  const a: string = source.a
  //@ts-expect-error
  , a2: number = source.a
  , b: string = source.b
  //@ts-expect-error
  , b2: number = source.b
  , c: number = source.c
  return {a, a2, b, b2, c}
} 
