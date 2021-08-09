let timerId = null;
let color = "green";
function changeColor() {
 if (color == "green") {
 color = "red";
 } else {
 color = "green";
 }
 document.getElementById("btn").style.backgroundColor = color;
}
window.onload = function() {
 document.getElementById("btn").addEventListener("click", function() {
 if (timerId == null) {
 timerId = setInterval(changeColor, 1000);
 } else {
 clearInterval(timerId);
 timerId = null;
 }
 }, false);
}
