




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


guestArry.map((item)=> console.log(`\nDear ${item} you are invited to dinner!`));


