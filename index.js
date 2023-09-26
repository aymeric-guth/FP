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

// qui ont au moins remporté une finale,
let finalistes = reduce(countries, (country) => country.finals.length !== 0);

const getFinalistes = (countries) => {
  return countries.filter((country) => country.finals.length !== 0);
};

// qui ont remporté chacune des finales qu'ils ont joué,
countries.map((country) => country.finals.length === country.victories.length);

const getAllWonFinals = (countries) => {
  return countries.filter(
    (country) => country.finals.length === country.victories.length,
  );
};

// qui ont participé à une finale sans jamais en remporter,
countries.map(
  (country) => country.finals.length > 0 && country.victories.length === 0,
);

const getNoWonFinals = (countries) => {
  return countries.filter(
    (country) => country.finals.length > 0 && country.victories.length === 0,
  );
};

// qui ont à la fois remporté au moins une finale ET perdu au moins une finale.
countries.map(
  (country) =>
    country.victories.length > 0 &&
    country.finals.length > country.victories.length,
);

const getWonAndLooseFinals = (countries) => {
  return countries.filter(
    (country) =>
      country.victories.length > 0 &&
      country.finals.length > country.victories.length,
  );
};
