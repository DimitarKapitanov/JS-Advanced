function echo(inputAsString) {
  let stringLength = inputAsString.length;
  console.log(stringLength);
  console.log(inputAsString);
}
echo("Hello, JavaScript!");

function printResult(input) {
  console.log(input.length);
  console.log(input);
}
printResult("Gosho");

function calculateString(arg1, arg2, arg3) {
  let sum = arg1.length + arg2.length + arg3.length;
  let avgSum = Math.floor(sum / 3);

  console.log(sum);
  console.log(avgSum);
}

calculateString("pasta", "5", "22.3");

function largestNumber(arg1, arg2, arg3) {
  if (arg1 > arg2 && arg1 > arg3) {
    console.log(`The largest number is ${arg1}.`);
  } else if (arg2 > arg3) {
    console.log(`The largest number is ${arg2}.`);
  } else {
    console.log(`The largest number is ${arg3}.`);
  }
}

largestNumber(-3, -5, -22.5);

function radius(input) {
  let type = typeof input;

  if (type === "number") {
    let result = Math.pow(input, 2) * Math.PI;

    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}

radius(3);

function result(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "%":
      console.log(num1 % num2);
      break;
    case "**":
      console.log(num1 ** num2);
      break;
  }
}

result(1, 2, "/");

function sumOfNumber(n, m) {
  let currSum = 0;
  for (let startNumber = Number(n); startNumber <= Number(m); startNumber++) {
    currSum += startNumber;
  }

  console.log(currSum);
}

sumOfNumber(-8, 20);

function dayOfWeek(day) {
  switch (day) {
    case "Monday":
      console.log(1);
      break;
    case "Tuesday":
      console.log(2);
      break;
    case "Wednesday":
      console.log(3);
      break;
    case "Thursday":
      console.log(4);
      break;
    case "Friday":
      console.log(5);
      break;
    case "Saturday":
      console.log(6);
      break;
    case "Sunday":
      console.log(7);
      break;
    default:
      console.log("error");
      break;
  }
}

dayOfWeek("Friday");

function squareOfStars(input) {
  let inputChek;
  if (input == undefined || input == "") {
    inputChek = 5;
  }
  inputChek = input;
  for (let index = 0; index < inputChek; index++) {
    let tes = [];
    for (let index = 0; index < inputChek; index++) {
      tes.push("*");
    }
    console.log(tes.join(" "));
  }
}

squareOfStars(7);

function aggregateElements(input){
    
        let numbersArray = input.map(Number);
        let sum = numbersArray.reduce((a, b) => a + b);
     
        let inverseValuesSum = 0;
     
        for (let i = 0; i < numbersArray.length; i++) {
            inverseValuesSum += 1 / numbersArray[i];
        }
     
        let stringConcat = numbersArray.join('');
     
        console.log(sum);
        console.log(inverseValuesSum);
        console.log(stringConcat);
    
} 

aggregateElements([2, 4, 8, 16])