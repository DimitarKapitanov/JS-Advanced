function solution() {
    const ingredients = {
        'carbohydrate': 0,
        'flavour': 0,
        'fat': 0,
        'protein': 0
    };
    const recipes = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1 },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }
    };
    return function solve(input) {
        const [comand, type, quantity] = input.split(' ');

        if (comand === 'restock') {
            return restock();
        } else if (comand == 'prepare') {
            return prepare();
        } else if (comand == 'report') {
            return report();
        }

        function restock() {
            ingredients[type] += Number(quantity);
            return 'Success';
        }
        function prepare() {
            let deductedQuantity = {};
            for (const key in recipes[type]) {
                let needetIngrediance = recipes[type][key] * Number(quantity);
                if (ingredients[key] < needetIngrediance) {
                    return `Error: not enough ${key} in stock`
                }
                deductedQuantity[key] = ingredients[key] - recipes[type][key] * Number(quantity);
            }
            for (const key in deductedQuantity) {
                ingredients[key] = deductedQuantity[key];
            }
            return 'Success';
        }
        function report() {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }
    }
}

let manager = solution();


// console.log(manager('restock flavour 50'));
// console.log(manager('report'));

// console.log(manager('prepare lemonade 4'));
// console.log(manager('report'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('report'));
// console.log(manager('restock flavour 10'));
// console.log(manager('report'));
// console.log(manager('prepare apple 1'));
// console.log(manager('report'));
// console.log(manager('restock fat 10'));
// console.log(manager('report'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));

