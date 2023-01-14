var input = document.querySelector(".inputArea");
var redButton = document.querySelector(".redBtn");
var greenButton = document.querySelector(".greenBtn");
var output = document.querySelector(".outputArea");

redButton.addEventListener("click",turnRed);
greenButton.addEventListener("click",turnGreen);

function turnRed() {
    var text = input.value;
    output.style.color = "red";
    output.innerText = text;
    console.log("clicked");
}

function turnGreen() {
    var text = input.value;
    output.style.color = "green";
    output.innerText = text;
    console.log("clicked");
}