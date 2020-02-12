function spiral(param1) {
    let res = [];
    let arr = [];
    let counter = 0;
    let startRow = 0;
    let endRow = param1 - 1;
    let startCol = 0;
    let endCol = param1 - 1;

    for (let i = 0; i < param1; i++) {
        arr[i] = [];
        for (let j = 0; j < param1; j++) {
            arr[i][j] = counter++;
        }
    }

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            res.push(arr[startRow][i]);
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            res.push(arr[j][endCol]);
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            res.push(arr[endRow][i]);
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            res.push(arr[i][startCol]);
        }
        startCol++;
    }
    console.log(res);
    return arr;
}

spiral(5);
spiral(6);
spiral(7);