console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// remove the banana from the list and log the remaining list to the console
const fruits = ["🍊", "🍌", "🍏", "🥝"];

const banana = fruits.splice(1, 1);

console.log(fruits);
console.log("banana: ", banana);
