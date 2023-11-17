

let input = document.querySelector("#task");
let btn1 = document.querySelector(".one-btn");
let ul = document.querySelector(".listss");
let heading = document.querySelector(".heading")

btn1.addEventListener("click", done);

function done() {
    
    let val = input.value;
   console.log(val);
    const div = document.createElement("div");
    const list = document.createElement("list");
    list.innerText = val;
    const completebtn = document.createElement("btn2");
    completebtn.innerHTML = "<i class='bx bx-task'></i>";
    const deletebtn = document.createElement("btn2");
    deletebtn.innerHTML = "<i class='bx bxs-message-square-x'></i>";


    div.appendChild(list);
    div.appendChild(completebtn);
    div.appendChild(deletebtn);
    ul.appendChild(div);

    if (val === ""){
        alert("No Task Entered !!");

        deletebtn.style.display = "none";
        completebtn.style.display = "none";
        list.style.display = "none";
        
    }else {
       heading.style.display = "block" ;

    }

    completebtn.addEventListener("click" , function(){
        list.style.textDecoration = "line-through";
    })

    deletebtn.addEventListener("click", function () {

        deletebtn.style.display = "none";
        completebtn.style.display = "none";
        list.style.display = "none";
    })

    

}