const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespace
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username tidak boleh kosong");
  } else {
    setSuccesFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email tidak boleh kosong");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email tidak valid");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password tidak boleh kosong");
  } else {
    setSuccesFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 tidak boleh kosong");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password2 tidak cocok");
  } else {
    setSuccesFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
}

// function isEmail (email) {
// return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|
// ((".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]) |
// (([a-z A-Z\-0-9]+\.)+[a-z A-Z]{2,}))$/.test.(email);
// }
