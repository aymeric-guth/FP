const countries = require("./data/countries.json");

const map = (it, fn) => {
  const buff = [];
  for (const item of it) {
    buff.push(fn(item));
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

// 1. Quelle équipe a remporté le plus de Coupe du Monde ?
let finalistes = filter(countries, (country) => {
  return country.finals !== undefined && country.finals.length > 0;
});

console.log(finalistes);

// 2. Quelle équipe a joué le plus de finale de Coupe du Monde ?
// 3. Quelle équipe a perdu le plus de finales de Coupe du Monde ?
// 4. Quelle équipe a le meilleur taux de participation couplé au meilleur taux de réussite en finale de Coupe du Monde ?
// 5. Quel est le classement descendant des finalistes (par ordre de victoires et de p// articipations à une finale de Coupe du Monde) ?
// 6. Quel pays a disputé le plus de finales de Coupe du Monde ?
// 7. Quel pays a marqué le plus de buts en finale de Coupe du Monde ?
// 8. Quel pays a encaissé le plus de buts en finale de Coupe du Monde ?
// 9. Combien de finales se sont terminées après la séance de tirs au but ?
// 10. Quel continent a remporté le plus de Coupe du Monde ?
// 11. Quel continent a accueilli le plus d'éditions de la Coupe du Monde ?
// 12. Quel pays a accueilli le plus d'éditions de la Coupe du Monde ?
// 13. Au total, combien de buts ont été inscrits en finale de Coupe du Monde durant le temps réglementaire (hors prolongation et séance de tirs au but), toutes éditions confondues ?
// 14. Au total, combien de spectateurs ont assisté à une finale de Coupe du Monde, toutes éditions confondues ?
// 15. Quel stade a accueilli le plus de spectateurs au cours d'une finale de Coupe du Monde ?
