console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// display a random emoji from this list:
const emojis = ["🐓", "🐈‍⬛", "🍊", "🥑", "👹", "🫀", "🦆", "🦎"];
// whenever the button "Show" is clicked.

function displayEmoji() {
  console.log("click");

  // Math.floor(4.5) = rounding to lower number (int)
  // Math.random() = returns random "number" between 0 and 1
  // emojis.length = length of array
  const randomFloat = Math.random();
  console.log("randomFloat: ", randomFloat);
  const decimalIndex = randomFloat * emojis.length;
  const randomNumber = Math.floor(decimalIndex);
  const item = emojis[randomNumber];
  console.log("item: ", item);

  showOnScreen(item);
}

function showOnScreen(emoji) {
  const box = document.querySelector("[data-js-emoji-box]");
  console.log("box: ", box);
  box.innerHTML = emoji;
}

// Hints:
// Select the button
// add a click handler (eventlistener)
// write a function to select a random emoji from the list
// display it on screen inside the '[data-js-emoji-box]'

console.log("emojis: ", emojis);

const button = document.querySelector("[data-js-button]");
console.log("button: ", button);

button.addEventListener("click", displayEmoji);
