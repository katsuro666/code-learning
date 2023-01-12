function minSum(arr) {
    let sortedArr = arr.sort((a,b) => a - b)
    let res = 0
    for (let i = 0; i < arr.length / 2; i++) {
      res += arr[i] * arr[arr.length - 1 - i]
    }
    return res
  }