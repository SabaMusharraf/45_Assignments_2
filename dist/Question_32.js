// Question # 32
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
 has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available.
 
 • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
let current_users = ["Syed Zulfiqar", "Amin Alam", "Sara Khan", "Shahid Afridi", "Umer Gul"];
let new_users = ["Shahid Afridi", "Ahmed Raza", "Farah Naz", "Umer Gul", "Iffat Batool"];
new_users.forEach(new_user_name => {
    let condition = current_users.some(current_user_name => current_user_name.toLowerCase() === new_user_name.toLowerCase());
    if (condition) {
        console.log(`Sorry, ${new_user_name} is already taken`);
    }
    else {
        console.log(`${new_user_name} is available`);
    }
});
export {};
