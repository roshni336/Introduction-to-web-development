//Javascript Variables

var fullname = "Roshni Magar";
let address = "Kathmandu, Nepal";
const bloodGroup = "AB+";

console.log("Full Name:", fullname);
console.log("Address:", address);
console.log("Blood Group:", bloodGroup);

//Data Types
let name = "Roshni"; //Name
let age = 20; //Number
let isStudent = false; //Boolean
let hoobies = ["Coding", "Traveling", "Cooking"]; //Array

console.log(hoobies[0]);

let user = {
  name: "Roshni",
  age: 20,
  isStudent: false,
  hoobies: ["Coding", "Traveling", "Cooking"],
}; //Object

console.log(user["name"]);
console.log(user.name);

//Functions
function greet(name) {
  console.log("Welcome", name);
}

greet("Roshni");

//DOM Manipulation

const headingElementById = document.getElementById("heading-2");
console.log("heading element by id", headingElementById);

const headingElementByQuery = document.querySelector("#heading-2");
console.log("heading element by query selector", headingElementByQuery);

headingElementByQuery.textContent = "Get element by query selector";
headingElementByQuery.style.color = "blue";

const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", function () {
  alert("Button clicked!");
  console.log("Button clicked");
});
