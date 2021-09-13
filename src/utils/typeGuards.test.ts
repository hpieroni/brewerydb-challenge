import { isNull, isUndefined, isNil, isString } from './typeGuards';

describe('type guard functions', () => {
  describe('`isNull` function', () => {
    test('should check if a value is `null`', () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(false);
      expect(isNull('')).toBe(false);
      expect(isNull(1)).toBe(false);
      expect(isNull({})).toBe(false);
      expect(isNull([])).toBe(false);
    });
  });

  describe('`isUndefined` function', () => {
    test('should check if a value is `undefined`', () => {
      expect(isUndefined(undefined)).toBe(true);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined('')).toBe(false);
      expect(isUndefined(1)).toBe(false);
      expect(isUndefined({})).toBe(false);
      expect(isUndefined([])).toBe(false);
    });
  });

  describe('`isNil` function', () => {
    test('should check if a value is `null` or `undefined`', () => {
      expect(isNil(undefined)).toBe(true);
      expect(isNil(null)).toBe(true);
      expect(isNil('')).toBe(false);
      expect(isNil(1)).toBe(false);
      expect(isNil({})).toBe(false);
      expect(isNil([])).toBe(false);
    });
  });

  describe('`isString` function', () => {
    test('should check if a value is a `string`', () => {
      expect(isString('')).toBe(true);
      expect(isString(undefined)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(1)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });
  });
});
