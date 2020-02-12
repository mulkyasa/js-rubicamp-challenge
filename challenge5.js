function stringManipulation(word) {
    var vowel = "aiueo";
    var newWord;

    if (vowel.includes(word[0])) {
        console.log(word);
    } else {
        newWord = word.slice(1, word.length).concat(word[0], 'nyo');
        console.log(newWord);
    }
}

stringManipulation('ayam');
stringManipulation('bebek');