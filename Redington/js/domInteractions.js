var domInteractions = (function () {
    return {
        onInputProbabilityChange: onInputProbabilityChange,
        getElementById: getElementById,
        enableElementById: enableElementById,
        onCalulateCombinedProbabilityClicked: onCalulateCombinedProbabilityClicked,
        onCalulateEitherProbabilityClicked:onCalulateEitherProbabilityClicked,
        switchToAnswerScreen: switchToAnswerScreen,
        switchToCalulationScreen: switchToCalulationScreen,
        setAnswerScreenValues: setAnswerScreenValues,
        showValidationError: showValidationError,
        hideValidationError: hideValidationError
    }

    function onInputProbabilityChange(event) {
        disableElementById('calulateBothProbability');
        disableElementById('calulateEitherProbability');
        pageEvents.onInputProbabilityChange($(this));
    }

    function onCalulateCombinedProbabilityClicked() {
        var probabilityOne = getElementById('firstProbability').val(),
        probabilityTwo = getElementById('secondProbability').val();
        pageEvents.onCalulateCombinedProbabilityClicked(probabilityOne, probabilityTwo);
        return false; //overide default form submit
    }

    function onCalulateEitherProbabilityClicked() {
        var probabilityOne = getElementById('firstProbability').val(),
        probabilityTwo = getElementById('secondProbability').val();
        pageEvents.onCalulateEitherProbabilityClicked(probabilityOne, probabilityTwo);
        return false; //overide default form submit
    }

    function getElementById(id) {
        return $('#' + id);
    }

    function enableElementById(id) {
        getElementById(id).prop('disabled', false);
    }

    function disableElementById(id) {
        getElementById(id).prop('disabled', true);
    }
    function switchToAnswerScreen() {
        $('#calculatorForm').hide();
        $('#answerScreen').show();
    }

    function showValidationError() {
        getElementById('validationError').show();
    }

    function hideValidationError() {
        getElementById('validationError').hide();
    }

    function switchToCalulationScreen() {
        $('#firstProbability').val('');
        $('#secondProbability').val('');
        $('#calculatorForm').show();
        $('#answerScreen').hide();
        $('#calulateBothProbability').prop('disabled', true);
        $('#calulateEitherProbability').prop('disabled', true);
    }

    function setAnswerScreenValues(probabilityOne, probabilityTwo, operation, answer) {
        $('#answerProbabilityOne').html(probabilityOne);
        $('#answerProbabilityTwo').html(probabilityTwo);
        $('#answerOperation').html(operation);
        $('#answerCombinedProbability').html(answer);
    }
}());