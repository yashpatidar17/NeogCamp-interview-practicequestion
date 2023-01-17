var output = document.querySelector(".outputArea");
var fetchbutton = document.querySelector(".fetchButton");
//var serverUrl = "https://jsonplaceholder.typicode.com/todos";

fetchbutton.addEventListener("click",fetchUrl);

function fetchUrl(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            output.innerText = data.titles;
        })
       
}