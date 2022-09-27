function generator() {

    let a = 0, b = 1, c = 0;

    return function solve() {
        if (c < 1) {
            c = a + b;
            a = b;
            b = c;
            return a;
        } else {
            c = a + b;
            a = b;
            b = c;
            return a;
        }
    }
}

let fib = generator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
