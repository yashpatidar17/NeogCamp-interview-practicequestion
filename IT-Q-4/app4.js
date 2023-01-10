var input = document.querySelector("#inputArea");
var redbutton = document.querySelector("#redButton");
var greenbutton = document.querySelector("#greenButton");
var bluebutton = document.querySelector("#blueButton");
var output = document.querySelector("#outputArea");

redbutton.addEventListener("click", red);
greenbutton.addEventListener("click", green);
bluebutton.addEventListener("click", blue);

function red(){
    var text = input.value;
    output.style.color = "red";
    output.innerHTML = text;
}
function green(){
    var text = input.value;
    output.style.color = "green";
    output.innerHTML = text;
}

function blue(){
    var text = input.value;
    output.style.color = "blue";
    output.innerHTML = text;
}