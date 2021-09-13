export type AnyObject = Record<string, unknown>;

export type ValueOf<T> = T[keyof T];

export type Nullable<T> = { [K in keyof T]: T[K] | null };

type SnakeToCamelCase<S extends string> =
  S extends `${infer A}_${infer B}${infer C}`
    ? `${Lowercase<A>}${Capitalize<B>}${SnakeToCamelCase<C>}`
    : Lowercase<S>;

export type SnakeToCamelKeys<T extends AnyObject> = {
  [K in keyof T as SnakeToCamelCase<K & string>]: T[K];
};
