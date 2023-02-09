// In this kata, you must define the Array.reduce method.

Array.prototype.reduce = function(process, initial) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    initial = this[0];
  }
  for(; i < this.length; i++) {
    initial = process(initial, this[i], i, this);
  }
  return initial;
}