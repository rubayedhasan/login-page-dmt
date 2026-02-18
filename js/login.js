// get the element
const userNameField = document.querySelector("#user-name");
const passwordField = document.querySelector("#password");
const peekElement = document.querySelector("#peek-password");
const rememberLogField = document.querySelector("#log-checked");

// handler function:: submit button
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//   handler function:: toggle the peek icon and visible password
peekElement.addEventListener("click", function () {
  // condition
  if (passwordField.type === "password") {
    // change the  icon
    peekElement.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;

    // visible the password
    passwordField.type = "text";
  } else {
    // change the icon
    peekElement.innerHTML = `<i class="fa-regular fa-eye"></i>`;

    // hide the password
    passwordField.type = "password";
  }
});

// handler function :: remember me functionality
// part-1:: saving the user details on clicking remember me
rememberLogField.addEventListener("click", function () {
  const username = userNameField.value;
  const password = passwordField.value;

  if (rememberLogField.checked) {
    window.localStorage.setItem("userName", username);
    window.localStorage.setItem("password", password);
  }
});

// part-2:: render the user details on loading the window
window.addEventListener("load", function () {
  const myUser = window.localStorage.getItem("userName");
  const myPassword = window.localStorage.getItem("password");

  // validation:: set the user details on the input field
  if (myUser && myPassword) {
    userNameField.value = myUser;
    passwordField.value = myPassword;
    rememberLogField.checked = true;
    return;
  }

  // reset the user details on the input field
  userNameField.value = "";
  passwordField.value = "";
  rememberLogField.checked = false;
});
