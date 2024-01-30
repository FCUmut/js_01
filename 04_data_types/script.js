// JavaScript is dynamically-typed language, we dont explicitly define the types for variables. But Java, C, C++ etc. are statically-typed languages.

//TypeScript is a superset of JavaScript, which allows static-typing. To make code more verbose and less prone to errors.

// Primitive Types

// String
const firstName = "Sara";

// Number
const age = 30;
// there is no specific float or decimal or etc., all of them is 'number' in JS.
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;
// null is not reference type, it is primitive but 'typeof' operator tells that null is an 'object' because in first implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was '0' and null was represented as the NULL pointer ('0x00'), null had '0' as type tag, hence the 'typeof' return value of null is 'object'.

// Undefined
let score;

// Symbol
const id = Symbol("id");

// BigInt
const n = 9834854735933948543n;

// Reference Types
// all reference types are objects

const numbers = [1, 2, 3, 4]; // object

/* const person = {
  name: "Furkan",
}; */ // object

function sayHello() {
  console.log("Hello");
} // function - it's still an object but defined as function object.
