// Question # 16
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
let guestList_2 = ["Maryam", "Hina", "Iffat"];
let newMessage = "I want to invite morre guest because I found bigger dinning table";
// Add guest name to the beggining of the array
guestList_2.unshift("Fatima");
console.log(guestList_2);
// Add guest name to  middle of the array
guestList_2.splice(2, 0, "Aamna");
console.log(guestList_2);
export {};
