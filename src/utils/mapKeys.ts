import { AnyObject } from './types';

/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Map keys on an objects by running a mapping function to each one.
 *
 * @param {Function} fn Mapping function. Receives a key and must return a new key name.
 * @param {object} obj The object to map keys from.
 * @returns {object} The resulting object after mapping its keys.
 */
const mapKeys =
  <T extends AnyObject, U extends AnyObject>(fn: (value: string) => string) =>
  (obj: Readonly<T>): U =>
    Object.keys(obj).reduce((acc, key) => {
      acc[fn(key)] = obj[key];
      return acc;
    }, {} as any);

export default mapKeys;
