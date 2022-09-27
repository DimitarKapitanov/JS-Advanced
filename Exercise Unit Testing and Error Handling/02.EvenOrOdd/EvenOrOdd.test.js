const { expect } = require('chai');
const { isOddOrEven } = require('./EvenOrOdd');

describe('Get even or odd elements', () => {
    it('Test odd lenght', () => {
        expect(isOddOrEven('asd')).to.be.equal('odd');
    });
    it('Test even lenght', () => {
        expect(isOddOrEven('adaa')).to.be.equal('even');
    });
    it('Test wihtn non string type', () => {
        expect(isOddOrEven(123)).to.be.undefined;
    });
    it('Test wihtn non string type', () => {
        expect(isOddOrEven({123:""})).to.be.undefined;
    });
    it('Test wihtn non string type', () => {
        expect(isOddOrEven({123:""})).to.be.undefined;
    });
});