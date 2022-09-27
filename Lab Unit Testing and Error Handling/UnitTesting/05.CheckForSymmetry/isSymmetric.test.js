const { isSymmetric } = require('./isSymmetric.js');
const { expect } = require('chai');

describe('Is Symmetric', () => {
    it('Is simetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('Is not symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('Is not array', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it('works with symmetric odd-lenth array',()=>{
        expect(isSymmetric([1,2,1])).to.be.true;
    });
    it('It is string array', ()=>{
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });
    it('Is string but not array', ()=>{
        expect(isSymmetric('abba')).to.be.false;
    });
    it('Is not same value array', ()=>{
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });
    it('Is not symmetric even array', ()=>{
        expect(isSymmetric([1,2,3,4,])).to.be.false;
    });
});