// Question # 15

/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
 a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the 
name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

let guestList = ["Maryam", "Hina", "Maira"];
let invitation_1 = "You are invited to dinner";

// Delete from the last and return the deleted value
console.log(guestList.pop(), "Can't make the dinner");


console.log(guestList);

//Add a new guest name
guestList.push("Iffat");

// After adding a new guest name
console.log("This is a new guest list", guestList);

guestList.forEach((guests)=>{
    console.log(`${guests}, ${invitation_1} `);
})

// console.log("\n");
// guestList.forEach(guest=> console.log(guest, invitation_1));