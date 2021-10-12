/* Working with the DOM */
/* DOM = Document object Model. */
/* the document = Browser/Window this is HTML, CSS and JavaScript*/
/* We  can use JavaScript to manipulate things in the DOM. Using built in methods. Methods = functions that are part of the object model / document object  */

/* You can visualize the document as a javascript object with key and value pairs */
/* For example we can see the Classlist of an element on the body */

const documentClassList = document.body.classList; /* .classlist = method */
/* 

classlist = {
  add: function(), 
  toggle: function()
}*/
// console.log(documentClassList);
// documentClassList.add("new-class");
// console.log(documentClassList);
// console.log();

// console.log(document.querySelector("button").classList);
// {
//   key:"value",
//   object: {

//   },
//   array: [1,2,3]
// }
/* How to target specific elements */

const container = document.querySelector(".container").classList;
// const listItems = document.querySelector("li");

// console.log((listItems.innerHTML = "list 1"));

const complex = document.querySelector(".complex");
/* Acts like en array  ====================== */
console.log(complex.children[0]);

/* Contains is a method that can be used on the classlist method  */
console.log(container.contains("container"));

/* 2 ways of manipulating using methods chaining and inside of a function */

// const add_class_to_body = () => {
//   container.add("box-2");
// };

// add_class_to_body();

// console.log(container);
/*======= Stopped here =======*/
/* Event Listeners allows you to listen for user input on selected elements */
const button = document.querySelector("button");
let num = 0;

// Define a count function
const count = (num2) => {
  num += num2;

  return num;
};

button.addEventListener("click", () => {
  let countNum = count(1);
  // Below can be chained together or can be handled separately
  // document.querySelector(".counter").innerHTML = countNum; ===========
  const counter = document.querySelector(".counter");
  counter.innerHTML = countNum;
});

// Define a count function
// const count = (num2) => {
//   num += 1;
//   console.log(num);
//   return num;
// };
// button.addEventListener("click", count);

/* Don't call this function just point to it, this makes this method not so great for when the function requires arguments */
