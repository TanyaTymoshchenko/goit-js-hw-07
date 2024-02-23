"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  var randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
}

document
  .querySelector(".change-color")
  .addEventListener("click", changeBackgroundColor);