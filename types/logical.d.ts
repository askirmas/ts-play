// Generated with `new Array(Math.pow(2, 5) - 1).fill(0).map((_, i) => (i+1).toString(2).split("").reverse().map((n, i) => n === "1" && `T${i + 1}`).filter(Boolean).join("&")).join(" | ")`
/** An instance is valid if is valid against at least one of setted */
declare type anyOf<T1, T2, T3 = never, T4 = never, T5 = never> = T1 | T2 | T1&T2 | T3 | T1&T3 | T2&T3 | T1&T2&T3 | T4 | T1&T4 | T2&T4 | T1&T2&T4 | T3&T4 | T1&T3&T4 | T2&T3&T4 | T1&T2&T3&T4 | T5 | T1&T5 | T2&T5 | T1&T2&T5 | T3&T5 | T1&T3&T5 | T2&T3&T5 | T1&T2&T3&T5 | T4&T5 | T1&T4&T5 | T2&T4&T5 | T1&T2&T4&T5 | T3&T4&T5 | T1&T3&T4&T5 | T2&T3&T4&T5 | T1&T2&T3&T4&T5

/** Easier handle pattern than `T1 | T2` for defined keys */
declare type oneOf<T1, T2> = (
  T1 & Omit<{[K in keyof T2]?: never}, keyof T1>
) | (
  T2 & Omit<{[K in keyof T1]?: never}, keyof T2>
)

