// Question # 24

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
 more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
 
console.log("Tests for equality and inequality with strings");
// Show Equality
let number_1:number = 200; 
let number_2:string = "200";
let test_11 = number_1 == number_2 ? "true": "false";

console.log(test_11);

// Show UnEqualtiy
let test_12 = number_1 === number_2 ? "true": "false";
console.log(test_12);

console.log("Tests using the lower case function");

let lowerCase = "saba Hussain";
let upperCase = "SABA HUSSAIN";

let test_13 = lowerCase == upperCase ? "true": "false";
console.log(test_13);

/* Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to */

 console.log("Equality and inequality");
 
 let num1 = 100;
 let num2 = 20;
 let test_14 = num1 === num2 ? "equal": "unequal";
 console.log(test_14);

 let test_15 = num1 !== num2 ? "equal": "unequal";
console.log(test_15);

console.log("Greater than")

let test_16 = num1 > num2 ? "true": "false";
console.log(test_16);

console.log("less than to");
let test_17 = num1 < num2 ? "true": "false";
console.log(test_17);

console.log(" greater than or equal to");

let test_18 = num1 >= num2 ? "true": "false";
console.log(test_18);

console.log("less than or equal to")
let test_19 = num1 <= num2;
console.log(test_19);

console.log('Tests using condition "and"');

let test_20 = num1 > num2 && num1 !== num2;
console.log(test_20);

let test_25 = num1 < num2 && num1 == num2;
console.log(test_25);

console.log('Test using condition "or"');
let test_26 = num1 !== num2 || num1 == num2;
console.log(test_26);