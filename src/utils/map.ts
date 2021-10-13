import curry2 from './curry2';

type MapFn<T, U> = (value: T) => U;

/**
 * Transforms each element of an array with a given function.
 *
 * @example
 *  map(n => n+1)([])); // -> []
 *  map(n => n+1)([1,2])); // -> [2,3]
 *
 * @param {Function} fn The mapping function
 * @param {Array} array The array to map
 * @returns {Array} The transformed array.
 */
const map = <T, U>(fn: MapFn<T, U>, array: T[]): U[] => array.map(fn);

export default curry2(map);
