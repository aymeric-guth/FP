const push = (iterable, item) => {
  return [...iterable, item];
};

// map(iterable, func) => iterable
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

// const reduce = (iterable, func, acc = 0) => {
//   return (function inner(n, acc) {
//     if (n >= iterable.length) {
//       return acc;
//     } else {
//       return inner(n + 1, func(iterable[n]) + acc);
//     }
//   })(0, acc);
// };

const functorFilter = (iterable, n, buff, caller, apply) => {
  const item = iterable[n];
  if (apply(item)) {
    return caller(n + 1, push(buff, item));
  } else {
    return caller(n + 1, buff);
  }
};

const functorReduce = (inner, n, iterable, buff, caller, apply) =>
  caller(n + 1, apply(iterable[n]) + acc);

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

const reduce = (iterable, func) => {
  return mapper(iterable, func, functorReduce);
};

// const filter = (iterable, func) => {
//   return (function inner(n, buff) {
//     if (n >= iterable.length) {
//       return buff;
//     } else {
//       const item = iterable[n];
//       if (func(item)) {
//         return inner(n + 1, push(buff, item));
//       } else {
//         return inner(n + 1, buff);
//       }
//     }
//   })(0, []);
// };

const gameOver = (teamA, teamB) => {
  return Math.abs(teamA.reduce(accScore, 0) - teamB.reduce(accScore, 0)) >= 3;
};

const randomSeed = (seed = Math.random()) => {
  return () => (Math.random() >= 0.5 ? true : false);
};

const makeShot = (score, random) => {
  return [...score, random()];
};

const accScore = (acc, val) => (val ? acc + 1 : acc);

const teamA = [true, true, true];
const teamB = [false, false, false];

// console.log(map([1, 2, 3], (x) => x + 1));
//
// makeShot(teamA, randomSeed(42));
// console.log(gameOver(teamA, teamB));

// const arr = [1, 2, 3, 4];
// console.log(map(arr, (n) => n + 1));
// console.log(map([1, 2, 3, 4, 5], (x) => x + 1));

module.exports = [map, reduce, filter];
