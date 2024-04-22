"use strict";
// Question # 39
/* City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return `${city} ${country}`;
}
let val = city_country("Lahore,", "Pakistan");
console.log(val);
let val2 = city_country("Paris,", "London");
console.log(val2);
let val3 = city_country("Toronto,", "Canada");
console.log(val3);
