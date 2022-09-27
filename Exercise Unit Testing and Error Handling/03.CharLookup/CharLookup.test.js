const { expect } = require('chai');
const { lookupChar } = require('./CharLookup');

describe('Testing Char look up', ()=>{
    it('Reurn incorrect index', ()=>{
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    });
    it('Reurn incorrect index', ()=>{
        expect(lookupChar('test', 15)).to.be.equal('Incorrect index');
    });
    it('Reurn incorrect index', ()=>{
        expect(lookupChar('test', 4)).to.be.equal('Incorrect index');
    });
    it('Reurn incorrect index', ()=>{
        expect(lookupChar('test', -1)).to.be.equal('Incorrect index');
    });
    it('Return undefined when is type is not string', ()=>{
        expect(lookupChar(1, 5)).to.be.undefined;
    });
    it('Return undefined when index is not integer', ()=>{
        expect(lookupChar('as', '0')).to.be.undefined;
    });
    it('Return undefined when index is floating-point number', ()=>{
        expect(lookupChar('1', 0.2)).to.be.undefined;
    });
    it('Return undefined when type is not string', ()=>{
        expect(lookupChar(1, '5')).to.be.undefined;
    });
    it('Return corect ansawar top index', ()=>{
        expect(lookupChar('test', 3)).to.be.equal('t');
    });
    it('Return corect ansawar bottom index', ()=>{
        expect(lookupChar('test', 2)).to.be.equal('s');
    });
    it('Return undefined when index is lether', ()=>{
        expect(lookupChar('test', 'a')).to.be.undefined;
    });
    it('Return undefined when index is lether', ()=>{
        expect(lookupChar('test')).to.be.undefined;
    });
    it('Return undefined when index is lether', ()=>{
        expect(lookupChar()).to.be.undefined;
    });
});

