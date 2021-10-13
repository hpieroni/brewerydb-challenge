import curry2 from './curry2';
import prop from './prop';
import { AnyObject } from './types';

/**
 * Group a list of items by a given function.
 *
 * @example
 *  const numbers = [-2, -1, 1, 2]
 *  const groupByAbs = groupBy(Math.abs)
 *  groupByAbs(numbers) // -> { 1: [-1, 1], 2: [-2, 2] }
 *
 * @param {Function} fn Group key function. Receives an element and return the group key.
 * @param {Array} array The list of items to group.
 * @returns {Object} An object which every key has a group of items.
 */
export const groupBy = curry2(
  <T>(
    groupKeyFn: (item: T) => PropertyKey,
    array: T[]
  ): Record<PropertyKey, T[]> =>
    array.reduce((acc, current) => {
      const groupKey = groupKeyFn(current);

      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(current);

      return acc;
    }, {} as Record<PropertyKey, T[]>)
);

/**
 * Group a list of items by a object property.
 *
 * @example
 *  const numbers = [
 *    { name: 'ana', age: 20 },
 *    { name: 'bob', age: 30 },
 *    { name: 'george', age: 20 },
 *  ];
 *  const groupByAge = groupByProp('age');
 *  // -> { 20: [{ name: 'ana', age: 20 }, { name: 'george', age: 20 }], 30: [{ name: 'bob', age: 30 }] }
 *
 * @param {string} propName property object name
 * @param {Array} array The list of items to group.
 * @returns {Object} An object which every key has a group of items.
 */
export const groupByProp = <T extends AnyObject>(
  propName: keyof T
): ((array: T[]) => Record<PropertyKey, T[]>) => groupBy<any>(prop(propName));
