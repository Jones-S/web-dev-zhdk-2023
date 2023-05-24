console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// Task: Select the div (blue box) in the index html and change its looks.

/* 1. solution:
 * 1 line with style information in js file (less than optimal)
 */

// document.querySelector('[data-js="box"]').style.backgroundColor = "red";

/* 2. solution:
 * adding a class while style information is still in style.css 👍
 */

const element = document.querySelector('[data-js="box"]');
element.classList.add("red");

/* 3. solution
 * Very similar to the 1. solution but changes the styling without changing
 * one property, but instead allows to write pure css which is added as inline css.
 */

// const element = document.querySelector('[data-js="box"]');
// element.style.cssText = "background-color: red; font-size: 1.1rem;";
