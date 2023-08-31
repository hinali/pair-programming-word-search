//                   [array]/"WORD"
const wordSearch = (letters, word) => {
    // Sort -> Vertical
    let results = [];
    for (let col = 0; col < letters[0].length; col++) {
      const newArray = [];
      for (let row = 0; row < letters.length; row++) {
        newArray.push(letters[row][col]);
      }
      results.push(newArray);
    }
    // console.log("results:", results);
    // Check Vertical
    const verticalJoin = results.map(ls => ls.join(''));
    for (const l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    // Check Horizontal
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
    
  };
  
  
  module.exports = wordSearch;