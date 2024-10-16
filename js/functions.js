console.log('///// Functions /////');

/**
 * Description: function prints on [listContainer] requests in [requestsArray]
 * @param {array} requestsArray
 * @param {obj} listContainer
 * @returns {any}
 */
function printListRequest(requestsArray, listContainer) {

   requestsArray.forEach((request) => {

      if (request.validated == true) {

         listContainer.innerHTML += `
         <li class="text-success">
            <i class="fa-regular fa-circle-check me-3"></i>${request.requestText()}
         </li>
      `

      } else if (request.validated == false) {

         listContainer.innerHTML += `
            <li class="text-secondary">
               <i class="fa-regular fa-circle-xmark me-3"></i>${request.requestText()}
            </li>
         `

      }

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