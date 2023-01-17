var sellingprice = document.querySelector("#selling");
var currentprice = document.querySelector("#current");
var checkButton = document.querySelector("#check");
var output = document.querySelector("#output");

checkButton.addEventListener("click",checkmargin);

function checkmargin() {
    var profit = sellingprice.value - currentprice.value;
    if(profit > 0) {
        output.innerText = "you have profit of " + profit + " Amount";
    }else{
        output.innerText = "you have loss of " + profit*(-1) + " Amount";
    }
}