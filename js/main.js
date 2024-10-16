console.log('///// Main /////');

// Print on [requestsListElem] requests in [requestsArray]
printListRequest(requestsArray, requestsListElem);

// Print on [progressBarElem] requests status completion
printProgressBar(requestsArray, progressBarElem);

// Add input event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('input', function () {

   // console.log('changed');

   // Define constant of Password Input Value
   const inputPasswordValue = inputPasswordElem.value.trim();

   console.log("inputPasswordValue:", inputPasswordValue, typeof inputPasswordValue);

   if (!inputPasswordValue) {

      console.log('empty');

      requestsArray.forEach((request, i) => {

         request.status = 'default';

      });

   } else {

      // Control of Requirement 1
      if (countWhitespace(inputPasswordValue) <= requestsArray[0].requestValue) {

         requestsArray[0].status = 'validated';

      } else if (countWhitespace(inputPasswordValue) > requestsArray[0].requestValue) {

         requestsArray[0].status = 'default';

      };

      // Control of Requirement 2
      if (inputPasswordValue.length >= requestsArray[1].requestValue) {

         requestsArray[1].status = 'validated';

      } else if (inputPasswordValue.length < requestsArray[1].requestValue) {

         requestsArray[1].status = 'default';

      };

      // Control of Requirement 3
      if (countUpperCase(inputPasswordValue) >= requestsArray[2].requestValue) {

         requestsArray[2].status = 'validated';

      } else if (countUpperCase(inputPasswordValue) < requestsArray[2].requestValue) {

         requestsArray[2].status = 'default';

      };

      // Control of Requirement 4
      if (countNumbers(inputPasswordValue) >= requestsArray[3].requestValue) {

         requestsArray[3].status = 'validated';

      } else if (countNumbers(inputPasswordValue) < requestsArray[3].requestValue) {

         requestsArray[3].status = 'default';

      };

      // Control of Requirement 5
      if (countSpecialChar(inputPasswordValue) >= requestsArray[4].requestValue) {

         requestsArray[4].status = 'validated';

      } else if (countSpecialChar(inputPasswordValue) < requestsArray[4].requestValue) {

         requestsArray[4].status = 'default';

      };

   };

   // Print on [requestsListElem] requests in [requestsArray]
   printListRequest(requestsArray, requestsListElem);

   // Print on [progressBarElem] requests status completion
   printProgressBar(requestsArray, progressBarElem);

});