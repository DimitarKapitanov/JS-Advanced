class Stringer {
    constructor(stringInput, length) {
        this.innerString = stringInput;
        this.innerLength = length //The length property is a numeric value and should not fall below 0.
        // It should not throw any errors, but if an attempt to decrease it below 0 is done, it should be automatically set to 0.
        this.tempInnerString = this.innerString;
    }

    decrease(value) {
        if (this.innerLength - value < 0) {
            this.tempInnerString = '...';
            this.innerLength = 0;
            return this.tempInnerString;
        } else {
            this.innerLength -= value;
            this.tempInnerString = '';
            for (let i = 0; i < this.innerLength; i++) {
                this.tempInnerString += this.innerString[i];
            }
            return this.tempInnerString+='...';
        }
    }

    increase(value) {
        this.innerLength += value;
        if(this.tempInnerString == '...'){
            this.tempInnerString = '';
        }
        for (let i = 0; i < this.innerLength; i++) {
            this.tempInnerString += this.innerString[i];
        }
        return this.tempInnerString;
    }

    toString() {
        return this.tempInnerString;
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
