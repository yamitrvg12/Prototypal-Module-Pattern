const human = {
  species: 'human',
  saySpecies() {
    console.log(this.species);
  },
  sayName() {
    console.log(this.name);
  },
};

const musician = Object.create(human);

musician.playInstrument = function () {
  console.log(`plays... ${this.instrument}`);
};

const yamit = Object.create(musician);
yamit.name = 'Yamit';
yamit.instrument = 'Drums';

console.log(yamit.species); // human
console.log(yamit.saySpecies()); // human
console.log(yamit.sayName()); // Yamit
console.log(yamit.playInstrument()); // plays... Drums

human.species = 'homo sapiens';
console.log(yamit.species); // homo sapiens
console.log(yamit.saySpecies()); // homo sapiens
