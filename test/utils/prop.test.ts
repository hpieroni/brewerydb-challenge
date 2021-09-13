import prop from '../../src/utils/prop';

describe('`prop` function', () => {
  const propFoo = prop('foo');

  test('should be a curried function', () => {
    expect(propFoo).toBeInstanceOf(Function);
  });

  test('should return `undefined` if the property does not exist in the object', () => {
    expect(propFoo({})).toEqual(undefined);
  });

  test('should return the value of the object property', () => {
    expect(propFoo({ foo: 'bar' })).toEqual('bar');
  });
});
