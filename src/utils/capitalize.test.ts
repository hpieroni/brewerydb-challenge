import capitalize from './capitalize';

describe('`capitalize` function', () => {
  test('should return an empty string if input is ``', () => {
    expect(capitalize('')).toBe('');
  });

  test('should uppercase only the first char', () => {
    expect(capitalize('foo')).toEqual('Foo');
  });

  test('should lowercase all chars but the first one', () => {
    expect(capitalize('aBcDEf')).toEqual('Abcdef');
  });
});
