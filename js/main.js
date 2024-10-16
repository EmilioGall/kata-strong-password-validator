console.log('///// Main /////');

// Print on [requestsListElem] requests in [requestsArray]
printListRequest(requestsArray, requestsListElem);

 
// Add input event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('input', function () {

   console.log('changed');

   // Define constant of Password Input Value
   const inputPasswordValue = inputPasswordElem.value.trim();

   console.log("inputPasswordValue", typeof inputPasswordValue, inputPasswordValue);

});