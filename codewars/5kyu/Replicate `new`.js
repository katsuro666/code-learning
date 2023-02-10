// Your mission: write a function nouveau (that's French for "new") which takes one function parameter (the constructor), plus an unknown number of additional parameters of any type (arguments for the constructor). When invoked, nouveau should do everything new does and return the same object new would evaluate to, as specified above.

// var john = nouveau(Person, 'John', 30); // same result as

function nouveau(Constructor, ...args) {
  let newObj = Object.create(Constructor.prototype);
  let result = Constructor.apply(newObj, args);
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result;
  }
  return newObj;
}