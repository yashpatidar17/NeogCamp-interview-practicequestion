var input = document.querySelector("#inputArea");
var button = document.querySelector("#getButton");
var button1 = document.querySelector("#getButton1");
var output = document.querySelector("#outputArea");

button.addEventListener("click",getinnerT);
button1.addEventListener("click",getinnerH);

function getinnerT() {
    output.innerText = input.value;
}
function getinnerH() {
    output.innerHTML = input.value;
}
