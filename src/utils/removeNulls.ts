import removePropsWith from './removePropsWith';

/**
 * Return a new object without `null` properties.
 *
 * @function
 * @example
 *  removeNulls({}); // -> {}
 *  removeNulls({ foo: null, bar: 10 }); // -> { bar: 10 }
 *
 * @param {object} object The object to remove `null` properties from.
 * @returns {object} The original object without `null` properties.
 */
const removeNulls = removePropsWith(null);

export default removeNulls;
