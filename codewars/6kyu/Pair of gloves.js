function numberOfPairs(gloves) {
  let wardrobe = []
  let pairs = 0
  for (let i = 0; i < gloves.length; i++) {
    if (wardrobe.includes(gloves[i])) {
      let index = wardrobe.indexOf(gloves[i])
      wardrobe.splice(index, 1)
      pairs += 1
    } else {
      wardrobe.push(gloves[i])
    }
  }
  return pairs
}