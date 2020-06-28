/** Keeps shape of `T` and alternates value with @default undefined */
declare type Part<T, Alt = undefined> = { [P in keyof T]: Alt | T[P] }

/** Spawns `T` values with alterternative @default undefined */
declare type Party<T, Alt = undefined> = T | { [P in keyof T]: Alt }

/** Keeps literal shape of `T` and alternate  all primitive and array leaves @default undefined */
declare type PartDeep<T, Alt = undefined> = T | (
  T extends Dict
  ? { [P in keyof T]: PartDeep<T[P]>}
  : Alt
)
