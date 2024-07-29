const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// How setInterval Works:
// Initial Execution:

// When you call setInterval, the specified function (function) is executed immediately, and then it waits for the specified interval (milliseconds) before executing it again.
// Repetitive Execution:

// After the initial execution, the function continues to execute at the specified interval repeatedly until clearInterval is called or the page is unloaded.

// ++++++++++++++
// let date = new Date();
// console.log(date);
// console.log(date.toLocaleDateString())
