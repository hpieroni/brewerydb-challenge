/**
 * Check if the given value is `null`
 *
 * @example
 *  isNull(null) // -> true
 *  isNull(1) // -> false
 *
 * @param {*} value The value to check
 * @returns {boolean} `true` if the value is `null`
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Check if the given value is `undefined`
 *
 * @example
 *  isUndefined(undefined) // -> true
 *  isUndefined(1) // -> false
 *
 * @param {*} value The value to check
 * @returns {boolean} `true` if the value is `undefined`
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Check if the given value is `null` or `undefined`
 *
 * @example
 *  isNil(undefined) // -> true
 *  isNil(null) // -> true
 *  isNil(1) // -> false
 *
 * @param {*} value The value to check
 * @returns {boolean} `true` if the value is `null` or `undefined`
 */
export function isNil(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/**
 * Check if the given value is a `string`
 *
 * @example
 *  isString('hi') // -> true
 *  isString(1) // -> false
 *
 * @param {*} value The value to check
 * @returns {boolean} `true` if the value is a `string`
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
