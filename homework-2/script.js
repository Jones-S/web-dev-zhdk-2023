const domElements = {
  button: false,
  icon: false,
};

/*
 * sets up necessary dom selections and eventlisteners
 */
function setup() {
  // selecting the button via data attribute
  // could be done via selecting an id or a class as well
  // but a data attribute is more explicit
  domElements.button = document.querySelector("[data-js-button]");

  domElements.icon = document.querySelector("[data-js-icon]");

  // just checking if the button is correctly selected
  console.log("button: ", domElements.button);

  // listening to a click event on the button
  // executing handleClick() function each time the button is clicked
  domElements.button.addEventListener("click", handleClick);
}

function handleClick(event) {
  console.log("event: ", event);

  rotate(domElements.icon);
}

function rotate(element) {
  // toggles class to element passed via parameter
  // class triggers a css animation
  element.classList.toggle("is-rotating");
}

// execute setup function
setup();
