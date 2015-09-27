var ajaxCalls = (function () {

    return {
        recordTransactionOnServer: recordTransactionOnServer
    }

    function recordTransactionOnServer(operation, probability1, probability2, answer) {
        $.ajax({
            method: "POST",
            url: "/TransactionRecorder/RecordCalculation",
            data: {
                operation: operation,
                probability1: probability1,
                probability2: probability2,
                answer:answer
            }
        })
    }
})();