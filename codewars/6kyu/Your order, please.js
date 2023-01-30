/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est" */

function order(words){
  let arr = words.split(' ')
  let result = []
  for (let i = 1; i <= arr.length; i++) {
    arr.find(item => {
      if (item.includes(i.toString())) {
        result.push(item)
      }
    })
  }
  return result.join(' ')
}