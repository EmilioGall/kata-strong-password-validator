console.log('///// Main /////');

// Print on [requestsListElem] requests in [requestsArray]
printListRequest(requestsArray, requestsListElem);

// Print on [progressBarElem] requests status completion
printProgressBar(requestsArray, progressBarElem);

// Add input event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('input', function () {

   // console.log('changed');

   controlPassword('input');

});