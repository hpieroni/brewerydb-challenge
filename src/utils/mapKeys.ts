import curry2 from './curry2';
import { AnyObject } from './types';

type MapKeyFn = (value: string) => string;

/**
 * Map keys on an object by running a mapping function to each one.
 *
 * @param {Function} fn Mapping function. Receives a key and must return a new key name.
 * @param {object} obj The object to map keys from.
 * @returns {object} The resulting object after mapping its keys.
 */
const mapKeys = <T extends AnyObject, U extends AnyObject>(
  fn: MapKeyFn,
  obj: Readonly<T>
): U => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[fn(key)] = obj[key];
    return acc;
  }, {} as any); // eslint-disable-line @typescript-eslint/no-explicit-any
};

export default curry2(mapKeys);
