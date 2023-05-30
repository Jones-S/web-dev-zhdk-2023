const button = document.querySelector('[data-selector="burger"]');
const nav = document.querySelector('[data-selector="navigation"]');

console.log("button: ", button);
console.log("nav: ", nav);

function toggleNavigation() {
  console.log("clicked");
  nav.classList.toggle("is-open");
}

function toggleBurgerState() {
  button.classList.toggle("is-active");
}

function handleClick() {
  toggleNavigation();
  toggleBurgerState();
}

button.addEventListener("click", handleClick);
