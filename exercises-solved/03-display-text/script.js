console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// Select the div (grey box) and replace the text ("Change my text") to something else.

// sidenote: sometimes it is nice to see the change happen on screen
// because javascript will replace the text immediately you are likely not to see it happen
// so you could use a timeout to only execute your text-changer-function after a certain time has passed:

const time = 1000; // ms

const element = document.querySelector('[data-js="box"]');

function doSomethingLater() {
  console.log(`Log this text after ${time} milliseconds`);

  element.innerHTML = "<p>whatever <strong>bold</strong></p>";
}

// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
setTimeout(() => {
  doSomethingLater();
}, time);
