// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.







//name arry
let guestArry:string[]=["Hajra","Ariba","Fatima"];

//cannot make dinner

let cannotAttend:string = "Fatima";

//invite new guest

let newguest:string = "Ariba";
guestArry[guestArry.indexOf(cannotAttend)]=newguest;
//send message
//guestArry.map((item)=> console.log(`Hello,${item} you are invited to dinner`));


guestArry.unshift("kainat");

let middleGuest:string= "Hajra";
let middleindex = guestArry.length/2;
guestArry.splice(middleindex,0,middleGuest);


guestArry.push("kainat");
console.log(guestArry);
console.log("we can invite only two people for dinner");

while(guestArry.length>2){

let removeguest = guestArry.pop();
 
console.log(`\nSoory ${removeguest} we can,t invite you to dinner`);
};

guestArry.map((item)=> console.log(`\n${item} you are still invited to dinner`));

guestArry.pop();
guestArry.pop();
console.log(guestArry);