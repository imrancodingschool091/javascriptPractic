let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let userAlert = document.getElementById("userAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let submitBtn = document.getElementById("submit");
let output = document.querySelector(".output");
let user = document.getElementById("user");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let form = document.querySelector("form");

username.addEventListener("input", function () {
  if (username.value.length === 0) {
    userAlert.innerText = "";
  } else if (username.value.length < 5) {
    userAlert.innerText = "Username must contain at least 5 characters!";
  } else {
    userAlert.innerText = "";
  }
});

email.addEventListener("input", function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.length === 0) {
    emailAlert.innerText = "";
  } else if (!emailPattern.test(email.value)) {
    emailAlert.innerText = "Please enter a valid email address!";
  } else {
    emailAlert.innerText = "";
  }
});

password.addEventListener("input", function () {
  if (password.value.length === 0) {
    passwordAlert.innerText = "";
  } else if (password.value.length < 8) {
    passwordAlert.innerText = "Password must contain at least 8 characters!";
  } else if (!/[A-Z]/.test(password.value)) {
    passwordAlert.innerText =
      "Password must contain at least one uppercase letter!";
  } else if (!/[a-z]/.test(password.value)) {
    passwordAlert.innerText =
      "Password must contain at least one lowercase letter!";
  } else if (!/[0-9]/.test(password.value)) {
    passwordAlert.innerText = "Password must contain at least one number!";
  } else {
    passwordAlert.innerText = "";
  }
});

function submitForm(event) {
  event.preventDefault();
  let valid = true;

  if (username.value.length === 0) {
    userAlert.innerText = "This field is required!";
    valid = false;
  } else if (username.value.length < 5) {
    userAlert.innerText = "Username must contain at least 5 characters!";
    valid = false;
  } else {
    userAlert.innerText = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.length === 0) {
    emailAlert.innerText = "This field is required!";
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    emailAlert.innerText = "Please enter a valid email address!";
    valid = false;
  } else {
    emailAlert.innerText = "";
  }

  if (password.value.length === 0) {
    passwordAlert.innerText = "This field is required!";
    valid = false;
  } else if (password.value.length < 8) {
    passwordAlert.innerText = "Password must contain at least 8 characters!";
    valid = false;
  } else if (!/[A-Z]/.test(password.value)) {
    passwordAlert.innerText =
      "Password must contain at least one uppercase letter!";
    valid = false;
  } else if (!/[a-z]/.test(password.value)) {
    passwordAlert.innerText =
      "Password must contain at least one lowercase letter!";
    valid = false;
  } else if (!/[0-9]/.test(password.value)) {
    passwordAlert.innerText = "Password must contain at least one number!";
    valid = false;
  } else {
    passwordAlert.innerText = "";
  }

  if (valid) {
    alert("your data has been submitted!");

    form.style.display = "none";

    output.classList.add("show");

    user.innerText = `Username: ${username.value}`;
    userEmail.innerText = `Email: ${email.value}`;
    userPassword.innerText = `Password: ${password.value}`;
  }
}

submitBtn.addEventListener("click", submitForm);
