// get the element
const passwordField = document.getElementById("password");
const peekElement = document.getElementById("peek-password");

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
