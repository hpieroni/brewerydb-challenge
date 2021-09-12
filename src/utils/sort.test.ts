import { sort, sortByProp, sortBy } from './sort';

describe('sorting functions', () => {
  describe('`sort` function', () => {
    test('should sort by ascending order', () => {
      expect(sort([])).toEqual([]);
      expect(sort([18, 5, 1, 42])).toEqual(
        expect.arrayContaining([1, 5, 18, 42])
      );
      expect(sort(['d', 'a', 'c', 'b'])).toEqual(
        expect.arrayContaining(['a', 'b', 'c', 'd'])
      );
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
      const peopleOrdered = [{ age: 1 }, { age: 5 }, { age: 18 }, { age: 42 }];

      expect(sortyByAge([])).toEqual([]);
      expect(sortyByAge(people)).toEqual(expect.arrayContaining(peopleOrdered));
    });

    test('should sort by a given prop in ascending order', () => {
      const sortyByAgeAsc = sortByProp('age', 'asc');
      const peopleOrdered = [{ age: 1 }, { age: 5 }, { age: 18 }, { age: 42 }];

      expect(sortyByAgeAsc([])).toEqual([]);
      expect(sortyByAgeAsc(people)).toEqual(
        expect.arrayContaining(peopleOrdered)
      );
    });

    test('should sort by a given prop in descending order', () => {
      const sortyByAgeDesc = sortByProp('age', 'desc');
      const peopleOrdered = [{ age: 42 }, { age: 18 }, { age: 5 }, { age: 1 }];

      expect(sortyByAgeDesc([])).toEqual([]);
      expect(sortyByAgeDesc(people)).toEqual(
        expect.arrayContaining(peopleOrdered)
      );
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
      const orderedByAbs = [1, 5, -18, -42];

      expect(sortyByAbs([])).toEqual([]);
      expect(sortyByAbs(numbers)).toEqual(expect.arrayContaining(orderedByAbs));
    });

    test('should sort by a given function in ascending order', () => {
      const sortyByAbs = sortBy(Math.abs, 'asc');
      const orderedByAbs = [1, 5, -18, -42];

      expect(sortyByAbs([])).toEqual([]);
      expect(sortyByAbs(numbers)).toEqual(expect.arrayContaining(orderedByAbs));
    });

    test('should sort by a given function in descending order', () => {
      const sortyByAbs = sortBy(Math.abs, 'desc');
      const orderedByAbs = [-42, -18, 5, 1];

      expect(sortyByAbs([])).toEqual([]);
      expect(sortyByAbs(numbers)).toEqual(expect.arrayContaining(orderedByAbs));
    });

    test('should return a new array and not mutate the original', () => {
      const sortyByAbs = sortBy(Math.abs);
      const numbers = [2, 1];
      expect(sortyByAbs(numbers)).not.toBe(numbers);
    });
  });
});
