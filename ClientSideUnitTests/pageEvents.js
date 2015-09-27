/// <reference path="vendor/sinon.js" />
/// <reference path="vendor/mocha.js" />
/// <reference path="vendor/chai.js" />
/// <reference path="../Redington/js/pageEvents.js"/>

describe('pageEvents - onInputProbabilityChange', function () {
    describe('when no value is supplied', function () {
        it('should return undefined', function () {
            var mockElement = {
                val: function () {
                    return null;
                }
            },
            result = pageEvents.onInputProbabilityChange(mockElement);
            chai.assert.equal(result, undefined);
        });
    });
    describe('when value is supplied', function () {
        var mockElement = {
            val: function () {
                return 'something';
            }, removeClass: function () { },
            addClass: function () {}
        },
        removeClassSpy=sinon.spy(mockElement, 'removeClass'),
        addClassSpy = sinon.spy(mockElement, 'addClass');
        beforeEach(function () {
            window.domInteractions = {
                getElementById: function () {
                    return {
                        val: function () { }
                    }
                }, enableElementById: function () { }, showValidationError: function () { },
                hideValidationError: function () { }
            }
            removeClassSpy.reset();
            addClassSpy.reset();
            //slightly hacky way of mocking the dependency, should use dependency injection
            window.validators = {
                isValidProbability: function () {
                    return false;
                }
            }
        });
        describe('when value is invalid', function () {
            it('should remove error class', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                chai.assert.equal(mockElement.removeClass.getCall(0).args[0], 'error');
            });
            it('should add error class back', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                chai.assert.equal(mockElement.addClass.getCall(0).args[0], 'error');
            });
            it('should call methods in order removeClass - addClass', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                sinon.assert.callOrder(removeClassSpy, addClassSpy);
            });
        });
        describe('when value is valid', function () {
            var getElementByIdSpy,enableElementByIdSpy;
            beforeEach(function () {
                window.validators = {
                    isValidProbability: function () {
                        return true;
                    },
                    validateWholeForm: function () {
                        return true;
                    }
                },
                
                getElementByIdSpy = sinon.spy(domInteractions, 'getElementById');
                enableElementByIdSpy = sinon.spy(domInteractions, 'enableElementById');
            });

            afterEach(function () {
                //remove the spy after each test.  It gets added again in the next test 
                //with counters reset
                window.domInteractions.getElementById.restore();
                window.domInteractions.enableElementById.restore();
            });
            it('should remove error class', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                chai.assert.equal(mockElement.removeClass.getCall(0).args[0], 'error');
            });
            it('should call getElementById with "firstProbability"', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                chai.assert.equal(domInteractions.getElementById.getCall(0).args[0],'firstProbability');
            });
            it('should call getElementById with "secondProbability"', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                chai.assert.equal(domInteractions.getElementById.getCall(1).args[0], 'secondProbability');
            });
            it('should call methods in order removeClass-getElementById-getElementById"', function () {
                pageEvents.onInputProbabilityChange(mockElement);
                sinon.assert.callOrder(removeClassSpy, getElementByIdSpy, getElementByIdSpy);
            });
            describe('whole form is valid', function () {
                it('should call dominteractions.enableElementById passing calulateBothProbability', function () {
                    pageEvents.onInputProbabilityChange(mockElement);
                    chai.assert.equal(domInteractions.enableElementById.getCall(0).args[0], 'calulateBothProbability');
                });
            });
        });
    });
});