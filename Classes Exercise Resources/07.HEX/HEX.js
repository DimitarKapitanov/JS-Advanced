class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    plus(number) {
        return new Hex(this.value + number.value);
    }

    minus(number) {
        return new Hex(this.value - number.value);
    }

    parse(string) {
        return parseInt(string, 16);
    }

    toString() {
        let result = '0x' + this.value.toString(16).toUpperCase();
        return result;
    }
}

//let Hex = result;
let FF = new Hex(255);
// assert.instanceOf(FF,Hex);
// assert.equal(FF.valueOf(),255);

let act = FF.toString();
let exp = "0xFF";
// assert.equal(act,exp);

// assert.isTrue(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";
// assert.equal(act2,exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
// assert.equal(act3,exp3);


// let FF = new Hex(255);
// console.log(FF.toString());
// console.log(FF.valueOf() + 1 == 256);
// let a = new Hex(10);
// let b = new Hex(5);
// a.toString();
// console.log(a.minus(b).toString());
// console.log(a.plus(b).toString() === '0xF');
// console.log(FF.parse('AAA'));
// let c = new Hex(155);
// console.log(a.plus(c).toString());

