var head =document.querySelector(".heading");
var px5Button = document.querySelector(".px5Button");
var px10Button= document.querySelector(".px10Button");

px5Button.addEventListener("click",FivePx);
px10Button.addEventListener("click",TenPx);

function FivePx() {
    head.style.border = "5px solid red";
}

function TenPx() {
    head.style.border = "10px solid red";
}
