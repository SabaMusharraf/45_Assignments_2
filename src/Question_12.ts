// Questionn # 12

/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name. */

let name_1 = ["Maryam", "Hina", "Maira", "Iffat", "Rabia"];
let greetings = "Asssalam O Alaikum";

for (let i=0; i < name_1.length; i++){
    console.log(`${greetings} ${name_1[i]}`)
}
