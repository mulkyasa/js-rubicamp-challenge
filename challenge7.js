function weirdMultiply(sentence) {
    const num = sentence.toString().split('');
    
    if (num.length !== 1) {
        let res = num.reduce((m, n) => m * n);
        return weirdMultiply(res);
    }
    return sentence;
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));