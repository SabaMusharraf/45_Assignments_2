// Qustion_27

/*  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

//Version 1

let aleinColor_1 = "green";
if (aleinColor_1 === "green"){
    console.log("The player earned 5 points");
}
else if(aleinColor_1 === "yellow"){
    console.log("The player earned 10 points");
}
else if (aleinColor_1 === "red"){
    console.log("The player earned 15 points");
}

// Version 2

let aleinColor_2 = "yellow";
if (aleinColor_2 === "yellow"){
    console.log("The player earned 10 points");
}
else if(aleinColor_2 === "green"){
    console.log("The player earned 5 points");
}
else if (aleinColor_2 === "red"){
    console.log("The player earned 15 points");
}

// Version 3

let aleinColor_3 = "red";
if (aleinColor_3 === "red"){
    console.log("The player earned 15 points");
}
else if(aleinColor_3 === "green"){
    console.log("The player earned 5 points");
}
else if (aleinColor_3 === "yellow"){
    console.log("The player earned 10 points");
}