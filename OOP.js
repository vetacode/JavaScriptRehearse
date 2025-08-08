//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

//OOP Polimorphism Example
const door = {
  bell: function () {
    return 'Ding Dong!';
  },
};

console.log(door.bell()); // 'Ding Dong!'

function ringBell(anything) {
  console.log(anything.bell());
}

ringBell(door);

console.log('abc'.concat('def')); // 'abcdef'
console.log(['abc'].concat(['def'])); // ['abc', 'def']

//using the + operator with arrays does not perform true concatenation. Instead, it coerces the arrays into strings before joining them and elements are separated by commas.
console.log(['abc'] + ['def']); // "abc,def");

class Bird {
  useWings() {
    console.log('Flying!');
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log('Barely flapping!');
  }
}
class Penguin extends Bird {
  useWings() {
    console.log('Diving!');
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// create your classes here
class FeedAdd {
  gutEnhancer() {
    console.log('Dry Feces, Great Performance');
  }
}

class ButyricAcid extends FeedAdd {
  gutEnhancer() {
    super.gutEnhancer();
    console.log('Regenerative Villi');
  }
}

class Probiotics extends FeedAdd {
  gutEnhancer() {
    console.log('Competitive Exclusion');
  }
}

const globamax = new ButyricAcid();
const calsporin = new Probiotics();

globamax.gutEnhancer();
calsporin.gutEnhancer();
