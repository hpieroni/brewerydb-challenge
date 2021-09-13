import snakeToCamel from '../../src/utils/snakeToCamel';

describe('`snakeToCamel` function', () => {
  test('should return an empty string if input is ``', () => {
    expect(snakeToCamel('')).toBe('');
  });

  test('should lowercase if the input is only one word', () => {
    expect(snakeToCamel('FOO')).toEqual('foo');
  });

  test('should capitalize every snake case word but the first one', () => {
    expect(snakeToCamel('foo_bar_baz')).toEqual('fooBarBaz');
  });

  test('should ignore any `_` char from the input and extract words', () => {
    expect(snakeToCamel('___foo____bar_BAZ__')).toEqual('fooBarBaz');
  });
});
