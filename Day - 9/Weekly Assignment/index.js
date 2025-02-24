// Section 1: Data Types & Length
// 1. What will be the output of the following cod? Explain why?
let x = "5";
let y = 5;
console.log(x==y)
console.log(x===y)

const words = ["JavaScript", "Programming", "Function", "Hoisting"];

function getLongestWordLength(words) {
  let longestLength = 0;
  
  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }
  
  return longestLength;
}

console.log("Longest word in array "+getLongestWordLength(words)); 

// Output: Longest word in array 11


// Section 2: let, const, var & Scope
// 3. What will  be logged in the console? Explain your answer.
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a);
    // console.log(b);
    // console.log(c);
}
testScope();

// Explanation
console.log("var a is Globally declared value. So, 'a' is work function-scoped.");
console.log("It's ReferenceError because let and const is work locally. So, if I try to work in console.log so you should write const and let oustside the if block or other access point.");\

// 4. Rewrite the following function using const and fix any issues.
const name = "John";
function greet() {
    if(true) {
        const message = "Hello " + name;
        console.log(message);
    }
}
greet();


// Section 3: Traditional Function vs. Arrow Function
// 5. Convert this traditional function into an arrow function without changing the output.
function multiply (a, b) {
    return a*b;
}
let a1 = 10;
let b1 = 20;
console.log(multiply (a1, b1));
/*arrow function*/
const multiply1 = (a, b) => a*b;
console.log(multiply1 (a1, b1));

// Output:

200
200

// 6. What will be the output? Explain why.
const obj = {
    name: "Alice",
    sayHello: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};
obj.sayHello();

// Output:
// Hello, Alice

// Explanation
// The sayHello method of the obj object calls setTimeout with an arrow function as a callback. Arrow functions, unlike regular functions, do not have their own this context. Instead, they inherit this from the surrounding lexical scope.
// In this case, the surrounding lexical scope is the sayHello method, where this refers to the obj object. Thus, inside the arrow function, this.name will correctly refer to the name property of the obj object, which is "Alice".
// After a delay of 1000 milliseconds (1 second), the setTimeout function will execute the arrow function, logging "Hello, Alice" to the console.

// Section 4: Hoisting
// 7. What will be the output of this code? Explain why.
console.log(a);
var a = 10;
// console.log(b);
// let b = 10;


// Output:
// Reference Error

// Explanation\
// var is a global scope, so 'a' is declared but not assign in that time or before console.log(a), in 'let b' let is a local scope so create ReferenceError 'b' is not initialized before console.log(b). 'So, the output is undefined and ReferenceError: Cannot access 'b' before initialization.

// 8. Rearrange  the following function so it works correctly, explaning the problem.
console.log(square(5));
function square(n) {
    return n*n;
}

// console.log(double(4));
var double = function(n) {
    return n * 2;
}
console.log(double(4));

// Explanation
// The square function works correctly because function declarations are hoisted. You can call the square function before its declaration in the code.
// The double function, which is a function expression, should be called after its initialization. Hence, I moved the console.log(double(4)); call after the function definition.

// Section 5: Operators (Arithmetic, Assignment, Comparison, Logical)
// 9. What will be the output of the following expressions?
console.log(5 + "5");
console.log(5 - "3" );
console.log(5 * "2" );
console.log("10" / 2);
console.log(10 % "3");

// Outputs:
// 55
// 2
// 10
// 5
// 1


// 10. Rewrite this code using shorthand assignment operators.
let x = 10;
// x = x + 5;
console.log(x += 5);
// x = x * 2;
console.log(x *= 2);
// x = x - 3;
console.log(x -= 3);
// x = x / 2;
console.log(x /= 2);


// 11. What will be logged in the console? Explain why.
console.log(5 > 3 && 10 < 20);
console.log('true && true = true');
console.log(5 > 3 || 10 > 20);
console.log('true && true = true');
console.log(!(5 > 3));
console.log('!(true) = false');


// Section 6: Function Parameters vs Arguments
// 12. What will be the following function?
function sum(a, b, c = 5) {
    return a+b+c;
}
console.log(sum(2, 3));
console.log(sum(2, 3, 10));
// 13. Write a function that takes any number of arguments and returns their sum.
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0


// 14. Fix the following function to work correctly and explain the issues.
console.log("Outer function - ")
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1();
counter1();
const counter2 = outer();
counter2();
counter2();

