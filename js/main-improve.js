const human = {
  species: 'human',
  create(values) {
    const instance = Object.create(this);
    Object.keys(values).forEach((key) => {
      instance[key] = values[key];
    });
    return instance;
  },
  saySpecies() {
    console.log(this.species);
  },
  sayName() {
    console.log(this.name);
  },
};

const musician = human.create({
  species: 'musician',
  playInstrument() {
    console.log(`plays... ${this.instrument}`);
  },
});

const yamit = musician.create({
  name: 'Yamit',
  instrument: 'Guitar',
});

console.log(yamit.playInstrument()); // plays... Guitar
console.log(yamit.sayName()); // Yamit
console.log(yamit.saySpecies()); // musician
