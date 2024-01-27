console.log("hello");

// you can clear console with clear(); function
// also you can do 'Ctrl + L ' or reload (F5) the page

// if you write "console" to dev tools' console you can see console objects

// you can download 'JavaScript (ES6) code snippets' extension and shortcut the "console.log()" with just typing 'clg'

// you can console log objects as table
console.table({ name: "Furkan", email: "furkancomalak@gmail.com" });

const x = 100;

// you can group the console outputs with using 'group("simple")' & 'groupEnd'
console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";
// you can apply CSS styles on console logs with creating CSS style variable and then add %c to beginning of the text and add ', the style ' as second parameter of console log
console.log("%cHello Worlds", styles);
