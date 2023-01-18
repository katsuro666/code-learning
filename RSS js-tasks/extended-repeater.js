/* Your task is to implement the function repeater(str, options). This function returns a repeating string based on the given parameters:

str is a string to repeat;

options is an object of options, that contains properties:

repeatTimes sets the number of repetitions of the str;

separator is a string separating repetitions of the str;

addition is an additional string that will be added to each repetition of the str;

additionRepeatTimes sets the number of repetitions of the addition;

additionSeparator is a string separating repetitions of the addition. */
/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let repeatTimes = 1
  let separator = '+'
  let addition = ''
  let additionRepeatTimes = 1
  let additionSeparator = '|'

  for (keys in options) {
    switch(keys) {
      case 'repeatTimes': repeatTimes = options.repeatTimes;
        break;
      case 'separator': separator = options.separator;
        break;
      case 'addition': addition = options.addition;
        break;
      case 'additionRepeatTimes': additionRepeatTimes = options.additionRepeatTimes;
        break;
      case 'additionSeparator': additionSeparator = options.additionSeparator;
        break;
    }
  }

  let repeatedAddition = []
  for(let i = 0; i < additionRepeatTimes; i++) {
    if (addition === null) {
      repeatedAddition.push('null')  
    } else {
    repeatedAddition.push(addition)
    }
  }
  
  let repeatedAdditionStr = repeatedAddition.join(additionSeparator)

  let strToRepeat = `${str}${repeatedAdditionStr}`

  let toRepeat = []
  for (let i = 0; i < repeatTimes; i++) {
    toRepeat.push(strToRepeat)
  }

  return toRepeat.join(separator)
}