/* Working with the DOM */
/* DOM = Document object Model. */
/* the document = Browser/Window this is HTML, CSS and JavaScript*/
/* We  can use JavaScript to manipulate things in the DOM. Using built in methods. Methods = functions that are part of the object model / document object  */

/* You can visualize the document as a javascript object with key and value pairs */
/* For example we can see the Classlist of an element on the body */
const documentClassList = document.body.classList;
// console.dir(documentClassList);

/* How to target specific elements */

const container = document// const container

/* Can select elements, classes or ID's  ("element") (".class") ("#ID") => ("body") (".container") ("#someId")*/
.container.classList
  .remove("body");
container.classList.add("body-container");
/* Contains is a method that can be used on the classlist method do methods can be chained together */
// console.log(container.classList);

/* 2 ways of manipulating using methods chaining and inside of a function */

// const add_class_to_body = () => {
//   container.classList.add("box-2");
// };

// add_class_to_body();

// =================== console.log(container.classList);

/* Event Listeners allows you to listen for user input on selected elements */
const button = document.querySelector("button");
let num = 0;
const count = (num2) => {
  num += num2;
  return num;
};

button.addEventListener(
  "click",
  /* Anonymous function, only executes when button is clicked */ () => {
    const counterDisplay = document.querySelector(".counter");
    /* Count will only be called when the button is clicked */
    counterDisplay.innerHTML = `${count(3)}`;
  }
);

// button.addEventListener(
//   "click",
//   count /* Don't call this function just point to it, this mkakes htis method not so great for when the function requires arguments */
// );
