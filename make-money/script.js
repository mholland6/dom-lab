const addedCoinsSection = document.getElementById("displayedCoins");
const penny = document.getElementById("penny");
const nickel = document.getElementById("nickel");
const dime = document.getElementById("dime");
const quarter = document.getElementById("quarter");
const makeMoneySubmitElement = document.getElementById("theForm");

makeMoneySubmitElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const numCoinsElement = document.getElementById("numCoins");
  const numCoins = parseInt(numCoinsElement.value);
  console.log(numCoins);
  const whichCoinElement = document.getElementById("whichCoin");
  const whichCoin = whichCoinElement.value;
  console.log(whichCoin);
  //let coinTypeToAdd;
  for (let i = 1; i <= numCoins; i++) {
    const newCoin = document.createElement("div");
    console.log(newCoin);
    console.log(addedCoinsSection);
    // this is wrong: addedCoinsSection.classList.add(newCoin);
    newCoin.innerText = whichCoin;
    newCoin.classList.add("coin", whichCoin);
    addedCoinsSection.append(newCoin);

    newCoin.addEventListener("click", (e) => {
      e.target.remove();
    });
  }
});
// const clickableCoinDiv = document.getElementById("displayedcoins");
// clickableCoinDiv.addEventListener("click", (e) => {
//   newCoin = e.target;
//   console.log(newCoin);
//   // if (e.target.classList.contains("coin")) {
//   //   e.remove();
//   // }
//   });
