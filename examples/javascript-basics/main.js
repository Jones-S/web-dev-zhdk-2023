const button = document.querySelector("[data-js-button]");
console.log("button: ", button);

// const button = document.getElementById("my-button");
// console.log("button: ", button);

button.innerHTML = "My new button text";

const myNumber = 28763;

const recipe = {
  duration: "30min",
  difficulty: "very hard",
  recipeNumber: myNumber,
  ingredients: {
    sauce: ["pepper", "tomato", 3, "salt", { curry: ["kardamom", "cinnamon"] }],
    maindish: [],
  },
};

console.log("recipe.ingredients.sauce: ", recipe.ingredients.sauce);

const myArray = ["jonas", "elias", "cyrill", "jin"];
console.log("myArray[0]: ", myArray[0]);

console.log("myArray[2]: ", myArray[2]);

console.log("myArray.length: ", myArray.length);

recipe.anotherKey = "another Keys value";

// Functions

function add(i, y, z) {
  return i + y + z;
}

const result1 = add(1, 2, 4);

console.log("result1: ", result1);

const number1 = 1;
const number2 = 2;
const number3 = 4;

const result2 = add(number1, number2, number3);
console.log("result2: ", result2);

function logToTheConsole(input) {
  console.log("input: ", input);
}

function printTeamPositions(
  goalie,
  defender1,
  defender2,
  middleField,
  attacker
) {
  console.log(
    "%c ============ printTeamPositions ==========",
    "background: #FDD187; color: #120f9d"
  );
  console.log(`${goalie} has shirt number 1`);
  console.log(
    `The defenders ${defender1} and ${defender2} make sure nobody reaches the goal`
  );
  console.log(`Our attacker ${attacker} should score as much as possible`);
  console.log("=================================");
}

printTeamPositions(
  "tanya (mf)",
  "elias (g)",
  "basil (d)",
  "david (d)",
  "lu (mf)",
  "irina (a)"
);

function printTeamPositionsFromObject1({
  defender1,
  goalie,
  defender2,
  attacker,
  middleField,
}) {
  console.log(
    "%c ============ printTeamPositionsFromObject1 ==========",
    "background: #45A031; color: #120f9d"
  );
  console.log(`${goalie} has shirt number 1`);
  console.log(
    `The defenders ${defender1} and ${defender2} make sure nobody reaches the goal`
  );
  console.log(`Our attacker ${attacker} should score as much as possible`);
}

function printTeamPositionsFromObject2(myTeam) {
  console.log(
    "%c ============ printTeamPositionsFromObject2 ==========",
    "background: #FD4831; color: #000"
  );
  console.log(`${myTeam.goalie} has shirt number 1`);
  console.log(
    `The defenders ${myTeam.defender1} and ${myTeam.defender2} make sure nobody reaches the goal`
  );
  console.log(
    `Our attacker ${myTeam.attacker} should score as much as possible`
  );
}

const team = {
  middleField2: "tanya",
  defender1: "elias (d)",
  defender2: "tanya (d)",
  middleField: "cyrill (mf)",
  attacker: "laberi (a)",
  goalie: "irina (g)",
};

printTeamPositionsFromObject1(team);
printTeamPositionsFromObject2(team);
