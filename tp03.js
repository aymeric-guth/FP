const countries = require("./data/countries.json");

const map = (it, fn) => {
  const buff = [];
  for (const item of it) {
    buff.push(fn(item));
  }
  return buff;
};

const reduce = (it, fn) => {
  const buff = [];
  for (const item of it) {
    if (fn(item)) {
      buff.push(item);
    }
  }
  return buff;
};

const filter = (it, fn) => {
  const buff = [];
  for (const item of it) {
    if (fn(item)) {
      buff.push(item);
    }
  }
  return buff;
};

const reduce = (it, fn, init) => {
  let acc = init;
  for (const item of it) {
    acc = fn(item, acc);
  }
  return acc;
};
