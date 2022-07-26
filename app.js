let password = document.getElementById("password");
let btnGen = document.querySelector(".btn-gen");
let btnCopy = document.querySelector(".btn-copy");

btnGen.addEventListener("click", () => {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLength = 12;

  var passwordInput = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    passwordInput += chars.substring(randomNumber, randomNumber + 1);
  }

  password.value = passwordInput;
});

btnCopy.addEventListener("click", () => {
  password.select();
  password.setSelectionRange(0, 999);
  document.execCommand("copy");
});

