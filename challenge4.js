function indexPrime(param1) {
    var prima = 2;
    var count = 0;
    var isPrime;

    while (count < param1) {
        isPrime = true;
        for (var i = 2; i < prima; i++) {
            if (prima % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            count++;
        }
        prima++;
    }
    return prima - 1;
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));



