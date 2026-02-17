// get the element
const peekElement = document.getElementById("peek-password");

// handler function:: submit button
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//   handler function:: toggle the peek password
let isPeekActive = false;
peekElement.addEventListener("click", function () {
  // toggle condition
  if (!isPeekActive) {
    peekElement.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    isPeekActive = true;
  } else {
    peekElement.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    isPeekActive = false;
  }
});
