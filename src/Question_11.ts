// Question # 11

/* Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
accessing each element in the list, one at a time. */

let names = ["Maryam", "Hina", "Maira", "Iffat", "Rabia"];

for (let i = 0; i < names.length; i ++){
    console.log(names[i]);
}

//By using for each loop
console.log("\n");
names.forEach (val=> console.log(val));