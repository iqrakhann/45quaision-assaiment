;


// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great2(magicians: string[]): string[]{
    const great_magicians: string[] = []
    for(let i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + ' the great');
    }
    return great_magicians;
}

function show_magicians(Magicians: string[]): void {
    for (const magician of Magicians)  {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magicians3: string[] = ["Burhan","Usman","Zeeshan"];

const great_magicians2: string[] = make_great2(magicians3);
show_magicians(magicians3)
show_magicians(great_magicians2);