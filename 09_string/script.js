// Template Literals
const name = "Furkan";

let x;

x = `Hello, I'am ${name}`;

// String Properties and Methods

// const s = "Hello World"; // s is string
const s = new String("Hello World"); // s is object

// '.length' is property and it doesn't have parentheses because we use parentheses with methods, properties are more like 'attributes'.
x = s.length; // will return '11'

x = typeof s;

// Access value by key
x = s[1];

// its with two '_' not one '_' ,
x = s.__proto__;

//substring(x,y), x included but y is not included
x = s.substring(0, 5);

// substring(x), will start with x and go 'till the end
x = s.substring(7);

// 'substring' switches between indexes if start(x) is bigger than end(y) but for slice, it would return empty string and 'substring' returns whole index for .substring(NaN) because start index is 0 and end index is none also .substring(-x) would return the same

x = s.slice(-4, -1);

x = s.substring(7, 10);

x = "    Hello World";

x = x.trim(); // to get rid of whitespaces

x = s.replace("World", "John"); //replace(x, y) will find x and change it with y

x = s.includes("Hello"); //includes(x) to check if string contains x inside

x = s.valueOf(); // will give inside of the object which is true string Hello World without 's

x = s.split(" "); // split('x') splits string into xs

console.log(x);
