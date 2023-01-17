var input=document.querySelector(".input");
var check=document.querySelector(".check");
var output=document.querySelector(".output");

check.addEventListener("click",checkname);
function checkname(){
    var name = input.value;
    if(name.toUpperCase() === "TANVI"){
        output.innerText = "She is the best CEO ever";
    }else if(name.toUpperCase() === "SWAPNIL"){
        output.innerText = "He helps us CONQUER jobs!";
    }else if(name.toUpperCase() === "AKANKSHA"){
        output.innerText = "She is our CHEERFUL Interviewer!";
    }else if(name.toUpperCase() === "TANAY"){
        output.innerText = "He is our FUNNY mentor!";
    }else{
        output.innerText = "please enter name from neog camp team";
    }
}

