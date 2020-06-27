export type Additional<K extends string, T1, T2> = {
  [P in K]: T1
  [k: string]: T2
}

const obj: Additional<"a", string, number> = {
  "a": "a",
  b: 0,
  c: "c"
}