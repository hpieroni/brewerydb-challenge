/**
 * Transforms a string so that the first letter is capitalized and the rest is lowercased.
 *
 * @example
 *  capitalize(""); // -> ""
 *  capitalize("foo"); // -> "Foo"
 *  capitalize("aBcDEf"); // -> "Abcdef"
 *
 * @param {string} str The string to capitalize
 * @returns {string} The original string with the first letter capitalized.
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default capitalize;
