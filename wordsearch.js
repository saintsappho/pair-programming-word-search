const wordSearch = (letters, word) => {
  let newMatrix = []
  for (let i = 0; i < letters.length; i++) {
    let newArr = []
    for (let x = 0; x < letters[i].length; x++){
      newArr.push(letters[x][i]);
    }
    newMatrix.push(newArr)
  }
  const row1 = letters.map(items => items.join(''))
  for (item of row1) {
    if (item.includes(word)) return true
  } 
  const row2 = newMatrix.map(items => items.join(''))
  for (item of row2) {
    if (item.includes(word)) return true
  } 
  return false
} 
module.exports = wordSearch