import identity from '../../src/utils/identity';

describe('`identity` function', () => {
  test('should return the same value passed as argument', () => {
    expect(identity(undefined)).toBe(undefined);
    expect(identity(null)).toBe(null);
    expect(identity(true)).toBe(true);
    expect(identity(1)).toBe(1);
    expect(identity('hi')).toBe('hi');

    const obj = {};
    expect(identity(obj)).toBe(obj);

    const arr = [1, 2];
    expect(identity(arr)).toBe(arr);
  });
});
