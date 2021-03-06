import curry2 from './curry2';
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
const prop = <T extends AnyObject, K extends keyof T>(key: K, obj: T): T[K] =>
  obj[key];

export default curry2(prop);
