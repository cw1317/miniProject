var validators = (function () {

    return {
        isValidProbability: isValidProbability,
        validateWholeForm: validateWholeForm
    }

    function isValidProbability(inputToTest) {
        var inputAsFloat;
        //before attempting to parse, check the string provided can be converted to a number
        if (isNaN(inputToTest)) {
            return false;
        }

        inputAsFloat = parseFloat(inputToTest);
        if (inputAsFloat >= 0 && inputAsFloat <= 1) {
            return true;
        }

        return false;
    }

    function validateWholeForm(firstProbability, secondProbability) {
        if (!firstProbability || !secondProbability) {
            return false;
        }

        if (isValidProbability(firstProbability) && isValidProbability(secondProbability)) {
            return true;
        }
    }
}());