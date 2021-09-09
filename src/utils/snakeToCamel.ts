import capitalize from './capitalize';

/**
 * Transform a string from snake to camel case.
 *
 * @example
 *  snakeToCamel(""); // -> ""
 *  snakeToCamel("foo"); // -> "foo"
 *  snakeToCamel("foo_bar"); // -> fooBar
 *  snakeToCamel("___foo____bar_baz__"); // -> fooBarBaz
 *
 * @param {string} str The snake case string to be transformed.
 * @returns {string} The transformed string to camel case.
 */
function snakeToCamel(str: string): string {
  return str
    .toLowerCase()
    .replace(
      /([_]*)([^_]+)([_]*)/g,
      (match, prefixedUnderscores, word, sufixedUnderscores, offset) =>
        offset > 0 ? capitalize(word) : word
    );
}

export default snakeToCamel;
