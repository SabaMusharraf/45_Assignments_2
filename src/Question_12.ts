// Questionn # 12

/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name. */

let name_1 = ["Maryam", "Hina", "Maira", "Iffat", "Rabia"];
let greetings = "Asssalam O Alaikum, how are you?";

//For Loop

for (let i=0; i < name_1.length; i++){
    console.log(`${greetings}, ${name_1[i]}`)
}

// For Each Loop

let friendsName = ["Maryam", "Hina", "Maira", "Iffat", "Rabia"];

friendsName.forEach((val)=>{
    console.log(greetings , val);
})


