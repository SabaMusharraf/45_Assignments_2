// Question # 43
/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name. */
function show_magicians1(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great1(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_name = ["Harry Potter", "Albus Dumbledore", "Hermione Grangery"];
let copy_magicians_name = magicians_name.slice();
let copy_great_magician = make_great1(copy_magicians_name);
// This is a original array
console.log("Original Array");
show_magicians1(magicians_name);
// This is a copy of an array
console.log("Copied Array");
show_magicians1(copy_great_magician);
export {};
