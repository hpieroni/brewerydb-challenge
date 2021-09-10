import { AnyObject } from './types';

/**
 * Return a new object without properties which values is equal to `value`.
 *
 * @example
 *  removePropsWith(1)({}); // -> {}
 *  removePropsWith(2)({ foo: 1, bar: 2 }); // -> { bar: 2 }
 *
 * @param {*} value Property value to remove from object.
 * @param {object} object The object to remove properties which values are `value`.
 * @returns {object} The original object without properties which values are `value`.
 */
const removePropsWith =
  (value: unknown) =>
  <T extends AnyObject>(obj: Readonly<T>): Partial<T> => {
    return Object.keys(obj).reduce((acc: Partial<T>, key: keyof T) => {
      if (obj[key] !== value) {
        acc[key] = obj[key];
      }
      return acc;
    }, {} as Partial<T>);
  };

export default removePropsWith;
