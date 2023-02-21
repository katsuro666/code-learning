// Given a list of integers and a single sum value, return the first two values (parse from the left please) 
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]

// My original solution was turned out to be too inefficient for huge arrays:

/* 
function sumPairs(ints: number[], s: number): [number, number] | void {  
  let results: number[] = []
  let index = 0
  ints.forEach((item, index) => {
    for (let i = index + 1; i < ints.length; i++) {
      if (item + ints[i] === s) {
        if (index === 0 || i < index) {
          index = i
          results.push(item, ints[i])
        }
      }
    }
  })
  if (results.length === 0) {
    return undefined
  } else {
    return [results[0], results[1]]
  }
} 
*/

function sumPairs(ints: number[], s: number): [number, number] | void {
  let seen = new Set()
  seen.add(ints[0])
  
  for (let i = 1; i < ints.length; ++i){
    let num = s - ints[i]
    if (seen.has(s - ints[i])) {
      return [num,ints[i]]
    }
    seen.add(ints[i])
  }
  return undefined
}