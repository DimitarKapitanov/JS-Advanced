class List {
    constructor() {
        this.array = [];
        this.size = 0;
    }
    add(element) {
        this.array.push(Number(element));
        this.array.sort((a, b) => a - b);
        this.size++
    }
    get(index) {
        return this.array[index];
    }
    remove(index) {
        if (index > this.array.length-1 || index < 0 || this.array.length == 0) {
            throw new Error();
        }
        this.size--;
        return this.array.splice(index, 1);
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
