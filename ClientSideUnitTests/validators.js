/// <reference path="vendor/mocha.js" />
/// <reference path="vendor/chai.js" />
/// <reference path="../Redington/js/validators.js"/>

describe('validators - isValidProbability', function () {
    describe('when you provide 0.3', function () {
        it('should return true', function () {
            var result = validators.isValidProbability(0.3);
            chai.assert.equal(result, true);
        });
    });
    describe('when you provide "0.3"', function () {
        it('should return true', function () {
            var result = validators.isValidProbability('0.3');
            chai.assert.equal(result, true);
        });
    });
    describe('when you provide 1.0', function () {
        it('should return true', function () {
            var result = validators.isValidProbability(1.0);
            chai.assert.equal(result, true);
        });
    });
    describe('when you provide 1', function () {
        it('should return true', function () {
            var result = validators.isValidProbability(1);
            chai.assert.equal(result, true);
        });
    });
    describe('when you provide okfowko', function () {
        it('should return false', function () {
            var result = validators.isValidProbability('okfowko');
            chai.assert.equal(result, false);
        });
    });
    describe('when you provide 0', function () {
        it('should return true', function () {
            var result = validators.isValidProbability(0);
            chai.assert.equal(result, true);
        });
    });
    describe('when you provide -2', function () {
        it('should return false', function () {
            var result = validators.isValidProbability(-2);
            chai.assert.equal(result, false);
        });
    });
    describe('when you provide 1.0000000001', function () {
        it('should return false', function () {
            var result = validators.isValidProbability(1.0000000001);
            chai.assert.equal(result, false);
        });
    });
    describe('when you provide -0.0000000001', function () {
        it('should return false', function () {
            var result = validators.isValidProbability(-0.0000000001);
            chai.assert.equal(result, false);
        });
    });
});