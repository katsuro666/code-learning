// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// camelCase("hello case"); // => "HelloCase"
// camelCase("camel case word"); // => "CamelCaseWord"

function camelCase(str: string): string {
  let wordsArr: string[] = str.split(' ')
  let result: string = ''
  for (let i = 0; i < wordsArr.length; i++) {
    let firstLetter: string = wordsArr[i].substring(0, 1).toUpperCase()
    let word: string = firstLetter + wordsArr[i].substring(1)
    result += word
  }
  return result
}