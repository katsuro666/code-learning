// In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

// garfield = new Cat('garfield', 25);
// Cat.averageWeight(); // 25

// felix = new Cat('felix', 15);
// Cat.averageWeight();   // now 20
// But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

// felix.weight = 25;
// felix.weight // 25
// Cat.averageWeight(); // now 25

// Summary of requirements:
// Cat constructor, requiring arguments for name and weight
// Throw an error if name or weight not specified when invoking the constructor.
// Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
// Must use Object.defineProperty

let Cat = (function () {
  const cats = []

  const constructor = function (name, weight) {
    if (!name || !weight) throw new Error('invalid parameters')
    Object.defineProperty(this, 'name', { get: () => name })
    Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
    cats.push(this)
  }

  constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length

  return constructor
}())