var check = document.querySelector(".check");
var output = document.querySelector(".output");

check.addEventListener("click",checkError);

var url = "https://jsonplaceholder.typicode.com/dummyUsers";
function checkError(){
    fetch(url)
        .then(function (error) {
                if (error.status === 401) {
                    output.innerText = "${error.status} you are not logged in";
                } else if (error.status === 404) {
                    output.innerText = error.status + ' page not found';
                }
            })
}