import { AnyObject } from './types';

/**
 * Map keys on an objects by running a mapping function to each one.
 *
 * @param {Function} fn Mapping function. Receives a key and must return a new key name.
 * @param {object} obj The object to map keys from.
 * @returns {object} The resulting object after mapping its keys.
 */
const mapKeys =
  <T extends AnyObject>(fn: (value: string) => string) =>
  (obj: Readonly<T>): AnyObject =>
    Object.keys(obj).reduce((acc: AnyObject, key: string) => {
      acc[fn(key)] = obj[key];
      return acc;
    }, {} as AnyObject);

export default mapKeys;
