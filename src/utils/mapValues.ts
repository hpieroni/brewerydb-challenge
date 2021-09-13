/**
 * Map object values by running a mapping function to each one.
 *
 * @example
 *  const double = (n: number) => n * 2;
 *  const mapValuesToDouble = mapValues(double);
 *  mapValuesToDouble({ a: 1, b: 2, c: 3 }); // -> { a: 2, b: 4, c: 6 }
 *
 * @param {Function} fn Mapping function. Receives an object value and trasnform it.
 * @param {object} obj The object to map values from.
 * @returns {object} The resulting object after mapping its values.
 */
export const mapValues =
  <T, U>(fn: (value: T) => U) =>
  (obj: Record<PropertyKey, T>): Record<PropertyKey, U> => {
    const keys = Object.keys(obj) as Array<PropertyKey>;

    return keys.reduce((acc, key) => {
      acc[key] = fn(obj[key]);
      return acc;
    }, {} as Record<PropertyKey, U>);
  };

export default mapValues;
