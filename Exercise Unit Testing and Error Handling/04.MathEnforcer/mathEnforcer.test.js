const {expect} = require('chai');
const {mathEnforcer} = require('./mathEnforcer');

describe('Testing mathEnforcer', ()=>{
    describe('addFive', () => {
        it('return corect answer', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(-5.1)).to.be.equal(-0.09999999999999964);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(0.1)).to.be.equal(5.1);
            expect(mathEnforcer.addFive('0')).to.be.undefined;
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
    });
    describe('subtractTen', () => {
        it('return corect answer', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            expect(mathEnforcer.subtractTen(-5.1)).to.be.equal(-15.09999999999999964);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(0.1)).to.be.equal(-9.9);
            expect(mathEnforcer.subtractTen('0')).to.be.undefined;
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
    });
    describe('subtractTen', () => {
        it('return corect answer', () => {
            expect(mathEnforcer.sum(10,5)).to.be.equal(15);
            expect(mathEnforcer.sum(-5,-10)).to.be.equal(-15);
            expect(mathEnforcer.sum(-5.1,-5.1)).to.be.equal(-10.2);
            expect(mathEnforcer.sum(0,0)).to.be.equal(0);
            expect(mathEnforcer.sum(0.1,0.1)).to.be.equal(0.2);
            expect(mathEnforcer.sum('0',0)).to.be.undefined;
            expect(mathEnforcer.sum(0,'a')).to.be.undefined;
            expect(mathEnforcer.sum(0)).to.be.undefined;
        });
    });
});