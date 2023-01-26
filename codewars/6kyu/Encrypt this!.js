/* Encrypt this!

You want to create secret messages which can be deciphered by the 'Decipher this!' kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */

let encryptThis = function(text) {
  let arr = text.split(' ')
  let result = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      let word = arr[i]
      let encryptedWord = `${word.charCodeAt(0)}${word[word.length - 1]}${word.slice(2, word.length - 1)}${word[1]}`
      result.push(encryptedWord)
    } else if (arr[i].length > 1) {
      result.push(`${arr[i].charCodeAt(0)}${arr[i][1]}`)
    } else {
      result.push(arr[i].charCodeAt(0))
    }
  }
  if (result.length > 1) {
    return result.join(' ')
  }
  return result.join('')
}