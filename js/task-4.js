"use strict";

var loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var emailValue = loginForm.elements["email"].value.trim();
  var passwordValue = loginForm.elements["password"].value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    var formData = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formData);
    loginForm.reset();
  }
});