const randomSeed = (seed = Math.random()) => {
  return () => (Math.random() >= 0.5 ? true : false);
};

const makeShot = (score, random) => {
  return [...score, random()];
};

const accScore = (acc, val) => (val ? acc + 1 : acc);

const reduce = (it, fn, init) => {
  let acc = init;
  for (const item of it) {
    acc = fn(item, acc);
  }
  return acc;
};

const gameOver = (teamA, teamB) => {
  // return Math.abs(reduce(teamA, accScore, 0) - reduce(teamB, accScore, 0) >= 3);
  return Math.abs(teamA.reduce(accScore, 0) - teamB.reduce(accScore, 0)) >= 3;
};

const teamA = [true, true, true];
const teamB = [false, false, false];

makeShot(teamA, randomSeed(42));
console.log(gameOver(teamA, teamB));

(() => {})();
