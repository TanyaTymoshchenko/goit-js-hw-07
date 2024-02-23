"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  var inputNumber = document.getElementById("controls").firstElementChild;
  var boxesContainer = document.getElementById("boxes");
  var number = parseInt(inputNumber.value);

  if (number >= 1 && number <= 100) {
    var newBoxes = "";

    for (var i = 0; i < number; i++) {
      var size = 30 + i * 10;
      var color = getRandomHexColor();
      newBoxes += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
    }

    boxesContainer.innerHTML = newBoxes;
    inputNumber.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}

document
  .querySelector("button[data-create]")
  .addEventListener("click", createBoxes);

document
  .querySelector("button[data-destroy]")
  .addEventListener("click", destroyBoxes);