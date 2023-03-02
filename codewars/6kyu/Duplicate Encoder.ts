// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word: string){
  let wordArr = word.toLowerCase().split('')
  let result: string[]= []
  for (let i = 0; i < word.length; i++)     {
    let countLetters = wordArr.filter(item => word[i].toLowerCase() === item)
    if (countLetters.length > 1) {
      result.push(')')
    } else {
      result.push('(')
    }
  }
return result.join('')
}