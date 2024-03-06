// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//name arry
var guestArry = ["Hajra", "Ariba", "Fatima"];
//cannot make dinner
var cannotAttend = "Fatima";
//invite new guest
var newguest = "Ariba";
guestArry[guestArry.indexOf(cannotAttend)] = newguest;
//send message
//guestArry.map((item)=> console.log(`Hello,${item} you are invited to dinner`));
guestArry.unshift("kainat");
var middleGuest = "Hajra";
var middleindex = guestArry.length / 2;
guestArry.splice(middleindex, 0, middleGuest);
guestArry.push("kainat");
guestArry.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
