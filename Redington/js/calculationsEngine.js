var calculationsEngine = (function () {

    return {
        probabilityOfBoth: probabilityOfBoth,
        probabilityOfEither:probabilityOfEither
    }

    function probabilityOfBoth(propability1, propability2) {
        var answer;
        if (!validators.isValidProbability(propability1)) {
            throw 'probability 1 is not valid';
        }
        if (!validators.isValidProbability(propability2)) {
            throw 'probability 2 is not valid';
        }
        answer = parseFloat(propability1) * parseFloat(propability2);
        //use toFixed to remove rounding errors. This returns a string so needs to be parsed again
        return parseFloat(answer.toFixed(10));
    }

    function probabilityOfEither(propability1, propability2) {
        var propability1AsFloat, propability2AsFloat,answer;

        if (!validators.isValidProbability(propability1)) {
            throw 'probability 1 is not valid';
        }
        if (!validators.isValidProbability(propability2)) {
            throw 'probability 2 is not valid';
        }

        propability1AsFloat = parseFloat(propability1);
        propability2AsFloat = parseFloat(propability2);

        answer = (propability1AsFloat + propability2AsFloat) - propability1AsFloat * propability2AsFloat;
        //use toFixed to remove rounding errors. This returns a string so needs to be parsed again
        return parseFloat(answer.toFixed(10));
    }
}());