// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

export const listSquared = (m: number, n: number): number[][] => {
  function divisorsOf(x: number) {
    const divisors: number[] = []
    for (let i = 1; i <= x; i++) {
      if (!(x % i)) {
        divisors.push(i)
      }
    }
    return divisors
  }

  let res: number[][] = []

  for (let i = m; i <= n; i++) {
    const divs = divisorsOf(i)
    const sumOfSquaredDivs = divs.reduce((acc, item) => acc += Math.pow(item, 2))
    if (Number.isInteger(Math.sqrt(sumOfSquaredDivs))) {
      res.push([i, sumOfSquaredDivs])
    }
  }

  return res;
}