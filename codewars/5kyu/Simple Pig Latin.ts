// 

const pigIt = (a: string): string =>  {
  let wordsArr = a.split(' ')
  let result: string[] = []
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].match(/[a-z]/ig)) {
      if (wordsArr[i].length < 2) {
        result.push(`${wordsArr[i]}ay`)
      } else {
        let firstLetter = wordsArr[i][0]
        let newWord = `${wordsArr[i].substring(1)}${firstLetter}ay`
        result.push(newWord)
      }
    } else {
      result.push(wordsArr[i])
    }
  }
  return result.join(' ')
}