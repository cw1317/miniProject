//On document ready wire up event handlers, disable action buttons and hide answer screen
$(document).ready(function () {
    $('#firstProbability').blur(domInteractions.onInputProbabilityChange);
    $('#secondProbability').blur(domInteractions.onInputProbabilityChange);
    $('#calulateBothProbability').click(domInteractions.onCalulateCombinedProbabilityClicked);
    $('#calulateEitherProbability').click(domInteractions.onCalulateEitherProbabilityClicked);
    $('#anotherCalulation').click(domInteractions.switchToCalulationScreen);
    $('#calulateBothProbability').prop('disabled', true);
    $('#calulateEitherProbability').prop('disabled', true);
    $('#answerScreen').hide();
    $('#validationError').hide();
});