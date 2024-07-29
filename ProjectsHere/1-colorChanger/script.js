const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button"); // gives nodeList
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target) // kis target se yh event aya hai. Event a kahan se raha hai
    if (body.style.backgroundColor === e.target.id) {
        body.style.backgroundColor = "white";
      } else {
        body.style.backgroundColor = e.target.id;
      }
  });
});
// This code checks if the body's current background color is the same as the button's color. If it is, it changes the color to white; otherwise, it changes it to the button's color.
