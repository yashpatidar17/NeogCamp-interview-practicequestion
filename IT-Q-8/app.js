var input = document.querySelector(".inputArea");
var output = document.querySelector(".outputArea");
var button = document.querySelector(".clickBtn");

button.addEventListener("click",clickHandler);

var ApiUrl = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text){
    return ApiUrl + "?"+"text="+text;
}

function errorHandler(error){
   console.log("Error Occured");
   alert("An error occured please try after sometime");
}

function clickHandler() {
    var inputName = input.value;

    fetch(getUrl(inputName))
        .then(response => response.json())
        .then(yash => {
            output.innerText = yash.contents.translated;
        })
        .catch(errorHandler)

}