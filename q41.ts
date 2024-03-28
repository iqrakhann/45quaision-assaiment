

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
       
function make_great(magicians: string[]): void{
    for(let i = 0; i < magicians.length; i++) {
        magicians[i]= magicians[i] + ' the great'
    

}
}

function show_magician(Magicians: string[]): void {
    for (const magician of Magicians)  {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magicians2: string[] = ["Burhan","Usman","Zeeshan"];
make_great(magicians2);
show_magicians(magicians2)


