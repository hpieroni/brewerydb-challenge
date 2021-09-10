import { AnyObject } from './types';
import prop from './prop';
import identity from './identity';

type SortOrder = 'asc' | 'desc';

/**
 * Sort an array by a given function in `asc` or `desc` order.
 *
 * @example
 *  const sortByAbs = sortBy(Math.abs, 'asc');
 *  sortByAbs([-18, 5, 1, -42]); // -> [1, 5, -18, -42]
 *
 * @param {Function} fn Ordering fn to be run in each element to compare.
 * @param {string} [order=asc] Orderding: `asc` or `desc`.
 * @param {Array} array The array to be sorted.
 * @returns {Array} The sorted array by the given function.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const sortBy =
  <T>(fn: (obj: T) => any, order: SortOrder = 'asc') =>
  (array: T[]): T[] =>
    [...array].sort((x, y) => {
      if (order === 'desc') {
        return fn(y) <= fn(x) ? 1 : -1;
      }
      return fn(x) <= fn(y) ? 1 : -1;
    });

/**
 * Sort an array of objects by an object property in `asc` or `desc` order.
 *
 * @example
 *  const sortByAge = sortByAge('age', 'asc');
 *  const people = [{ age: 5 }, { age: 18 }, { age: 1 }, { age: 42 }]
 *  sortByAbs(people); // -> [{ age: 1 }, { age: 5 }, { age: 18 }, { age: 42 }]
 *
 * @param {string} propName The object property to sort by.
 * @param {string} [order=asc] Orderding: `asc` or `desc`.
 * @param {Array} array The array of objects to be sorted.
 * @returns {Array} The sorted array of objects by the object property.
 */
export const sortByProp = <T extends AnyObject>(
  propName: keyof T,
  order: SortOrder = 'asc'
): ((array: T[]) => T[]) => sortBy(prop(propName), order);

/**
 * Sort an array of elements in ascending order.
 *
 * @function
 * @example
 *  sort([]); // -> []
 *  sort([18,5,1,42]); // -> [1,5,18,42]
 *  sort(['d','a','c','b']); // -> ['a','b','c','d']
 *
 * @param {Array} array An array of elements
 * @returns {Array} The given array sorted by ascending order.
 */
export const sort = sortBy(identity);
