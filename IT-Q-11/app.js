var input=document.querySelector(".inputArea");
var checkButton = document.querySelector(".check");
var output = document.querySelector(".outputArea");

checkButton.addEventListener("click", checkPas);

function checkPas() {
    var password = input.value;
    if(password.length > 10) {
        output.innerText = "Success"
    }else{
        output.innerText = "unsuccesful"
        return "output.innerText";
    }
}