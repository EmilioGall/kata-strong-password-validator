console.log('///// Main /////');

// Print on [requestsListElem] requests in [requestsArray]
printListRequest(requestsArray, requestsListElem);


// Add input event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('input', function () {

   console.log('changed');

   // Define constant of Password Input Value
   const inputPasswordValue = inputPasswordElem.value.trim();

   console.log("inputPasswordValue", typeof inputPasswordValue, inputPasswordValue);

   if (inputPasswordValue.length >= requestsArray[0].requestValue) {

      requestsArray[0].validated = true;

   } else if (inputPasswordValue.length < requestsArray[0].requestValue) {

      requestsArray[0].validated = false;
      
   };

   // Print on [requestsListElem] requests in [requestsArray]
   printListRequest(requestsArray, requestsListElem);

});