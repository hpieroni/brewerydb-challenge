import map from './map';

describe('`map` function', () => {
  const double = (n: number) => n * 2;
  const mapDouble = map(double);

  test('should be a curried function', () => {
    expect(mapDouble).toBeInstanceOf(Function);
  });

  test('should work with empty arrays', () => {
    expect(mapDouble([])).toEqual([]);
  });

  test('should transform every element of the array with given function', () => {
    expect(mapDouble([1, 2, 3])).toEqual([2, 4, 6]);
  });
});
