// List of ingredients, that will show on screen after loading the page
const ingredients = [
  {
    name: "Mozzarella di Buffala",
    id: "mozzarella",
    price: "4.00",
  },
  {
    name: "Salami",
    id: "salami",
    price: "3.00",
  },
  {
    name: "Caviar",
    id: "caviar",
    price: "13.00",
  },
  {
    name: "Truffles",
    id: "truffles",
    price: "18.00",
  },
  {
    name: "Olives",
    id: "olives",
    price: "1.50",
  },
  {
    name: "Cherry Tomatoes",
    id: "cherry-tomatoes",
    price: "1.50",
  },
];

function displayIngredients(ingredients) {
  const wrapper = document.querySelector('[data-js="ingredients-wrapper"]');

  for (let i = 0; i < ingredients.length; i++) {
    const item = document.createElement("li");
    // add class for styling
    item.classList.add("ingredient");

    // add data-attribute for selecting via js
    item.dataset.js = "ingredient";

    item.innerHTML = populateTemplate(ingredients[i]);
    wrapper.appendChild(item);
  }
}

function populateTemplate(ingredient) {
  // Using template literals, we can return a nicely populated template
  const template = `
      <span class="ingredient-name" data-js="name">${ingredient.name}</span>
      <div>
        <span class="ingredient-price" data-js="price">${ingredient.price}</span> <span class="ingredient-currency">CHF</span>
      </div>
      <input type="checkbox" id="${ingredient.id}" name="select" value="selected">
      <label class="ingredient-checkbox-label" for="${ingredient.id}">Select</label>
    `;
  return template;
}

function calculatePrice() {
  const selectedIngredients = getSelectedIngredients();
  const price = calculateTotalPrice(selectedIngredients);
  console.log("total price: ", price);

  displayPriceOnScreen(price);
  displaySelectedIngredients(selectedIngredients);
}

function calculateTotalPrice(selectedIngredients) {
  console.log("selectedIngredients: ", selectedIngredients);

  let totalPrice = 0;

  selectedIngredients.forEach((ingredient) => {
    const itemPrice = ingredient.querySelector('[data-js="price"]').innerHTML;

    console.log("itemPrice: ", itemPrice);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    const priceAsNumber = parseFloat(itemPrice, 10);
    // each time we add the price to the total price
    totalPrice = totalPrice + priceAsNumber;
  });

  return totalPrice;
}

function getSelectedIngredients() {
  const ingredients = document.querySelectorAll('[data-js="ingredient"]');

  // querySelectorAll will return a NodeList
  // to effectively work with it, we need an Array
  // Therefore we use the spread operator to create an Array from it
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const ingredientsArray = [...ingredients];

  // array.filter > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const selectedItems = ingredientsArray.filter((item) => {
    const inputField = item.querySelector("input");

    // return item if checked is true (== selected)
    return inputField.checked;
  });

  console.log("selectedItems: ", selectedItems);
  return selectedItems;
}

function displayPriceOnScreen(price) {
  // turn number into price with two numbers after the comma
  const formattedPrice = price.toFixed(2);

  // find div where we want to display the price
  const priceContainer = document.querySelector('[data-js="price-amount"]');

  // and change the innerhtml of that container to display the price
  priceContainer.innerHTML = `<strong>${formattedPrice} CHF</strong>`;
}

function displaySelectedIngredients(ingredients) {
  const container = document.querySelector('[data-js="final-ingredients"]');

  // clearing list, to remove earlier added items
  container.innerHTML = "";

  // add a list item for each selected ingredient
  ingredients.forEach((item) => {
    // retrieve the name of the item
    const ingredientName = item.querySelector('[data-js="name"]').innerHTML;
    console.log("ingredientName: ", ingredientName);

    // create list item HTML
    const li = document.createElement("li");
    li.classList.add("chosen-ingredient");
    li.innerHTML = ingredientName;

    // and add it at the end of the ul
    container.appendChild(li);
  });
}

/*
 * Render HTML
 */

displayIngredients(ingredients);

const button = document.querySelector('[data-js="calculate-price-button"]');
button.addEventListener("click", calculatePrice);
