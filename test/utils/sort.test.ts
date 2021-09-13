import { sort, sortByProp, sortBy } from '../../src/utils/sort';

describe('sorting functions', () => {
  describe('`sort` function', () => {
    test('should sort by ascending order', () => {
      expect(sort([])).toEqual([]);
      expect(sort([18, 5, 1, 42])).toEqual([1, 5, 18, 42]);
      expect(sort(['d', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c', 'd']);
    });

    test('should return a new array and not mutate the original', () => {
      const numbers = [2, 1];
      expect(sort(numbers)).not.toBe(numbers);
    });
  });

  describe('`sortByProp` function', () => {
    const people = [{ age: 5 }, { age: 18 }, { age: 1 }, { age: 42 }];

    test('should sort by a given prop in ascending order by default', () => {
      const sortyByAge = sortByProp('age');
      const expectedSortedAges = [1, 5, 18, 42];
      const sortedAges = sortyByAge(people).map(person => person.age);

      expect(sortyByAge([])).toEqual([]);
      expect(sortedAges).toEqual(expectedSortedAges);
    });

    test('should sort by a given prop in ascending order', () => {
      const sortyByAgeAsc = sortByProp('age', 'asc');
      const expectedSortedAges = [1, 5, 18, 42];
      const sortedAges = sortyByAgeAsc(people).map(person => person.age);

      expect(sortyByAgeAsc([])).toEqual([]);
      expect(sortedAges).toEqual(expectedSortedAges);
    });

    test('should sort by a given prop in descending order', () => {
      const sortyByAgeDesc = sortByProp('age', 'desc');
      const expectedSortedAges = [42, 18, 5, 1];
      const sortedAges = sortyByAgeDesc(people).map(person => person.age);

      expect(sortyByAgeDesc([])).toEqual([]);
      expect(sortedAges).toEqual(expectedSortedAges);
    });

    test('should return a new array and not mutate the original', () => {
      const sortyByAge = sortByProp('age');
      const people = [{ age: 2 }, { age: 1 }];
      expect(sortyByAge(people)).not.toBe(people);
    });
  });

  describe('`sortBy` function', () => {
    const numbers = [-18, 5, 1, -42];

    test('should sort by a given function in ascending order by default', () => {
      const sortyByAbs = sortBy(Math.abs);
      const sortedByAbs = [1, 5, -18, -42];

      expect(sortyByAbs([])).toEqual([]);
      expect(sortyByAbs(numbers)).toEqual(sortedByAbs);
    });

    test('should sort by a given function in ascending order', () => {
      const sortyByAbs = sortBy(Math.abs, 'asc');
      const sortedByAbs = [1, 5, -18, -42];

      expect(sortyByAbs([])).toEqual([]);
      expect(sortyByAbs(numbers)).toEqual(sortedByAbs);
    });

    test('should sort by a given function in descending order', () => {
      const sortyByAbs = sortBy(Math.abs, 'desc');
      const sortedByAbs = [-42, -18, 5, 1];

      expect(sortyByAbs([])).toEqual([]);
      expect(sortyByAbs(numbers)).toEqual(sortedByAbs);
    });

    test('should return a new array and not mutate the original', () => {
      const sortyByAbs = sortBy(Math.abs);
      const numbers = [2, 1];
      expect(sortyByAbs(numbers)).not.toBe(numbers);
    });
  });
});
