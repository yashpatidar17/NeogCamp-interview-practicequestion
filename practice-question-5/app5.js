var logButton = document.querySelector(".log");
var warnButton = document.querySelector(".warn");
var errorButton = document.querySelector(".error");
var input = document.querySelector(".input");
var output = document.querySelector(".output");

logButton.addEventListener("click",turnBlack);
warnButton.addEventListener("click",turnYellow);
errorButton.addEventListener("click",turnRed);

function turnBlack() {
    var text = input.value;
    output.style.color="black";
    output.innerText = text;
}

function turnYellow() {
    var text = input.value;
    output.style.color="yellow";
    output.innerText = text;
}

function turnRed() {
    var text = input.value;
    output.style.color="red";
    output.innerText = text;
}