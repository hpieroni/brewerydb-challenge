import pipe from '../../src/utils/pipe';

describe('`pipe` function', () => {
  const length = (str: string) => str.length;
  const isEven = (n: number) => n % 2 === 0;
  const complement = (bool: boolean) => !bool;

  test('should work with one function', () => {
    const pipedFn = pipe(length);

    expect(pipedFn('hi')).toBe(2);
    expect(pipedFn('hello')).toBe(5);
  });

  test('should work with multiple functions', () => {
    const pipedFn = pipe(length, isEven, complement);

    expect(pipedFn('hi')).toBe(false);
    expect(pipedFn('hello')).toBe(true);
  });

  test('should be transitive', () => {
    const piped1 = pipe(length, isEven, complement);
    const piped2 = pipe(length, pipe(isEven, complement));
    const piped3 = pipe(pipe(length, isEven), complement);

    expect(piped1('hi')).toBe(false);
    expect(piped2('hi')).toBe(false);
    expect(piped3('hi')).toBe(false);
  });
});
