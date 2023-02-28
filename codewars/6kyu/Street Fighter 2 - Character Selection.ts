// 
type Move = 'down'|'up'|'right'|'left'

function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
  function pushCurrFighter(){
    result.push(fighters[currPos[0]][currPos[1]])
  }
  
  let currPos = position.concat()
  let result: string[] = []
  
  for (let move of moves) {
    if (move === 'up') {
      currPos[0] === 0 ? currPos[0] = 0 : currPos[0] -= 1
      pushCurrFighter()
    } else if (move === 'down') {
        currPos[0] === 1 ? currPos[0] = 1 : currPos[0] += 1
        pushCurrFighter()
    } else if (move === 'right') {
        currPos[1] === fighters[0].length - 1 ? currPos[1] = 0 : currPos[1] += 1
        pushCurrFighter()
    } else if (move === 'left') {
        currPos[1] === 0 ? currPos[1] = fighters[0].length - 1 :  currPos[1] -= 1
        pushCurrFighter()
    }
  }
  return result
}