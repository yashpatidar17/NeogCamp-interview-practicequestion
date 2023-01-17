var username = document.querySelector(".username");
var password = document.querySelector(".password");
var output = document.querySelector(".output");
var check = document.querySelector(".checkButton");

check.addEventListener("click", checkPass);

function checkPass() {
var name = username.value;
var pass = password.value;
if(pass.includes(name)){
    output.innerText = "name is not allowed in password field"    
}else{
    output.innerText ="password is acceptable"
}
}


