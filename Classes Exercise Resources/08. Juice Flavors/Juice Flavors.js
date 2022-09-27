function solve(arr = []) {
    class Juice {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = Number(quantity);
            this.bottles = 0
        }
    }

    const bottles = [];
    const resultbottles = [];

    for (const i of arr) {
        let [name, quantity] = i.split(' => ');

        const juice = new Juice(name, quantity);

        if (bottles.find(e => e.name === name)) {
            bottles.find(e => e.name === name).quantity += Number(quantity);
        } else {
            bottles.push(juice);
        }

        let currBottles = bottles.find(b => b.name == name);
        currBottles.bottles += parseInt(currBottles.quantity / 1000);
        currBottles.quantity %= 1000

        if (currBottles.bottles > 0) {
            if (!resultbottles.find(e => e.name === currBottles.name)) {
                resultbottles.push(currBottles);
            }
        }
    }

    for (const i of resultbottles) {
        console.log(`${i.name} => ${i.bottles}`);
    }
}


solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);