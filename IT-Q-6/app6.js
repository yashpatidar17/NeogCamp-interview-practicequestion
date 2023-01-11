var loadingText = document.querySelector("#h1head");
var button = document.querySelector("#loadButton");

button.addEventListener("click", hideText);

function hideText() {
    loadingText.style.display = "none";
    console.log("clicked");
}