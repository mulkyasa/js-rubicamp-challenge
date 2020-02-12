function deretKaskus(n) {
    var b = [];
    for (let i = 3; i <= n * 3; i+=3) {
        if (i % 5 === 0 && i % 6 === 0) {
            b.push('KASKUS');
        } else if (i % 6 === 0) {
            b.push('KUS');
        } else if (i % 5 === 0) {
            b.push('KAS');
        } else {
            b.push(i);
        }     
    } 
    return b;
}

console.log(deretKaskus(10));