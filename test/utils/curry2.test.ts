import curry2 from '../../src/utils/curry2';

describe('`curry2` function', () => {
  const sum = (a: number, b: number) => a + b;

  test('should return a function', () => {
    expect(curry2(sum)).toBeInstanceOf(Function);
  });

  test('should curry a function of 2 arguments', () => {
    const curriedSum = curry2(sum);
    const increment = curriedSum(1);

    expect(curriedSum(1)(1)).toEqual(2);
    expect(increment(1)).toEqual(2);
  });
});
