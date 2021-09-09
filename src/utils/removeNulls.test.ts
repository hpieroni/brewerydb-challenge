import removeNulls from './removeNulls';

describe('`removeNulls` function', () => {
  test('should work with empty objects', () => {
    expect(removeNulls({})).toEqual({});
  });

  test('should remove `null` properties', () => {
    expect(removeNulls({ foo: null, bar: 'baz' })).toEqual({ bar: 'baz' });
  });

  test('should not mutate the original object', () => {
    const obj = { foo: null, bar: 'baz' };
    Object.freeze(obj);

    expect(() => removeNulls(obj)).not.toThrow();
  });

  test('should always return a new object', () => {
    let obj1 = {};
    let obj2 = removeNulls(obj1);
    expect(removeNulls(obj1)).not.toBe(obj2);

    obj1 = { foo: null, bar: 'baz' };
    obj2 = removeNulls(obj1);
    expect(removeNulls(obj1)).not.toBe(obj2);
  });
});
