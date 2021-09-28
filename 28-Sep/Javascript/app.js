/* Console.logging() */
console.log("Hello from the console.");
// console.info("Hello from the console. Info");
// console.warn("Hello from the console. Warn");
// console.trace("Hello from the console. Trace");
// console.error("Hello from the console. Error");

/* Variables */
var Variable = "Variable can be changed or re declared";
const CONSTANT = "Constant cannot be changed";
let Variable2 = "Can be changed but not re declared";
var Variable = "Re declared";
Variable2 = "changed";

/* let Variable2 = "this will not work"; */
// console.log(`Variable:${Variable}, Variable2:${Variable2}`);

/* Primitives */
/* Number, strings, booleans,  null, undefined  */
const number = 2;
const number2 = "2";
const string = "string";
const True = true;
const False = false;
const Null = null;
const notANumber = NaN;
// console.log(
//   `number: ${typeof number}, number2:${typeof number2}, string:${typeof string}, True:${typeof True}, False:${typeof false}, Null:${typeof Null}, notANumber:${typeof notANumber}`
// );
/* Equality */
/* ==  equal*/
// console.log("1" == 1, "'1' == 1");
/* ===  strict equal*/
// console.log("1" === 1, " '1' === 1");
/* != not equal */
// console.log("1" != 1, "'1' != 1");
/* !==  strict not equal*/
// console.log("1" !== 1, " '1' !== 1");
/* > greater than */
// console.log(20 > 10, "20 > 10");
/* < less than */
// console.log(10 < 20, "10 < 20");
// console.log(20 < 10, "20 < 10");
/* >= greater or equal */
// console.log(10 >= 5, "10 >= 5");
/* <= less than or equal */
// console.log(5 <= 10, "5 <= 10");
/* Objects */
/* [1, 2, 3, 4] array */
/* {key: "value"} object */
/* Functions */

function add(a, b) {
  console.log(a + b, "add function");
  return a + b;
}

// add(1, 2); =================

const multiply = (a, b) => {
  console.log(a * b, "multiply function");
};

// multiply(add(2, 4), add(10, 10)); ===============

/* Loops */
/* for(let i = 0; i < arr.length; i++ ) */
/* for(const item in array) */
/* for(const item of object) */
/* arr.forEach(item => {doSomething}) */
/* Conditional Statements */
/* 
if(something){
  doSomething
}else{
  doSomething
}
*/
/* 
while(something is true){
  doSomething
} 
*/
