import map from '../../src/utils/map';

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

  test('should return a new array and not mutate the original', () => {
    let arr1: number[] = [];
    let arr2: number[] = mapDouble([]);
    expect(mapDouble(arr1)).not.toBe(arr2);

    arr1 = [1, 2, 3];
    arr2 = mapDouble(arr1);
    expect(mapDouble(arr1)).not.toBe(arr2);
  });
});
