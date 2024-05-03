// Question # 16
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
let guestList_2 = ["Maryam", "Hina", "Iffat"];
let newMessage = "I want to invite more guest because I found bigger table for dinner";
// Add guest name to the beggining of the array
guestList_2.unshift("Fatima");
console.log(guestList_2);
// Add guest name to middle of the array
let middle = guestList_2.length;
console.log(middle);
let addInMiddle = middle / 2;
console.log(addInMiddle);
guestList_2.splice(addInMiddle, 0, "Aamna");
// Add guest name to the end of the array
guestList_2.push("Abdul Azeem");
console.log(guestList_2);
// Print the names with invitation message
console.log(newMessage);
guestList_2.forEach(guest => console.log(`${guest} you are invited to the dinner tonight.`));
export {};
