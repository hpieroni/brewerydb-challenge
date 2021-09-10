/**
 * A function that returns the value passed as an argument.
 *
 * @example
 *  identity(null); // -> null
 *  identity(1); // -> 1
 *  identity('hi'); // -> 'hi
 *
 * @param {*} x Any value.
 * @returns {*} Return the same value.
 */
const identity = <T>(x: T): T => x;

export default identity;
