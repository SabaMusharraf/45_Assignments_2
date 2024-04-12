// Question # 23

/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

// let governorHouse = "onsite students";

// let result = governorHouse == "onsite students" ? "true": "false";

// console.log(result);

let x = 10;
let y = 5;

// console.log("Test 1 to 5 be True");
let test_1 = x !== y ? "true": "false";
console.log(test_1);

let test_2 = x > y ? "true": "false";
console.log(test_2);

let test_3 = y < x ? "true": "false";
console.log(test_3);

let test_4 = x + y == 15 ? "true": "false";
console.log(test_4);

let test_5 = x - y == 5 ? "true": "false";
console.log(test_5);

// console.log("Test 6 to 10 be False");

let test_6 = x == y ? "true": "false";
console.log(test_6);

let test_7 = x === y ? "true": "false";
console.log(test_7);

let test_8 = x < y ? "true": "false";
console.log(test_8);

let test_9 = x !< y ? "tue": "false";
console.log(test_9);

let test_10 = y > x ? "true": "false";
console.log(test_10);