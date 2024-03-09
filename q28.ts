
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits : string[]= ["apple","mango","grapes","kivi","papaya"]
if ('favorite_fruits.includes("mango")'){
    console.log("mango")
} else  {
    console.log('favorite_fruits.includes("kivi")')
}    console.log("kivi")
if ('favorite_fruits.includes("grapes")'){
    console.log("grapes")
} else {
    console.log('favorite_fruits.includes("apple")')
}     console.log("apple")

if ('favorite_fruits.includes("papaya")'){
    console.log("papaya")
}