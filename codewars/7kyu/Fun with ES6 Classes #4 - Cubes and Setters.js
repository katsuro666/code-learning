// For cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.
// Task
// Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

class Cube {
  constructor(length) {
    this.length = length
  }
  get volume() {
    return Math.pow(this.length, 3)
  }
  set volume (arg) {
    this.length = Math.cbrt(arg)
  }
  get surfaceArea() {
    return Math.pow(this.length, 2) * 6
  }
  set surfaceArea(arg) {
    this.length = Math.sqrt(arg / 6)
  }
}