import { groupBy, groupByProp } from './groupBy';

describe('`grouping` functions', () => {
  describe('`groupBy` function', () => {
    const numbers = [-2, -1, 1, 2];
    const groupByAbs = groupBy(Math.abs);

    test('should be a curried function', () => {
      expect(groupByAbs).toBeInstanceOf(Function);
    });

    test('should work with empty array', () => {
      expect(groupByAbs([])).toEqual({});
    });

    test('should group every element by the given function', () => {
      expect(groupByAbs(numbers)).toEqual({
        1: [-1, 1],
        2: [-2, 2],
      });
    });
  });

  describe('`groupByProp` function', () => {
    const numbers = [
      { name: 'ana', age: 20 },
      { name: 'bob', age: 30 },
      { name: 'george', age: 20 },
    ];
    const groupByAge = groupByProp('age');

    test('should be a curried function', () => {
      expect(groupByAge).toBeInstanceOf(Function);
    });

    test('should work with empty array', () => {
      expect(groupByAge([])).toEqual({});
    });

    test('should group every element by the given function', () => {
      expect(groupByAge(numbers)).toEqual({
        20: [
          { name: 'ana', age: 20 },
          { name: 'george', age: 20 },
        ],
        30: [{ name: 'bob', age: 30 }],
      });
    });
  });
});
