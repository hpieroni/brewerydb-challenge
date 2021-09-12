import mapValues from './mapValues';

describe('`mapValues` function', () => {
  const double = (n: number) => n * 2;
  const mapValuesToDouble = mapValues(double);

  test('should be a curried function', () => {
    expect(mapValuesToDouble).toBeInstanceOf(Function);
  });

  test('should work with empty objects', () => {
    expect(mapValuesToDouble({})).toEqual({});
  });

  test('should transform every object key with the given function', () => {
    expect(mapValuesToDouble({ a: 1, b: 2 })).toEqual({
      a: 2,
      b: 4,
    });
  });

  test('should return a new object and not mutate the original', () => {
    let obj1 = {};
    let obj2 = mapValuesToDouble(obj1);
    expect(mapValuesToDouble(obj1)).not.toBe(obj2);

    obj1 = { a: 1, b: 2 };
    obj2 = mapValuesToDouble(obj1);
    expect(mapValuesToDouble(obj1)).not.toBe(obj2);
  });
});
