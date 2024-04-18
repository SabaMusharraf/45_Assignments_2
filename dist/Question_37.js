"use strict";
// Question # 37
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a
shirt of any size with a different message.
 */
function make_Shirt(size = "Large", print = "I Love Typrscript") {
    console.log(`The shirt size is ${size} with pirnt ${print} on the shirt`);
}
make_Shirt();
make_Shirt("Medium");
make_Shirt("small", "I Love Javascript");
