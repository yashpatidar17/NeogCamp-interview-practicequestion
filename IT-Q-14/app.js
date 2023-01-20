var check = document.querySelector("#checkButton");
var output = document.querySelector("#outputArea");

var ramData = {
    name :"ram" ,
    power: "2500" ,
    yuga : "Treta" ,
};

var samData = {
    name :"Krishna" ,
    power: "2125" ,
    yuga : "Dwapar" ,
};

check.addEventListener("click",checkPower);

function checkPower(){
    if(ramData.power > samData.power){
        output.innerText = "Ram has more power"
    }else{
        output.innerText = "Sam has more power"
    }
}