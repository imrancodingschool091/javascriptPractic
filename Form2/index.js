let username=document.getElementById("username").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let confirmPassword=document.getElementById("Cpassword").value
let mobileNumber=document.getElementById("mobile").value


username.addEventListener("input", function () {
    if (username.value.length === 0) {
      userAlert.innerText = "";
    } else if (username.value.length < 5) {
      userAlert.innerText = "Username must contain at least 5 characters!";
    } else {
      userAlert.innerText = "";
    }
  });







