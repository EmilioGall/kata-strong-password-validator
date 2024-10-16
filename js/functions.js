console.log('///// Functions /////');

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
 * Description: function prints on DOM element [progressBar] status completion of given array elements.
 * @param {array} requestsArray
 * @param {obj} progressBar
 */
function printProgressBar(requestsArray, progressBar) {

   // Clear previous list elements
   progressBar.innerHTML = '';

   let validatedRequests = 0;

   requestsArray.forEach((request) => {

      if (request.status == 'validated') {

         validatedRequests++;

      };

   });

   console.log('validatedRequests:', validatedRequests);


   let progressPercentage = (validatedRequests / requestsArray.length) * 100;

   console.log(`Progress: ${progressPercentage}%`);

   let barColor = '';

   if (progressPercentage <= 20) {

      barColor = 'danger';
      
   } else if (progressPercentage > 20 && (progressPercentage <= 80)) {

      barColor = 'warning';

   } else if (progressPercentage > 80) {

      barColor = 'success';

   };

   if (progressPercentage > 0) {

      progressBar.innerHTML += `
      <div class="h-100 bg-${barColor} rounded-pill p-1 ps-4 text-secondary" style="width:${progressPercentage}%"></div>
      `

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

      timeout = setTimeout(() => {

         // Execute the function with the correct context and arguments
         functionToCall.apply(context, args);

      }, delay);

   };

};