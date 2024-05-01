// Question # 44
import chalk from "chalk";
function makeSandwich(...items) {
    console.log(chalk.bold.greenBright("\n Making sandwich with the following items: \n"));
    items.forEach(item => console.log(item));
    console.log(chalk.bold.blueBright("\n Now Enjoy Your Sandwich"));
}
makeSandwich("chicken", "cheese", "mayo", "lettuce");
makeSandwich("Jam", "Bread");
makeSandwich("Beef", "Mayo", "lettuce", "Tomatos", "Tomato Ketchep", "cucumber");
