import filter from '../../src/utils/filter';

describe('`filter` function', () => {
  const isEven = (n: number) => n % 2 === 0;
  const filterEven = filter(isEven);

  test('should be a curried function', () => {
    expect(filterEven).toBeInstanceOf(Function);
  });

  test('should work with empty arrays', () => {
    expect(filterEven([])).toEqual([]);
  });

  test('should filter elements from the array that match the predicate', () => {
    expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
  });

  test('should return a new array and not mutate the original', () => {
    let arr1: number[] = [];
    let arr2: number[] = filterEven([]);
    expect(filterEven(arr1)).not.toBe(arr2);

    arr1 = [1, 2, 3, 4];
    arr2 = filterEven(arr1);
    expect(filterEven(arr1)).not.toBe(arr2);
  });
});
