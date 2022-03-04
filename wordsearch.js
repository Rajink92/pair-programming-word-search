const wordSearch = (letters, word) => { 
    if (letters.length < 1 || word.length < 1)  return false;
    const horizontalJoin = letters.map(ls => ls.join(''));
    const vertJoin = letters[0].map((col, index)) =>
        letters.map((row) => row[index])
    );

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}

module.exports = wordSearch