declare type JsonPrimitive = null|boolean|number|string
declare type Primitive = undefined|bigint|symbol|JsonPrimitive
declare type JsonStructure<T = any> = T[] | {[key: string]: T}

// Changing here to Structured makes Jsoned Circular
declare type Json = JsonPrimitive | Json[] | {[property: string]: Json} 
declare type JsonReviver<T> = (this: JsonStructure<T>, key: string, value: JsonStructure<T>) => T

/** NB! Without `NaN` https://developer.mozilla.org/en-US/docs/Glossary/Falsy */
declare type falsy = false | 0 | -0 | 0n | "" | null | undefined // | NaN