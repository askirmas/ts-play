type JsonPrimitive = null|boolean|number|string
type Primitive = undefined|bigint|symbol|JsonPrimitive
type JsonStructure<T = any> = T[] | {[key: string]: T}

// Changing here to Structured makes Jsoned Circular
type JsonNative = JsonPrimitive | JsonNative[] | {[property: string]: JsonNative} 
type JsonReviver<T> = (this: JsonStructure<T>, key: string, value: JsonStructure<T>) => T
