// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician_1 = Magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["burhan", "usman", "zeeshan"];
show_magicians(magician);
