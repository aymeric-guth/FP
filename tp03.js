const countries = require("./data/countries.json");

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

[
  ["Hellas Verone", "Atlanta", 4.15, 3.55, 1.85],
  ["Empoli", "Salernitana", 2.4, 3.25, 3.1],
  ["PSV Eindhoven", "GOAhead Eagles", 1.12, 6.9, 11.5],
  ["Real Madrid", "Las Palmas", 1.18, 7.5, 15.0],
  ["Ath. Bilbao", "Getafe", 1.61, 3.55, 6.3],
  ["Villareal", "Gerone", 2.2, 3.6, 3.05],
  ["A. Demirspor", "Besiktas", 3.05, 3.6, 1.94],
  ["Olympiakos", "Aris Salonique", 1.31, 4.0, 7.9],
  ["SC Farense", "CD Tondela", 1.59, 3.5, 4.85],
  ["Lazio Rome", "Torino", 2.15, 3.25, 3.5],
  ["Liverpool", "Leicester", 1.37, 4.75, 6.3],
];
