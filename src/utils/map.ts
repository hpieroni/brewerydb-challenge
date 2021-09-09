/**
 * Transforms a string so that the first letter is capitalized and the rest is lowercased.
 *
 * @function
 * @example
 *  capitalize(""); // -> ""
 *  capitalize("foo"); // -> "Foo"
 *  capitalize("aBcDEf"); // -> "Abcdef"
 *
 * @param {string} str The string to capitalize
 * @returns {string} The original string with the first letter capitalized.
 */
const map =
  <T, U>(fn: (value: T) => U) =>
  (array: ReadonlyArray<T>): U[] =>
    array.map(fn);

export default map;
