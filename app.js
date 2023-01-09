var inputOne = document.querySelector("#input1");
var inputTwo = document.querySelector("#input2");
var addbtn = document.querySelector("#AddButton");
var subbtn = document.querySelector("#SubButton");
var mulbtn = document.querySelector("#MulButton");
var divbtn = document.querySelector("#DivButton");
var output1 = document.querySelector("#output")



function addition(value1,value2){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);

 var sum = value1 + value2;
 output1.innerText = sum;
 console.log(output1);
}

function subtraction(value1,value2){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);
    
    var sub = value1 - value2;
    output1.innerText = sub;

}

function multiplication(value1,value2){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);
    
    var mul = value1 *value2;
    output1.innerText = mul;

}
function division(value1,value2){
    var value1 = Number(inputOne.value);
    var value2 = Number(inputTwo.value);
    
    var div = value1/ value2;
    output1.innerText = div;

}

addbtn.addEventListener("click",addition);
subbtn.addEventListener("click",subtraction);
mulbtn.addEventListener("click",multiplication);
divbtn.addEventListener("click",division)
