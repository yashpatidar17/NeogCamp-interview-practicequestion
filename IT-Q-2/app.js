var input = document.querySelector("#inputArea");
var h1btn = document.querySelector("#H1Button");
var h2btn = document.querySelector("#H2Button");
var h3btn = document.querySelector("#H3Button");
var output = document.querySelector("#outputArea");

h1btn.addEventListener("click",functionh1);
h2btn.addEventListener("click",functionh2);
h3btn.addEventListener("click",functionh3);

function functionh1(){
    var h1Text = input.value;
    output.style.fontSize = "2em";
    output.style.fontWeight = "bold";
    output.innerText = h1Text;
}

function functionh2(){
    var h2Text = input.value;
    output.style.fontSize = "1.5em";
    output.style.fontWeight = "bold";
    output.innerText = h2Text;
}

function functionh3(){
    var h3Text =input.value;
    output.style.fontSize = "1.17em";
    output.style.fontWeight="bold";
    output.innerText = h3Text;
}

