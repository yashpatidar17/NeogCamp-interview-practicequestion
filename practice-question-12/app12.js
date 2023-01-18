var statusButton = document.querySelector(".status");
var output = document.querySelector(".outputArea");
var tasks = [
    { name: "cleaning", completed: true },
    { name: "washing", completed: false },
    { name: "driving", completed: true }
  ];
statusButton.addEventListener("click", checkStatus(tasks));


//console.log(tasks);
function checkStatus(tasks) {
    for(var i = 0; i < tasks.length; i++) {
        if(tasks[i].completed == true) {
            console.log(tasks[i].name);
            output.innerText = tasks[i].name;
        }else{
           // output.innerText = tasks[i].name + " is not finisehd";
        }
    }
}
