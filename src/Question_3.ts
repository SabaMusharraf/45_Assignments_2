// Question # 3

/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase. */

let myName = " Saba hussian"

// Lower Case
console.log(myName.toLowerCase());

// Upper Case
console.log(myName.toUpperCase());

// Title Case
console.log(myName.replace (/\b\w/g,(char)=> char.toUpperCase()));

let sentance:string = "a quick brown fox jumps over a lazy dog"

console.log(sentance.replace (/\b\w/g,(char)=> char.toUpperCase()));