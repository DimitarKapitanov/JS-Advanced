const { expect } = require('chai');
const { rgbToHexColor } = require('./RGBToHex');

describe('RGB to Hex', () => {
    it('Is not corect format', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('Is out of range with positive numbers', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('Is out of range with negative numbers', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('Is return corect rgb', () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    it('Is return black rgb', () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    it('Is not corect format', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');

    });
    it('Is not worck with floating point number', () => {
        expect(rgbToHexColor(0.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 0.1)).to.be.undefined;

    });

    it('Convert 15,15,15 to #0F0F0F', () => {
        expect(rgbToHexColor(15, 15, 15)).to.be.equal('#0F0F0F');
    });
});