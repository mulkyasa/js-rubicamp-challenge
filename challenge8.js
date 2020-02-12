function pola(str) {
    var num = str.split(' ');
    var res = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if(parseInt(num[0].replace(/#/, i)) * parseInt(num[2]) === parseInt(num[4].replace(/#/, j))){
                res.push(i, j);
            }
        }
    }
    return res;
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));