function fruit(fruitName, fruitWeightGrams, pricePerKilogram) {
  let fruitWeightKilogram = fruitWeightGrams / 1000;
  let neededMoney = fruitWeightKilogram * pricePerKilogram;

  console.log(
    `I need $${neededMoney.toFixed(2)} to buy ${fruitWeightKilogram.toFixed(
      2
    )} kilograms ${fruitName}.`
  );
}

fruit("apple", 1563, 2.35);

function getPreviousDay(y, m, d) {
  var date = new Date(y, m - 1, d);
  var oneDay = 24 * 60 * 60 * 1000; //86 400 000 milliseconds in one day
  var previousDate = new Date(date.getTime() - oneDay);
  console.log(
    previousDate.getFullYear() +
    "-" +
    (previousDate.getMonth() + 1) +
    "-" +
    previousDate.getDate()
  );
}

getPreviousDay(2016, 9, 30);

function roadRadar(speed, area) {
  let speedLimit = 0;
  if (area === "motorway") {
    speedLimit = 130;
    let speedOver = speed - speedLimit;
    let status = "";

    if (speedOver <= 20 && speedOver > 0) {
      status = "speeding";
    } else if (speedOver >= 21 && speedOver <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    if (Number(speed) <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      console.log(
        `The speed is ${speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  } else if (area === "interstate") {
    speedLimit = 90;
    let speedOver = speed - speedLimit;
    let status = "";

    if (speedOver <= 20 && speedOver > 0) {
      status = "speeding";
    } else if (speedOver >= 21 && speedOver <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    if (Number(speed) <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      console.log(
        `The speed is ${speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  } else if (area === "city") {
    speedLimit = 50;
    let speedOver = speed - speedLimit;
    let status = "";

    if (speedOver <= 20 && speedOver > 0) {
      status = "speeding";
    } else if (speedOver >= 21 && speedOver <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    if (Number(speed) <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      console.log(
        `The speed is ${speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  } else if (area === "residential") {
    speedLimit = 20;
    let speedOver = speed - speedLimit;
    let status = "";

    if (speedOver <= 20 && speedOver > 0) {
      status = "speeding";
    } else if (speedOver >= 21 && speedOver <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    if (Number(speed) <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      console.log(
        `The speed is ${speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");

function cookingByNumbers(
  number,
  operation1,
  operation2,
  operation3,
  operation4,
  operation5
) {
  let num = Number(number);
  const arr = [];
  arr.push(operation1);
  arr.push(operation2);
  arr.push(operation3);
  arr.push(operation4);
  arr.push(operation5);

  for (const op of arr) {
    if (op === "chop") {
      num /= 2;
    } else if (op === "dice") {
      num = Math.sqrt(num);
    } else if (op === "spice") {
      num += 1;
    } else if (op === "bake") {
      num *= 3;
    } else if (op === "fillet") {
      num *= 0.8;
    }
    console.log(num);
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");

function solve(a1, a2, a3, a4) {
  const input = [a1, a2, a3, a4];

  const firstPoint = [Number(input[0]), Number(input[1])];
  const secondPoint = [Number(input[2]), Number(input[3])];

  function distance(x1, y1, x2, y2) {

    const firstDistance = x1 - x2;
    const secondDistance = y1 - y2;

    const result = Math.sqrt(Math.pow(firstDistance, 2) + Math.pow(secondDistance, 2));
    return result;
  }

  function printResult(n, param1, param2) {
    param1 = param1.join(', ');
    param2 = param2.join(', ');

    if (n === parseInt(n)) {
      console.log(`{${param1}} to {${param2}} is valid`);
    } else {
      console.log(`{${param1}} to {${param2}} is invalid`);
    }
  }

  const a = Number(distance(...firstPoint, 0, 0));
  const b = Number(distance(...secondPoint, 0, 0));
  const c = Number(distance(...firstPoint, ...secondPoint));

  printResult(a, firstPoint, [0, 0]);
  printResult(b, secondPoint, [0, 0]);
  printResult(c, firstPoint, secondPoint);
}

solve(3, 0, 0, 4)
solve(2, 1, 1, 1)

function wordsUppercase(input) {

    let result = input.toUpperCase()
      .split(/[\W]+/)
      .filter(w => w.length > 0)
      .join(", ");
  
    console.log(result);
}
//[\s,.\?*-+=_)(*&^%$#@!]+
wordsUppercase('Hi, how are you?');
wordsUppercase('hello?');
wordsUppercase('Functions? in? JS? can be nested, i.e. hold other functions?');