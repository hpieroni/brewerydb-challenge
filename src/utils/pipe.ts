/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Compose functions from right to left
 *
 *
 * @param {...Func} num - A positive or negative number.
 * @returns {Func} The composed Function.
 */
function pipe<V extends any[], T1>(fn0: (...fns: V) => T1): (...fns: V) => T1;
function pipe<V extends any[], T1, T2>(
  fn0: (...fns: V) => T1,
  fn1: (x: T1) => T2
): (...fns: V) => T2;
function pipe<V extends any[], T1, T2, T3>(
  fn0: (...fns: V) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3
): (...fns: V) => T3;
function pipe<V extends any[], T1, T2, T3, T4>(
  fn0: (...fns: V) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4
): (...fns: V) => T4;
function pipe(...fns: any[]): any {
  return (value: any) => fns.reduce((y, f) => f(y), value);
}

export default pipe;
