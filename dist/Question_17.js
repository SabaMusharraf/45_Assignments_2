// Question # 17
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them
to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */
let guestList_1 = ['Fatima', 'Maryam', 'Hina', 'Aamna', 'Iffat'];
let messageToGuest = "on the dining table, there is only at least two persons space due to s0me time issuence ";
let paradonMessage = "Sorry, I can't invite to the dinner due to some time issue";
let messageForDinne = "You are invited to the dinner";
console.log(messageToGuest);
console.log(guestList_1);
//Remove from the end by using pop method
console.log(guestList_1.pop(), paradonMessage);
console.log(guestList_1);
//Remove form start by using shift method
console.log(guestList_1.shift(), paradonMessage);
console.log(guestList_1);
//Remove from the middle by using splice method
console.log(guestList_1.splice(1, 1), paradonMessage);
console.log(guestList_1);
//Print the message to the guest by using for each loop
guestList_1.forEach((guest) => {
    console.log(guest, messageForDinne);
});
//Remove remaing guest form the list by using splice method
guestList_1.splice(0, 2);
console.log(guestList_1);
export {};
