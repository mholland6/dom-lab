let lightBulb = document.getElementById("lightBulb");
let onButton = document.getElementById("on");
let offButton = document.getElementById("off");
let toggleButton = document.getElementById("toggle");
let endButton = document.getElementById("end");

let turnOn = function() {
  lightBulb.style.backgroundColor = "lemonchiffon";
}

onButton.addEventListener("click", turnOn);

let turnOff = function() {
  lightBulb.style.backgroundColor = "dimgrey";
}

offButton.addEventListener("click", turnOff);

let toggle = function() {
  if (lightBulb.style.backgroundColor === "dimgrey") {
    lightBulb.style.backgroundColor = "lemonchiffon";
  } else {
    lightBulb.style.backgroundColor = "dimgrey";
  }
}

toggleButton.addEventListener("click", toggle);

let end = function() {
  lightBulb.remove();
  // let allButtons = document.querySelectorAll("button");
  // allButtons.disabled = true;
  document.getElementById("on").disabled = true;
  document.getElementById("off").disabled = true;
  document.getElementById("toggle").disabled = true;
  document.getElementById("end").disabled = true;
}

endButton.addEventListener("click", end);





