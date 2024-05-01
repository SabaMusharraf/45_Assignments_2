//Question # 18
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
has changed. */
let countries = ["Belgium", "China", "America", "Dubai", "Saudia Arabia"];
// print the array in original order
console.log("Original Array:", countries);
// Make a copy of array and print in alphabetical order
let inOrder = (countries.slice().sort());
console.log("In Alphabetical Order:", inOrder);
// Original array still original
console.log("Still Original:", countries);
//Reverse array without modifiying the original array
let copy = (inOrder.slice());
console.log("In reverse mode ", copy.reverse());
//Original array still original
console.log("Still Original:", countries);
//Reverse the original array
console.log("Reverse the original array list:", countries.reverse());
//Reverse array again and back to its original mode
console.log("Reverse again and trun it to its first original condition:", countries.reverse());
//Print the Original array in Alphabetical Order
console.log("Original Array in Alphabetical Order:", countries.sort());
//Print the original array in reverse mode
console.log("Original Array in Reverse mode: ", countries.reverse());
export {};
