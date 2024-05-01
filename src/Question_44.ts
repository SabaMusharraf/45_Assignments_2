// Question # 44

/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time. */

import inquirer from "inquirer";
import chalk from "chalk";

function makeSandwich (...items:string[]){
    console.log(chalk.bold.greenBright("\n Making sandwich with the following items: \n"));
    items.forEach(item => console.log(item));
    console.log(chalk.bold.blueBright("\n Now Enjoy Your Sandwich"));
}

makeSandwich("chicken", "cheese", "mayo", "lettuce");

makeSandwich("Jam", "Bread");

makeSandwich("Beef", "Mayo", "lettuce", "Tomatos", "Tomato Ketchep", "cucumber");


