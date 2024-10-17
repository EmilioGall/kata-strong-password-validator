console.log('///// Elements /////');

// Define constant of Password Input Dom Element
const requestsArray = [

   {
      requestValue: 0,
      requestText: function () {

         return `Must contain <b>${this.requestValue} white spaces</b>`;

      },
      status: 'default',

   },
   {
      requestValue: 9,
      requestText: function () {

         return `At least <b>${this.requestValue} characters</b>`;

      },
      status: 'default',
   },
   {
      requestValue: 1,
      requestText: function () {

         return `Minimum <b>${this.requestValue} capital (uppercase) letter</b>`;

      },
      status: 'default',

   },
   {
      requestValue: 1,
      requestText: function () {

         return `</i>At least <b>${this.requestValue} number</b>`;

      },
      status: 'default',

   },
   {
      requestValue: 2,
      requestText: function () {

         return `Minimum <b>${this.requestValue} special character</b>`;

      },
      status: 'default',

   },

];

requestsArray.forEach((request, i) => {

   console.log(`Request n.${i+1} =`, request.requestText());

});


// Define constant of Password Input Dom Element
const inputPasswordElem = document.querySelector("#input-password");

console.log("inputPasswordElem", typeof inputPasswordElem, inputPasswordElem);

// Define constant of List Container Dom Element
const requestsListElem = document.querySelector("#requests-list");

console.log("requestsListElem", typeof requestsListElem, requestsListElem);

// Define constant of Progress Bar Dom Element
const progressBarElem = document.querySelector("#progress-bar");

console.log("progressBarElem", typeof progressBarElem, progressBarElem);

// Define constant of Requests Progress Dom Element
const progressElem = document.querySelector('#progress');

console.log('progressElem:', progressElem);

// Define variable for progress interval
let progressInterval;

// Define constant of Alert Container Dom Element
const alertContainerElem = document.querySelector("#alert-container");

console.log("alertContainerElem", typeof alertContainerElem, alertContainerElem);