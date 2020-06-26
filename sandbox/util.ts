type Excl1<K extends string, V1, V2> = ({
  [k: string]: V1
} & {
  [k in K]?: never
}) | {
  [k in K]: V2
}


type Excl3<K extends string, V1, V2> = {
  k: V2
  [k: string]: unknown 
}

type AnyOf<T1, T2> = T1 | T2 | T1 & T2

type Excl2<K extends string, V1, V2> = AnyOf<
  {[k: string]: V1|V2},
  {[k in K]: V2}
>

function check(source: Excl2<"a", number, string> | {a: number}) {
  const {a, b} = source
}
