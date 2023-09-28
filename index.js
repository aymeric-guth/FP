const push = (iterable, item) => {
  return [...iterable, item];
};

const map = (iterable, func) => {
  return (function inner(n, buff) {
    if (n >= iterable.length) {
      return buff;
    } else {
      const item = func(iterable[n]);
      return inner(n + 1, push(buff, item));
    }
  })(0, []);
};

const reduce = (iterable, func, acc = 0) => {
  return (function inner(n, acc) {
    if (n >= iterable.length) {
      return acc;
    } else {
      return inner(n + 1, func(iterable[n]) + acc);
    }
  })(0, acc);
};

const functorFilter = (iterable, n, buff, caller, apply) => {
  const item = iterable[n];
  if (apply(item)) {
    return caller(n + 1, push(buff, item));
  } else {
    return caller(n + 1, buff);
  }
};

const functorReduce = (iterable, n, buff, caller, apply) => {
  const item = iterable[n];
  return caller(n + 1, apply(item) + buff);
};

const functorMapper = (iterable, n, buff, caller, apply) => {
  const item = iterable[n];
  return caller(n + 1, push(buff, item));
};

const mapper = (iterable, func, functor) => {
  return (function inner(n, buff) {
    if (n >= iterable.length) {
      return buff;
    } else {
      return functor(iterable, n, buff, inner, func);
    }
  })(0, []);
};

const filter = (iterable, func) => {
  return mapper(iterable, func, functorFilter);
};

module.exports = [map, reduce, filter];
