/* Console.logging() */
console.log("Hello from the console.");
/* Inline comment/block comment*/
// Line comment
// console.info("Hello from the console. Info");
// console.warn("Hello from the console. Warn");
// console.trace("Hello from the console. Trace");
// console.error("Hello from the console. Error");

/* Variables */
var variable = "Variable can be changed or re declared";
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

/* Functions */
/* ES 2005 function still valid */
function sum(a, b) {
  var inside = 0;
  console.log(a + b, "add function");
  /* return is the last call made in a function */
  return a + b;
}

// add(1, 2); =================
/* ES2016  function new way of writing functions, on new projects rather use this */
const multiply = (a, b) => {
  console.log(a * b, "multiply function");
};

const sub = (arg1, arg2) => arg1 - arg2;
console.log(sub(50, 11.4));

function showCallback(a, b) {
  console.log(a + b, "showCallback");
}
console.log(sum(10, 10), sum(10, 10));
//
showCallback(sum(10, 10), sum(10, 10));

// multiply(add(2, 4), add(10, 10)); ===============

/* Equality */
/* ==  equal*/
console.log("1" == 1, "'1' == 1");
/* ===  strict equal*/
console.log("1" === 1, " '1' === 1");
/* != not equal */
console.log("1" != 1, "'1' != 1");
/* !==  strict not equal*/
console.log("1" !== 1, " '1' !== 1");
/* > greater than */
console.log("a" > "b", "a > b");
/* < less than */
console.log(10 < 20, "10 < 20");
console.log(20 < 10, "20 < 10");
/* >= greater or equal */
console.log(10 >= 5, "10 >= 5");
/* <= less than or equal */
console.log(5 <= 10, "5 <= 10");

/* Objects */

/* [1, 2, 3, 4] array */
/* {key: "value"} object */

const testArray = ["one", "two", "three", "four"];
const user1 = {
  userName: "Talita",
  age: 30,
  occupation: "Dev",
  married: false,
};
const array2 = [{ obj: 1 }, { obj: 2 }];

/* Stop here============================ */
/* Loops */
/* for(let i = 0; i < arr.length; i++ ) ============= */
for (let i = testArray.length - 1; i >= 0; i--) {
  /* i = counter because it is an array we ar looping over we can use the counter to access the index of the array elements*/
  // console.log(`\nValue: ${testArray[i]}, Index: ${i} old for loop --`);
}
for (let i = 0; i <= testArray.length; i++) {
  /* i = counter because it is an array we ar looping over we can use the counter to access the index of the array elements*/
  // console.log(`\nValue: ${testArray[i]}, Index: ${i} old for loop ++`);
}
/* for(const item in array)  ============= */
for (const num in testArray) {
  // console.log(num);
  /* num = index inside array index starts at 0 not!!!!! 1 */
}
/* for(const item of object)  =============*/
for (const num of testArray) {
  // console.log(num);
  /* num = value of item in the array */
}
/* arr.forEach(item => {doSomething})  ============= */
testArray.forEach((value, x) => {
  // console.log(`Value: ${value}, Index: ${x}`);
});

/* While loop ============= */
let num = 0;
while (num !== 10) {
  for (let i = 0; i <= 10; i++) {
    // console.log(`for loop while ${num}`);
    num = i;
  }
  // console.log(num);
}

/* Conditional Statements */
/* 
if(something){
  doSomething
}else{
  doSomething
}
*/

// function checkIf() { =========================
//   if (something) {
//    dosomething
//    return /* Return stops the other if() from running in this function */
//
//   }
//   if (somethingselse) {
//      dosomething
//     return
//   } else {
//      dosomething;
//      return
//   }
// }
