function subSum(arr, startIndex, endIndex) {

    let tempSum = 0;

    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (arr.length < Number(endIndex)) {
        endIndex = arr.length-1;
    }
    if (0 > Number(startIndex)) {
        startIndex = 0;
    }

    tempSum = arr.slice(startIndex, endIndex+1).map(Number).reduce((a,b)=>a+b,0);

    return tempSum;
}

console.log(subSum([10, 20, '30', 40, 50, 60], '3', 300));          //150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));          //3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2));              //NaN
console.log(subSum([], 1, 2));                                  //0
console.log(subSum('text', 0, 2));                              //NaN
