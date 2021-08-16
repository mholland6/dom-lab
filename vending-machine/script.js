let total = 0;
let limeColaPrice = 2;
let saltedPeanutsPrice = 3;
let chocolateBarPrice = 4;
let fruitGummiesPrice = 6;

let runningTotal = document.getElementById("totalCost");
let limeCola = document.getElementById("limeColaButton");
let saltedPeanuts = document.getElementById("saltedPeanutsButton");
let chocolateBar = document.getElementById("chocolateBarButton");
let fruitGummies = document.getElementById("fruitGummiesButton");

// This function updates the total on the page.
let updateTotal = function() {
  runningTotal.innerHTML = total.toFixed(2);
}

// This function adds the price of lime cola to the total
// and runs the update total function to have the page 
// reflect this addition.
let addLimeCola = function() {
  total += limeColaPrice;
  updateTotal();
}

limeCola.addEventListener("click", addLimeCola);

let addSaltedPeanuts = function() {
  total += saltedPeanutsPrice;
  updateTotal();
}

saltedPeanuts.addEventListener("click", addSaltedPeanuts);

let addChocolateBar = function() {
  total += chocolateBarPrice;
  updateTotal();
}

chocolateBar.addEventListener("click", addChocolateBar);

let addFruitGummies = function() {
  total += fruitGummiesPrice;
  updateTotal();
}

fruitGummies.addEventListener("click", addFruitGummies);



// let limeColaButton = document.getElementById("limeColaButton");
// limeColaButton.addEventListener("click", (event) => {
//   // when clicked, the item price will be added to total.
//   total += 2;
// });

// let saltedPeanutsButton = function() {}

// let limeColaButtonElement = document.getElementById("limeColaButton");
// limeColaButtonElement.addEventListener("click", (event) => {
//   // when clicked, the item price will be added to total.
//   total += 2;
// });

// let limeColaButtonElement = document.getElementById("limeColaButton");
// limeColaButtonElement.addEventListener("click", (event) => {
//   // when clicked, the item price will be added to total.
//   total += 2;
// });

// let limeColaButtonElement = document.getElementById("limeColaButton");
// limeColaButtonElement.addEventListener("click", (event) => {
//   // when clicked, the item price will be added to total.
//   total += 2;
// });

// const totalCost = document.getElementById("totalCost");
// // function runningTotal(){
// //   if (limeColaButtonElement) {
// //     total += 2;

// //   }
// // };