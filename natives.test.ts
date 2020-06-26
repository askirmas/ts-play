const obj = {a: 1, b: 2}
, k = Object.keys(obj)
, kv = Object.keys([0, 1, 2])
, v = Object.values(obj)
, e: ArrayLike<[string, number]> = Object.entries(obj)
, clone = Object.fromEntries(e)
, x = JSON.parse("")
, str = JSON.stringify({"a": [1], "b": {"c": [0]}})
, reparsed = JSON.parse(str, myReviver) 

type MyJson = JsonPrimitive | Set<MyJson> | Map<string, MyJson>

function myReviver(_: any, v: JsonStructure<MyJson>) :MyJson {
  if (v === null || typeof v !== 'object')
    return v
  if (Array.isArray(v))
    return new Set(v)
  const e = Object.entries(v)
  return new Map(e)
}