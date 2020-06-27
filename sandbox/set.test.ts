/** Issue https://www.typescriptlang.org/play/#code/MYewdgzgLgBAtgTwMoFNYF4ZhQdxqqAHmgCcBLMAcwD4AKASgCgZGAzAVzGCjPBgAsAhhFoAPAFwxSFSjAA+WdnABGKEvRgBvZjF0k07EmHjI0AOiEjRTAL5A */

const mySet = new Set<string|undefined>()
, mySet_Input = 1
, mySet_O1: false = mySet.has(mySet_Input)
, mySet_O2_1: boolean = mySet.has(mySet_Input as unknown)
//@ts-expect-error
, mySet_O2_2: false = mySet.has(mySet_Input as unknown)
//@ts-expect-error
, mySet_O2_3: true = mySet.has(mySet_Input as unknown)
