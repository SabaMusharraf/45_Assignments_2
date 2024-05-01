// Question # 42
/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
function show_magician(magicians) {
    magicians.forEach(names => console.log(names));
}
function make_great(magicians) {
    return magicians.map(names => `The Great ${names}`);
}
let magician_name = ["Harry Potter", "Albus Dumbledore", "Hermione Grangery"];
let great_magician = make_great(magician_name);
show_magician(great_magician);
export {};
