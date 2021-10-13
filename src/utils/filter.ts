import curry2 from './curry2';

type Predicate<T> = (value: T) => boolean;

/**
 * A function that filter an array based on a predicate.
 *
 * @example
 *  const isEven = (n: number) => n % 2 === 0;
 *  filter(isEven)([1,2,3,4]); // -> [2,4]
 *
 * @param {Function} predicate The function to filter the array.
 * @param {Array} array The array to filter.
 * @returns {Array} The filtered array.
 */
const filter = <T>(predicate: Predicate<T>, array: T[]): T[] => {
  return array.filter(predicate);
};

export default curry2(filter);
