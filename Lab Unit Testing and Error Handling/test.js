const { expect } = require('chai');
const { sum } = require('./Unit Testing/sumNumbers');


describe('Test Suite', () => {
    it('test1', () => {
        expect(sum(['5','3'])).to.equal(8);
    });

});

