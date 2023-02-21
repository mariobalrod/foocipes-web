type Without<T, U> = { [P in Exclude<keyof U, keyof T>]?: never } & T;

/**
 * XOR<T, U> creates a conditional type (one type or the other is expected) by making use of Without
 */
export type XOR<T, U> = T | U extends object
  ? Without<T, U> | Without<U, T>
  : T | U;

/**
 * Return union of values in an object
 */
export type Values<T> = T[keyof T];

/**
 * Expand object types one level deep
 */
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/**
 * Checks if the argument is a string
 * @param str: any
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isString = (str: any): str is string => typeof str === 'string';
