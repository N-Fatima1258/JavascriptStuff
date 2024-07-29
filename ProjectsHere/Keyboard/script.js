const insert = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>

    <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
    </tr>

    <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>


    </tr>

    </table>
    

    </div>
    `;
});

/*
You can add listeners for different events and log their properties to see the differences:


window.addEventListener("keydown", (e) => {
  console.log("Keyboard Event:", e);
});

window.addEventListener("click", (e) => {
  console.log("Mouse Event:", e);
});

document.querySelector("form").addEventListener("submit", (e) => {
  console.log("Form Event:", e);
});

window.addEventListener("touchstart", (e) => {
  console.log("Touch Event:", e);
});
Each event object will have properties relevant to the type of event, allowing you to handle them appropriately.
*/