var input = document.querySelector("#inputArea");
var IncButton = document.querySelector("#incButton");
var DecButton = document.querySelector("#decButton");
var output = document.querySelector("#outputArea");

var defaultsize = 12;

IncButton.addEventListener("click",IncFunction);
DecButton.addEventListener("click",DecFunction);

function IncFunction () {
    defaultsize = defaultsize + 2;
    var text = input.value;
    output.style.fontSize = defaultsize + "px";
    output.innerText = text;
}

function DecFunction () {
    defaultsize = defaultsize - 2;
    var text = input.value;
    output.style.fontSize = defaultsize + "px";
    output.innerText = text;
}