/// <reference path="vendor/sinon.js" />
/// <reference path="vendor/mocha.js" />
/// <reference path="vendor/chai.js" />
/// <reference path="../Redington/js/calculationsEngine.js"/>

describe('calculationsEngine - probabilityOfBoth', function () {
    describe('probabilities are valid', function () {
        var isValidProbabilitySpy;
        beforeEach(function () {
            setValidatorsToReturnTrueInAllCases();
            isValidProbability = sinon.spy(window.validators, 'isValidProbability');
        });

        afterEach(function () {
            window.validators.isValidProbability.restore();
        });

        it('should call validators.isValidProbability passing  probability one', function () {
            calculationsEngine.probabilityOfBoth('0.2', '0.5');
            chai.assert.equal(window.validators.isValidProbability.getCall(0).args[0], '0.2');
        });
        it('should call validators.isValidProbability passing  probability two', function () {
            calculationsEngine.probabilityOfBoth('0.2', '0.5');
            chai.assert.equal(window.validators.isValidProbability.getCall(1).args[0], '0.5');
        });
        describe('provide "0.2" and "0.4"', function () {
            it('should return 0.08 within rounding errors', function () {
                var result = calculationsEngine.probabilityOfBoth('0.2', '0.4');
                //allow a tolerence of 1 in 10 billion
                chai.expect(result).closeTo(0.08, 1e-10);
            });
        });
        describe('provide "0.0" and "0.4"', function () {
            it('should return 0.0 within rounding errors', function () {
                var result = calculationsEngine.probabilityOfBoth('0.0', '0.4');
                chai.expect(result).closeTo(0.0, 1e-10);
            });
        });
        describe('provide 0.1 and 0.4', function () {
            it('should return 0.004 within rounding errors', function () {
                var result = calculationsEngine.probabilityOfBoth(0.1, 0.4);
                chai.expect(result).closeTo(0.04, 1e-10);
            });
        });
    });
    describe('both probabilities are invalid', function () {
        var isValidProbabilitySpy;
        beforeEach(function () {
            setValidatorsToReturnFalseInAllCases();
            isValidProbability = sinon.spy(window.validators, 'isValidProbability');
        });
        afterEach(function () {
            window.validators.isValidProbability.restore();
        });
        it('should throw exception "probability 1 is not valid"', function () {
            chai.expect(function () {
                calculationsEngine.probabilityOfBoth('0.2', '0.5');
            }).to.throw('probability 1 is not valid');
        });
    });
    describe('second probability is invalid', function () {
        var isValidProbabilitySpy;
        beforeEach(function () {
            setValidatorsToReturnTrueThenFalse();
            isValidProbability = sinon.spy(window.validators, 'isValidProbability');
        });
        afterEach(function () {
            window.validators.isValidProbability.restore();
        });
        it('should throw exception "probability 2 is not valid"', function () {
            chai.expect(function () {
                calculationsEngine.probabilityOfBoth('0.2', '0.5');
            }).to.throw('probability 2 is not valid');
        });
    });
});

describe('calculationsEngine - probabilityOfEither', function () {
    describe('probabilities are valid', function () {
        var isValidProbabilitySpy;
        beforeEach(function () {
            setValidatorsToReturnTrueInAllCases();
            isValidProbability = sinon.spy(window.validators, 'isValidProbability');
        });

        afterEach(function () {
            window.validators.isValidProbability.restore();
        });

        it('should call validators.isValidProbability passing  probability one', function () {
            calculationsEngine.probabilityOfEither('0.2', '0.5');
            chai.assert.equal(window.validators.isValidProbability.getCall(0).args[0], '0.2');
        });
        it('should call validators.isValidProbability passing  probability two', function () {
            calculationsEngine.probabilityOfEither('0.2', '0.5');
            chai.assert.equal(window.validators.isValidProbability.getCall(1).args[0], '0.5');
        });
        describe('provide "0.2" and "0.4"', function () {
            it('should return 0.52 within rounding errors', function () {
                var result = calculationsEngine.probabilityOfEither('0.2', '0.4');
                //allow a tolerence of 1 in 10 billion
                chai.expect(result).closeTo(0.52, 1e-10);
            });
        });
        describe('provide "0.0" and "0.4"', function () {
            it('should return 0.4 within rounding errors', function () {
                var result = calculationsEngine.probabilityOfEither('0.0', '0.4');
                chai.expect(result).closeTo(0.4, 1e-10);
            });
        });
        describe('provide 0.1 and 0.4', function () {
            it('should return 0.46 within rounding errors', function () {
                var result = calculationsEngine.probabilityOfEither(0.1, 0.4);
                chai.expect(result).closeTo(0.46, 1e-10);
            });
        });
    });
    describe('both probabilities are invalid', function () {
        var isValidProbabilitySpy;
        beforeEach(function () {
            setValidatorsToReturnFalseInAllCases();
            isValidProbability = sinon.spy(window.validators, 'isValidProbability');
        });
        afterEach(function () {
            window.validators.isValidProbability.restore();
        });
        it('should throw exception "probability 1 is not valid"', function () {
            chai.expect(function () {
                calculationsEngine.probabilityOfEither('0.2', '0.5');
            }).to.throw('probability 1 is not valid');
        });
    });
    describe('second probability is invalid', function () {
        var isValidProbabilitySpy;
        beforeEach(function () {
            setValidatorsToReturnTrueThenFalse();
            isValidProbability = sinon.spy(window.validators, 'isValidProbability');
        });
        afterEach(function () {
            window.validators.isValidProbability.restore();
        });
        it('should throw exception "probability 2 is not valid"', function () {
            chai.expect(function () {
                calculationsEngine.probabilityOfEither('0.2', '0.5');
            }).to.throw('probability 2 is not valid');
        });
    });
});

function setValidatorsToReturnTrueInAllCases() {
    window.validators = {
        isValidProbability: function () {
            return true;
        }
    }
}

function setValidatorsToReturnFalseInAllCases() {
    window.validators = {
        isValidProbability: function () {
            return false;
        }
    }
}

function setValidatorsToReturnTrueThenFalse() {
    var calls = 0;
    window.validators = {
        isValidProbability: function () {
            if (calls === 0) {
                calls++;
                return true;
            }
            return false;
        }
    }
}