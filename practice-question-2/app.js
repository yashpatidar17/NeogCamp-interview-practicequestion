var output = document.querySelector(".outputArea");
var plusButton = document.querySelector(".PlusButton");
var minusButton = document.querySelector(".MinusButton");

var initialValue = 0;

plusButton.addEventListener("click",countInc);
minusButton.addEventListener("click",countDec);

function countInc() {
    initialValue++;
    output.innerText = initialValue;
}

function countDec(){
    initialValue--;
    output.innerText = initialValue;
}