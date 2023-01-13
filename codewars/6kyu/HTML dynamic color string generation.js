/* Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits. */

function generateColor() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    let number1 = getRandomInt(0, 15).toString(16)
    let number2 = getRandomInt(0, 15).toString(16)
    let number3 = getRandomInt(0, 15).toString(16)
    let number4 = getRandomInt(0, 15).toString(16)
    let number5 = getRandomInt(0, 15).toString(16)
    let number6 = getRandomInt(0, 15).toString(16)
    return `#${number1}${number2}${number3}${number4}${number5}${number6}`
  };