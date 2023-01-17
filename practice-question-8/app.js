var yjhd = document.querySelector(".yjhd");
var znmd = document.querySelector(".znmd");
var output = document.querySelector(".output");

var serUrl = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";

yjhd.addEventListener("click", showyjhd);
znmd.addEventListener("click", showznmd);

function showyjhd() {
    var newUrl = serUrl + "YJHD"
    fetch(newUrl)
        .then(response => response.json())
        .then(yash =>{
            output.innerText = yash.message;
        }) 
}

function showznmd() {
    var newUrl = serUrl + "ZNMD"
    fetch(newUrl)
        .then(response => response.json())
        .then(yash =>{
            output.innerText = yash.message;
        }) 
}