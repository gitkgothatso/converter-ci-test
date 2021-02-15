const expect = require("chai").expect;
const converter = require("../app/converter");


describe('Color code converter',function(){
    describe('RBG to Hex conversion',function(){
        it('Convert basic colors',function(){
            const red = converter.rgbToHex(255,0,0);
            const green = converter.rgbToHex(0,255,0);
            const blue = converter.rgbToHex(0,0,255);

            expect(red).to.equal("ff0000");
            expect(green).to.equal("00ff00");
            expect(blue).to.equal("0000ff");
        });
    });

    describe('Hex to RBG conversion', function(){
        it('Convert basic colors',function(){
            const red = converter.hexToRGB("ff0000");
            const green = converter.hexToRGB("00ff00");
            const blue = converter.hexToRGB("0000ff");

            expect(red).to.deep.equal([255,0,0]);
            expect(green).to.deep.equal([0,255,0]);
            expect(blue).to.deep.equal([0,0,255]);
        });
    });
});