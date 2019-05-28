var expect = require('chai').expect;
var navigationFooterResult = require('../src/navigation-footer');

describe('navigation footer', function () {

    it('Check if arguments are numbers', function () {
        expect(navigationFooterResult.footer(Number, Number, Number, Number));
    });

    it('Check inBoundaries result and if arguments are numbers', function () {
        expect(navigationFooterResult.inBoundaries(Number, Number, Number));
        expect(navigationFooterResult.inBoundaries(3, 1, 5)).equal(false);
        expect(navigationFooterResult.inBoundaries(2, 2, 2)).equal(true);
    });

    it('Check aroundCurrent result and if arguments are numbers', function () {
        expect(navigationFooterResult.aroundCurrent(Number, Number, Number));
        expect(navigationFooterResult.aroundCurrent(3, 1, 1)).equal(false);
        expect(navigationFooterResult.aroundCurrent(2, 1, 1)).equal(true);

    });

    it('Check currentPage result and if arguments are numbers', function () {
        expect(navigationFooterResult.currentPage(Number, Number));
        expect(navigationFooterResult.currentPage(1, 2)).equal(false);
        expect(navigationFooterResult.currentPage(1, 1)).equal(true);
    });

    it('Check if showPage argument is a number', function () {
        expect(navigationFooterResult.showPage(Number));
    });

});