console.log('///// Functions /////');

/**
 * Description: function calls the given function [functionToCall] only after time param [delay].
 * @param {function} functionToCall
 * @param {number} delay
 * @returns {function} 
 */
function debounce(functionToCall, delay) {

   // Define variable for timeout
   let timeout;

   return function (...args) { // capture arguments passed to the debounced function

      // Clear the previous timer
      clearTimeout(timeout);

      // Capture context of function
      const context = this;

      // Set a new timeout to call the function
      timeout = setTimeout(() => {

         // Execute the function with the correct context and arguments
         functionToCall.apply(context, args);

      }, delay);

   };

};

/**
 * Description: function prints on DOM element [listContainer] requests from a given array.
 * @param {array} requestsArray
 * @param {obj} listContainer
 */
function printListRequest(requestsArray, listContainer) {

   // Clear previous list elements
   listContainer.innerHTML = '';

   requestsArray.forEach((request) => {

      if (request.status == 'validated') {

         listContainer.innerHTML += `
            <li class="text-success">
               <i class="fa-regular fa-circle-check me-3"></i>${request.requestText()}
            </li>
         `

      } else if (request.status == 'default') {

         listContainer.innerHTML += `
            <li class="text-secondary text-opacity-50">
               <i class="fa-regular fa-circle-xmark me-3"></i>${request.requestText()}
            </li>
         `

      } else if (request.status == 'failed') {

         listContainer.innerHTML += `
            <li class="text-danger">
               <i class="fa-regular fa-circle-xmark me-3"></i>${request.requestText()}
            </li>
         `
         request.failed = false;

      };

   });

};

/**
 * Description: function counts how many validated requests there are in the given array.
 * @param {array} requestsArray
 * @returns {number}
 */
function countValidated(requestsArray) {

   let validatedRequests = 0;

   requestsArray.forEach((request) => {

      if (request.status == 'validated') {

         validatedRequests++;

      };

   });

   console.log('validatedRequests:', validatedRequests);

   return validatedRequests;

};

/**
 * Description: function prints on DOM element [progressBar] status completion of given array elements.
 * @param {array} requestsArray
 * @param {obj} progressBar
 */
function printProgressBar(requestsArray, progressBar) {

   const validatedRequests = countValidated(requestsArray);

   let progressPercentage = (validatedRequests / requestsArray.length) * 100;

   console.log(`Progress: ${progressPercentage}%`);

   // Parse existing width
   let barWidth = parseFloat(progressElem.style.width) || 0;

   // Clear any existing interval before starting a new one
   if (progressInterval) {
      clearInterval(progressInterval);
   };

   if (progressPercentage > 0 && progressPercentage <= 100) {

      // Remove invisible class from [progressElem]
      progressElem.classList.remove("invisible");

      // Add visible class to [progressElem]
      progressElem.classList.add("visible");

      if (progressPercentage <= 20) {

         // Remove bg-warning class from [progressElem]
         progressElem.classList.remove("bg-warning");

         // Remove bg-success class from [progressElem]
         progressElem.classList.remove("bg-success");

         // Add bg-danger class to [progressElem]
         progressElem.classList.add("bg-danger");

      } else if (progressPercentage > 20 && (progressPercentage <= 99)) {

         // Add bg-warning class to [progressElem]
         progressElem.classList.add("bg-warning");

         // Remove bg-success class from [progressElem]
         progressElem.classList.remove("bg-success");

         // Remove bg-danger class from [progressElem]
         progressElem.classList.remove("bg-danger");

      } else if (progressPercentage == 100) {

         // Remove bg-warning class from [progressElem]
         progressElem.classList.remove("bg-warning");

         // Add bg-success class to [progressElem]
         progressElem.classList.add("bg-success");

         // Remove bg-danger class from [progressElem]
         progressElem.classList.remove("bg-danger");

      };

      progressInterval = setInterval(moveBar, 5);

      function moveBar() {

         if (barWidth < progressPercentage) {

            barWidth++;

         } else if (barWidth > progressPercentage) {

            barWidth--;

         } else if (barWidth == progressPercentage) {

            // Stop when the bar reaches the target
            clearInterval(progressInterval);

         };

         progressElem.style.width = barWidth + '%';

         console.log('progressElem.style.width:', progressElem.style.width);

      };

      let progressWidth = progressElem.style.width;

      console.log('progressWidth:', progressWidth);

   } else if (progressPercentage == 0) {

      progressInterval = setInterval(moveBar, 30);

      function moveBar() {

         if (barWidth < progressPercentage) {

            barWidth++;

         } else if (barWidth > progressPercentage) {

            barWidth--;

         } else if (barWidth == progressPercentage) {

            // Stop when the bar reaches the target
            clearInterval(progressInterval);

            // // Remove visible class from [progressElem]
            progressElem.classList.remove("visible");
      
            // // Add invisible class to [progressElem]
            progressElem.classList.add("invisible");

         };

         progressElem.style.width = barWidth + '%';

         console.log('progressElem.style.width:', progressElem.style.width);

         
      };

      
      let progressWidth = progressElem.style.width;

      console.log('progressWidth:', progressWidth);

   };

};

/**
 * Description: function prints on DOM element [alertContainer] alert accordly to requests status completion.
 * @param {array} requestsArray
 * @param {obj} progressBar
 */
function printAlert(requestsArray, alertContainer) {

   // Clear previous alert message
   alertContainer.innerHTML = '';

   const validatedRequests = countValidated(requestsArray);

   if (validatedRequests == requestsArray.length) {

      alertContainer.innerHTML = `
         <div class="alert alert-success" role="alert">
            Password insert correctly. <b>All requirements met!</b>
         </div>
      `;

   } else {

      alertContainer.innerHTML = `
         <div class="alert alert-danger" role="alert">
            Password not strong enough. <b>Requirements not met!</b>
         </div>
      `;

   };

};

/**
 * Description: function counts how many whitespace there are in a given string.
 * @param {string} str
 * @returns {number} count
 */
function countWhitespace(str) {

   let count = 0;

   for (let char of str) {

      if (char.trim() === '') {

         // Increment count if the character is whitespace
         count++;

      };

   };

   return count;
};

/**
 * Description: function counts how many uppercase there are in a given string.
 * @param {string} str
 * @returns {number}
 */
function countUpperCase(str) {

   let count = 0;

   for (let char of str) {

      if (char >= 'A' && char <= 'Z') {

         // Increment count if the character is uppercase
         count++;

      };

   };

   return count;

};

/**
 * Description: function counts how many numbers there are in a given string.
 * @param {string} str
 * @returns {number}
 */
function countNumbers(str) {

   let count = 0;

   for (let char of str) {

      if (char >= '0' && char <= '9') {

         // Increment count if the character is a number
         count++;

      };

   };

   return count;

};

/**
 * Description: function counts how many special characters there are in a given string.
 * @param {string} str
 * @returns {number}
 */
function countSpecialChar(str) {

   let count = 0;

   for (let i = 0; i < str.length; i++) {

      // Define constant for the Unicode value of the character at index [i]
      const charCode = str.charCodeAt(i);

      if ((charCode >= '32' && charCode <= '47')
         || (charCode >= '58' && charCode <= '64')
         || (charCode >= '91' && charCode <= '96')
         || (charCode >= '123' && charCode <= '126')
         || (charCode >= '160' && charCode <= '191')) {

         // Increment count if the character is a special character
         count++;

      };

   };

   return count;

};

/**
 * Description: function controls if the input password respect requirements and prints requirements and progress bar accordly to listener type.
 * @param {string} listenerType
 */
function controlPassword(listenerType) {

   // Define constant of Password Input Value
   const inputPasswordValue = inputPasswordElem.value.trim();

   console.log("%c inputPasswordValue:", 'color:green', inputPasswordValue, typeof inputPasswordValue);

   if (!inputPasswordValue) {

      console.log('empty');

      // Set status of each request
      requestsArray.forEach((request) => {

         request.status = listenerType == 'input' ? 'default' : 'failed';

      });

   } else {

      // Control of Requirement 1
      if (countWhitespace(inputPasswordValue) == requestsArray[0].requestValue) {

         requestsArray[0].status = 'validated';

      } else if (countWhitespace(inputPasswordValue) != requestsArray[0].requestValue) {

         requestsArray[0].status = listenerType == 'input' ? 'default' : 'failed';

      };

      // Control of Requirement 2
      if (inputPasswordValue.length >= requestsArray[1].requestValue) {

         requestsArray[1].status = 'validated';

      } else if (inputPasswordValue.length < requestsArray[1].requestValue) {

         requestsArray[1].status = listenerType == 'input' ? 'default' : 'failed';

      };

      // Control of Requirement 3
      if (countUpperCase(inputPasswordValue) >= requestsArray[2].requestValue) {

         requestsArray[2].status = 'validated';

      } else if (countUpperCase(inputPasswordValue) < requestsArray[2].requestValue) {

         requestsArray[2].status = listenerType == 'input' ? 'default' : 'failed';

      };

      // Control of Requirement 4
      if (countNumbers(inputPasswordValue) >= requestsArray[3].requestValue) {

         requestsArray[3].status = 'validated';

      } else if (countNumbers(inputPasswordValue) < requestsArray[3].requestValue) {

         requestsArray[3].status = listenerType == 'input' ? 'default' : 'failed';

      };

      // Control of Requirement 5
      if (countSpecialChar(inputPasswordValue) >= requestsArray[4].requestValue) {

         requestsArray[4].status = 'validated';

      } else if (countSpecialChar(inputPasswordValue) < requestsArray[4].requestValue) {

         requestsArray[4].status = listenerType == 'input' ? 'default' : 'failed';

      };

   };

   // Print on [requestsListElem] requests in [requestsArray]
   printListRequest(requestsArray, requestsListElem);

   // Print on [progressBarElem] requests status completion
   printProgressBar(requestsArray, progressBarElem);

};