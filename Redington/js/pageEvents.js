var pageEvents = (function () {

    return {
        onInputProbabilityChange: onInputProbabilityChange,
        onCalulateCombinedProbabilityClicked: onCalulateCombinedProbabilityClicked,
        onCalulateEitherProbabilityClicked: onCalulateEitherProbabilityClicked
    }

    function onCalulateCombinedProbabilityClicked(probabilityOne, probabilityTwo) {
        var answer = calculationsEngine.probabilityOfBoth(probabilityOne, probabilityTwo);
        ajaxCalls.recordTransactionOnServer('both', probabilityOne, probabilityTwo, answer);
        domInteractions.setAnswerScreenValues(probabilityOne, probabilityTwo,'BOTH',answer);
        domInteractions.switchToAnswerScreen();
    }

    function onCalulateEitherProbabilityClicked(probabilityOne, probabilityTwo) {
        var answer = calculationsEngine.probabilityOfEither(probabilityOne, probabilityTwo);
        ajaxCalls.recordTransactionOnServer('either', probabilityOne, probabilityTwo, answer);
        domInteractions.setAnswerScreenValues(probabilityOne, probabilityTwo, 'EITHER', answer);
        domInteractions.switchToAnswerScreen();
    }

    function onInputProbabilityChange(elementChanged) {
        var value = elementChanged.val(),firstProbability,secondProbability;
        if (!value) {
            return;
        }
  
        elementChanged.removeClass('error');
        domInteractions.hideValidationError();
        if (!validators.isValidProbability(value)) {
            domInteractions.showValidationError();
            elementChanged.addClass('error');
        } else {
            firstProbability = domInteractions.getElementById('firstProbability').val();
            secondProbability = domInteractions.getElementById('secondProbability').val();
            
            //if the whole form is valid, display the action buttons
            if (validators.validateWholeForm(firstProbability, secondProbability)) {
                domInteractions.enableElementById('calulateBothProbability');
                domInteractions.enableElementById('calulateEitherProbability');
            }
        }
    }
}());