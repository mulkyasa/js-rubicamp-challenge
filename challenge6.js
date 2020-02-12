function stringManipulation(word) {
    var vowel = "aiueo";
    var newWord;

    if (vowel.includes(word[0])) {
        return word;
    } else {
        newWord = word.slice(1, word.length).concat(word[0], 'nyo');
        return newWord;
    }
}

function sentenceManipulation(sentence) {
    var word = sentence.split(" ");
    var hasil = [];
    
    for (let i = 0; i < word.length; i++) {
        hasil.push(stringManipulation(word[i]))
    }
    console.log(hasil.join(" "))
}

sentenceManipulation('ibu pergi ke pasar bersama aku');