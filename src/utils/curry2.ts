function curry2<T1, T2, R>(fn: (a: T1, b: T2) => R) {
  return (a: T1) =>
    (b: T2): R =>
      fn(a, b);
}

export default curry2;
