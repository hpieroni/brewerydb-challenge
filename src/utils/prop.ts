import { AnyObject } from './types';

/**
 * Given a property it returns a function that will returnthe property of
 * an object
 *
 * @example
 *  prop('foo')({}); // -> undefined
 *  prop('foo')({ foo: 'bar' }); // -> 'bar'
 *
 * @param {string} key The key of the object to access.
 * @param {object} object The object to get the key from.
 * @returns {*} The value in the object[key].
 */
const prop =
  <T extends AnyObject>(key: keyof T) =>
  (obj: T): T[keyof T] =>
    obj[key];

export default prop;
