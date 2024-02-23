"use strict";

var inputElement = document.getElementById("name-input");
var outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", function () {
  var inputValue = inputElement.value.trim();
  outputElement.textContent = inputValue === "" ? "Anonymous" : inputValue;
});