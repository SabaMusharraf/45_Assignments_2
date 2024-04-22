"use strict";
// Question # 41
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */
function show_magicians(magicians) {
    magicians.forEach((names) => console.log(names));
}
let magician_names = ["Harry Potter", "Albus Dumbledore", "Hermione Grangery"];
show_magicians(magician_names);
