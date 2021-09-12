import { AnyObject } from './types';

/**
 * Return a new object without properties which values is equal to `value`.
 *
 * @example
 *  removePropsWith(1)({}); // -> {}
 *  removePropsWith(2)({ foo: 1, bar: 2 }); // -> { bar: 2 }
 *
 * @param {*} value Property value to remove from object.
 * @param {Object} object The object to remove properties which values are `value`.
 * @returns {Object} The original object without properties which values are `value`.
 */
const removePropsWith =
  (value: unknown) =>
  <T extends AnyObject>(obj: T): T => {
    const keys = Object.keys(obj) as Array<keyof T>;

    return keys.reduce((acc, key) => {
      if (obj[key] !== value) {
        acc[key] = obj[key];
      }
      return acc;
    }, {} as T);
  };

export default removePropsWith;
