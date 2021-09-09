import removePropsWith from './removePropsWith';

describe('`removePropsWith` function', () => {
  const removeOnes = removePropsWith(1);

  test('should be a curried function', () => {
    expect(removeOnes).toBeInstanceOf(Function);
  });

  test('should work with empty objects', () => {
    expect(removeOnes({})).toEqual({});
  });

  test('should remove properties from object which values are equal to 1', () => {
    expect(removeOnes({ foo: 1, bar: 2 })).toEqual({ bar: 2 });
  });

  test('should not mutate the original object', () => {
    const obj = { foo: 1, bar: 2 };
    Object.freeze(obj);

    expect(() => removeOnes(obj)).not.toThrow();
  });

  test('should always return a new object', () => {
    let obj1 = {};
    let obj2 = removeOnes(obj1);
    expect(removeOnes(obj1)).not.toBe(obj2);

    obj1 = { foo: null, bar: 'baz' };
    obj2 = removeOnes(obj1);
    expect(removeOnes(obj1)).not.toBe(obj2);
  });
});
