console.log('///// Main /////');

// Print on [requestsListElem] requests in [requestsArray]
printListRequest(requestsArray, requestsListElem);

// Print on [progressBarElem] requests status completion
printProgressBar(requestsArray, progressBarElem);

// Add input event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('input', function () {

   // console.log('changed');

   // Call controls on password input
   controlPassword('input');

});

// Create a debounced version of the controlPassword function with 700ms delay
const debouncedControlPassword = debounce( ()=> controlPassword('keypress'), 700);

// Add keypress event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('keypress', function (e) {

   // If the user presses the "Enter" key on the keyboard
   if (e.key === "Enter") {

      console.log('clicked');

      // Cancel the default action, if needed
      e.preventDefault();

      // Call debounced version of controls
      debouncedControlPassword();

   };

});