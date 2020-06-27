/** @see https://stackoverflow.com/a/50375286/10325032 */
type UnionToIntersection<Union> = (
  Union extends any ? (argument: Union) => void : never
) extends (argument: infer Intersection) => void
? Intersection
: never;

/** @see https://stackoverflow.com/a/53955431 */
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

/** @see https://stackoverflow.com/questions/53953814/typescript-check-if-a-type-is-a-union/53955431 */
type IsSingleton<T> = [T] extends [UnionToIntersection<T>] ? true : false

/** @see https://stackoverflow.com/a/60807986/9412937 */
type SingleKey<T> = IsUnion<keyof T> extends true ? never : {} extends T ? never : T;

/** @see https://stackoverflow.com/a/58411963/9412937 */
type SingletonOnly<T> = IsSingleton<T> extends true
? T
: never


function foo<K extends string>(s: SingletonOnly<K>): void {}

declare const singleton: 'foo';
foo(singleton);

declare const union: "foo" | "bar";
//@ts-expect-error
foo(union); // Compile-time error

declare const typeString: string;
foo(typeString); // Compile-time error