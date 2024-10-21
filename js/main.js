console.log('///// Main /////');

// Print on [requestsListElem] requests in [requestsArray]
printListRequest(requestsArray, requestsListElem);

// Print on [progressBarElem] requests status completion
printProgressBar(requestsArray, progressBarElem);

// Add input event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('input', function () {

   // console.log('changed');

   // Clear previous alert message
   alertContainerElem.innerHTML = '';

   // Call controls on password input
   controlPassword('input');

});

// Create a debounced version of the [controlPassword] function with 500ms delay
const debouncedControlPassword = debounce(() => controlPassword('keypress'), 500);

// Create a debounced version of the [printAlert] function with 500ms delay
const debouncedPrintAlert = debounce(() => printAlert(requestsArray, alertContainerElem), 500);

// Add keypress event listener on [inputPasswordElem]
inputPasswordElem.addEventListener('keypress', function (e) {

   // If the user presses the "Enter" key on the keyboard
   if (e.key === "Enter") {

      console.log('Enter clicked');

      // Call debounced version of controls
      debouncedControlPassword();

      // Call debounced version of alert
      debouncedPrintAlert();

   };

});