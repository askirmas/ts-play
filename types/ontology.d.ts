type JsonPrimitive = null|boolean|number|string
type Primitive = undefined|bigint|symbol|JsonPrimitive
type JsonStructure<T = any> = T[] | {[key: string]: T}

// Changing here to Structured makes Jsoned Circular
type JsonNative = JsonPrimitive | JsonNative[] | {[property: string]: JsonNative} 
type JsonReviver<T> = (this: JsonStructure<T>, key: string, value: JsonStructure<T>) => T

/** NB! Without `NaN` https://developer.mozilla.org/en-US/docs/Glossary/Falsy */
type falsy = false | 0 | -0 | 0n | "" | null | undefined // | NaN