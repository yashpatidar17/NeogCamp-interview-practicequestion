var inputOne = document.querySelector("#input1");
var inputTwo = document.querySelector("#input2");
var addbtn = document.querySelector("#AddButton");
var subbtn = document.querySelector("#SubButton");
var mulbtn = document.querySelector("#MulButton");
var divbtn = document.querySelector("#DivButton");
var output1 = document.querySelector("#output")



function addition(){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);

 var sum = value1 + value2;
 output1.innerText = sum;
 console.log(output1);
}

function subtraction(){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);
    
    var sub = value1 - value2;
    output1.innerText = sub;

}

function multiplication(){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);
    
    var mul = value1 *value2;
    output1.innerText = mul;

}
function division(){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);
    
    var div = value1/ value2;
    output1.innerText = div;

}

addbtn.addEventListener("click",addition);
subbtn.addEventListener("click",subtraction);
mulbtn.addEventListener("click",multiplication);
divbtn.addEventListener("click",division)
