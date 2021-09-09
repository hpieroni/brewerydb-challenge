import mapKeys from './mapKeys';

describe('`mapKeys` function', () => {
  const toUpperCase = (key: string) => key.toUpperCase();
  const mapKeysToUpper = mapKeys(toUpperCase);

  test('should be a curried function', () => {
    expect(mapKeysToUpper).toBeInstanceOf(Function);
  });

  test('should work with empty objects', () => {
    expect(mapKeysToUpper({})).toEqual({});
  });

  test('should transform every object key with the given function', () => {
    expect(mapKeysToUpper({ foo: 'foo', bar: 'bar' })).toEqual({
      FOO: 'foo',
      BAR: 'bar',
    });
  });
});
