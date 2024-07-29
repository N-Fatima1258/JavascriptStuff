const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let setColor;
document.querySelector("#start").addEventListener("click", () => {
  if (!setColor) {
    setColor = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
    // console.log("hello here")
  }
  // console.log(setColor);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(setColor);
  setColor = null;
});
// agr variable reference mai use nhi arha to null krdo tak memory thori free ho jay

// When the "Start" button is clicked for the first time:
// setColor is initially undefined (or null).
// The condition if(!setColor) evaluates to true.
// A new interval is started, and setColor is assigned the interval ID.
// If the "Start" button is clicked again while the interval is running:
// setColor is not null (it holds the interval ID).
// The condition if(!setColor) evaluates to false, so the code inside the if block does not execute, preventing a new interval from starting.
// When the "Stop" button is clicked:
// The interval is cleared using clearInterval(setColor).
// setColor is set to null, indicating that there is no active interval.
// If the "Start" button is clicked again after stopping:
// setColor is null.
// The condition if(!setColor) evaluates to true, and a new interval is started.

// **** By setting setColor to null, the code can differentiate between an active interval and an interval that has been stopped. This prevents potential issues where multiple intervals could be running simultaneously if the "Start" button is clicked multiple times.