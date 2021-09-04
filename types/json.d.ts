declare type JsonFalsy = null|false|0|""
declare type JsonPrimitive = null|boolean|number|string
declare type Json = {[property: string]: JsonType}
declare type JsonStructure<T = unknown> = T[] | {[key: string]: T}

// Changing here to Structured makes Jsoned Circular
declare type JsonType = JsonPrimitive | JsonType[] | {[property: string]: JsonType} 
