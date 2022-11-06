function makePerson(first, last, age) {
  return {
    first,
    last,
    age,
    height: 54,
  };
}
// const mathStuff = {
//   x: 200,
//   add: function (a, b) {
//     return a + b;
//   },
//   square: function (a) {
//     return a * a;
//   },
// };

const mathStuff = {
  x: 200,
  add(a, b) {
    return a + b;
  },
  square(x) {
    return x * x;
  },
};
const otherStuff = { ...mathStuff };

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}
const favoriteNumber = 42;
const instructor = {
  firstName: 'colt',
  [favoriteNumber]: 'That is my favorite!',
};
const instructor1 = {
  firstName: 'Ryan',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};
// Originally wrote this way.
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]: () => {
      return noise;
    },
  };
}
// function createAnimalSolution(species, verb, noise) {
//   return {
//     species,
//     [verb]() {
//       return noise;
//     },
//   };
// }

function createAnimal2(species, verb, noise) {
  return {
    species,
    [verb]: noise,
  };
}
// What would be usage difference comparing createAnimal vs. createAnimal2.
const d = createAnimal('dog', 'bark', 'Woooof!');
// d.bark = 'Woof!';
const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// s.bleet = 'BAAAaaa';
const d2 = createAnimal2('dog', 'bark', 'Woooof!');
// d.bark = 'Woof!';
const s2 = createAnimal2('sheep', 'bleet', 'BAAAAaaaa');
// s.bleet = 'BAAAaaa';
