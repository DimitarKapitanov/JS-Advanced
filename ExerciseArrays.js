function printAnArrayWithAGivenDelimiter(arr, delimiter) {
    console.log(arr.join(delimiter));
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');

function nthElementFromAnArray(arr, step) {
    const result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    return result;
}

nthElementFromAnArray(['5', '20', '31', '4', '20'], 2);

function addAndRemoveElements(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
        } else if (arr[i] === 'remove') {
            result.pop(i - 1);
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    }
    console.log(result.join('\r\n'));
}

addAndRemoveElements(['add', 'add', 'add', 'add']);

function rotateArray(arr, rotate) {

    for (let i = 0; i < rotate; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);

function extractIncreasingSubsetFromArray(input) {
    let curNumber = 0;
    const result = [];
    let bigestNumb = 0;

    for (let i = 0; i < input.length; i++) {
        curNumber = input[i];
        if (curNumber >= bigestNumb) {
            bigestNumb = curNumber;
            result.push(bigestNumb);
        }
    }
    return result;
}

extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);

function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < input.length; i++) {
        console.log(`${i + 1}.${input[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

function sortingNumbers(input) {
    input.sort((a, b) => a - b);
    const result = [];

    while (input.length > 0) {
        let firstElement = input.shift();
        let secondElement = input.pop();
        result.push(firstElement);
        result.push(secondElement);
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

function sortAnArrayBy2Criteria(input) {
    const result = [];
    input.sort((function (a, b) {
        return a.length - b.length || a.localeCompare(b)
    }));

    console.log(input.join('\r\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);

function magicMatrices(input) {
    let curSum = 0;
    let nextSum = 0;

    let isEqual = true;

    for (let row = 0; row < input.length - 1; row++) {
        curSum = input[row].reduce((a, b) => a + b);
        nextSum = input[row].reduce((a, b) => a + b);

        if (curSum !== nextSum) {
            isEqual = false;
            break;
        }
    }

    if (isEqual) {
        for (let row = 0; row < input.length-1; row++) {
            curSum = 0;
            nextSum = 0;

            for (let col = 0; col < input.length; col++) {
                curSum += input[col][row];
                nextSum += input[col][row +1];
            }

            if (curSum !== nextSum) {
                isEqual = false;
                break;
            }
        }
    }

    console.log(isEqual);
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );