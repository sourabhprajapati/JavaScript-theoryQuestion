// What is Currying?
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.

// Convert f(a, b) into f(a)(b).
// /*f(a,b) implementation */
// function f(a,b) {
//     return "Works"
// }

// /*f(a)(b) implementation */
// function f(a) {
//     return (b) => {
//          "Works"
//     }
// }
// console.log(f(1)(2)) // works
// console.log(f(1)); /* (b) => {return "Works" } */

// Why should currying be used?
// Following are the reasons why currying is good :

// ✅ It makes a function pure which makes it expose to less errors and side effects.

// ✅ It helps in avoiding the same variable again and again.

// ✅ It is a checking method that checks if you have all the things before you proceed.

// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

// How does currying work?
// Currying is a function that takes multiple arguments as input. It transform the function into a number of functions where every function will accept one argument.


// /*Simple function*/ 
// const add = (a, b, c)=>{
//     return a+ b + c
// }
// console.log(add(1,2 ,3)); // 6

// /* Curried Function */
// const addCurry = (a) => { // takes one argument
//     return (b)=>{                 //takes second argument
//         return (c)=>{             //takes third argument
//             return a+b+c
//         }
//     }
// }
// console.log(addCurry(1)(2)(3)); //6

// Evaluate(”sum”)(2)(4) ⇒ 2+4 = 6 on basis of input given to first param.

// function sum(operation) {
//     return (a) => {
//         return (b) => {
//         if(operation === "sum")
//                   return a + b;
//                     else if(operation === "multiply")
//                     return a * b;
//                     else if(operation === "divide")
//                     return a / b;
//                     else if(operation === "subtract")
//                     return a - b;
//                     else return "No / Invalid Operation Selected"
//         }
//     }
// }
// Write a currying function that takes infinite arguments.

// //recursive solution
// const sum = function(a) {
//     return function(b) {
//         if (b) {
//             return sum(a + b);
//         } else {
//             return a;
//         }
//     }
// }
