// Question # 3
/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase. */
let myName = " Saba hussian";
// Lower Case
console.log(myName.toLowerCase());
// Upper Case
console.log(myName.toUpperCase());
// Title Case
console.log(myName.replace(/\b\w/g, (char) => char.toUpperCase()));
let sentence = "a quick brown fox jumps over the lazy dog";
console.log(sentence.replace(/\b\w/g, (char) => char.toUpperCase()));
let sentence1 = "A Quick Brown Fox Jumps Over the Lazy Dog";
console.log(sentence1.replace(/\b\w/g, (char) => char.toLowerCase()));
export {};
