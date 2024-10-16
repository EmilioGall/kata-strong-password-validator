console.log('///// Functions /////');

/**
 * Description: function prints on [listContainer] requests in [requestsArray]
 * @param {array} requestsArray
 * @param {obj} listContainer
 * @returns {any}
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