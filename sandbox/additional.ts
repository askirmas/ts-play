type _Anti<R extends string, T, E = never> = Record<string, T> & {[k in R]: E }
type AntiRecord<R extends string, T, E = never> = Record<string, T> & {[k in R]?: E }
type _Anti2<R extends string, T, E = never> = Record<string, T> & {[k in R]: E }


type R1 = _Anti<"a", string, never>
type R2 = _Anti<"b"|"a", string, undefined>


function _anti_1(source: R1) {
  const a: undefined = source.a
  , b: string = source.b
  , c: string = source.c
  return {a,b,c}
}

function _anti_2(source: R2) {
  const a: undefined = source.a
  , b: undefined = source.b
  , c: string = source.c
  return {a, b, c}
}


type Additinioze<A, T0, E = never> = {
  [P in keyof A]: A[P] extends E ? T0 : A[P] 
}
type Additional<K extends string, T1, T2, E = never> = Additinioze<_Anti<K, T2, E>, T1, E>

type Add2Source = {items: number[], id: string}
type Add2_Additional = Additional<keyof Add2Source, Add2Source[keyof Add2Source], number>

type Additinioze2<A, S, E = never> = {
  [P in keyof A]: A[P] extends E ? S extends {[K in P]: infer X} ? X : A[P] : A[P] 
}
type Add22 = Additinioze2<_Anti<keyof Add2Source, number>, Add2Source>

function add2__2(source: Add22) {
  const {items, id, additional, additional2} = source
  return items[0] * additional * additional2 * id[0].length
}


function add2__1(source: Add2_Additional) {
  const {items, id, additional} = source
  return items[0] + additional
}


type check0 = Additinioze<_Anti<"a", number, never>, string, never>
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
