var number = document.querySelector("#number");
var check = document.querySelector("#check");
var output = document.querySelector("#output");

check.addEventListener("click",checknumbers);

function checknumbers() {
    var num = number.value;
    var sq = num*num;
     
    if(sq%10 === num){
        output.innerText = num + " an Automorphic Number"
    }else{
        output.innerText = num + " is not an Automorphic Number"
    }
}