function evenPositionElement(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (i % 2 != 0) {
            continue;
        }

        result.push(input[i]);
    }

    console.log(result.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60'])

function lastKNumbersSequence(n, k) {
    const arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {
            sum += arr[j];
        }

        arr[i] = sum;
    }

    return arr;
}

lastKNumbersSequence(6, 3);

function firstLast(input) {
    const sum = Number(input[0]) + Number(input[input.length - 1]);

    console.log(sum);
}

firstLast(['20', '30', '40']);
firstLast(['5', '10']);

function negativePositiveNumbers(input) {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (element >= 0) {
            result.push(element);
            continue;
        }

        result.unshift(element);
    }

    console.log(result.join('\r\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

function smallestTwoNumbers(input) {
    input.sort(function (a, b) { return a - b });
    const result = [input[0], input[1]];
    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);



function pieceOfPie(pieArray, startSection, endSection) {
    const startIndex = pieArray.indexOf(startSection);
    const endIndex = pieArray.indexOf(endSection);
    const result = [];

    for (let i = startIndex; i <= endIndex; i++){
        result.push(pieArray[i]);
    }

    return result;
}

pieceOfPie(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie');