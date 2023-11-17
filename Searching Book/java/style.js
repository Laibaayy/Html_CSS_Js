let title = document.querySelector("#title");
let Author = document.querySelector("#author");
let ISBN = document.querySelector("#ISBN");
let Button = document.querySelector(".btn");
let table = document.querySelector(".table-data");
let tablebody = document.querySelector(".list");
let form = document.querySelector(".fom");


Button.addEventListener("click", function(e){
    e.preventDefault();
    book();
});

// form.addEventListener("")
function book() {

    let name = title.value;
    let author = Author.value;
    let isbn = ISBN.value;



    let tablerow = document.createElement("tr");
    let tabledata = document.createElement("td");
    let tabledata1 = document.createElement("td");
    let tabledata2 = document.createElement("td");
    let removebtn = document.createElement("button");
    removebtn.innerHTML = "<i class='bx bxs-x-circle'></i>";
  
    tabledata.innerHTML = name; 
    tabledata1.innerHTML = author;
    tabledata2.innerHTML = isbn;

    removebtn.style.fontSize = "2rem";
    removebtn.style.width = "4rem";
    removebtn.style.color = "red";


   



 tablerow.appendChild(tabledata);
 tablerow.appendChild(tabledata1);
 tablerow.appendChild(tabledata2);
 tablerow.appendChild(removebtn);
tablebody.appendChild(tablerow);


    removebtn.addEventListener("click", function () {
   tabledata.innerText = "";
        tabledata1.innerText = "";
        tabledata2.innerText = "";
        tablerow.style.display = "none";
   removebtn.style.display = "none";
        setTimeout(() => {
            alert("It is succesfully Deleted");
        }, 500);

      
    })

if(name === "" || author === "" || isbn === ""){
    alert("Please fill the complete Information");
    removebtn.style.display = "none";
    tablerow.style.display = "none";
    tabledata.innerText = "";
    tabledata1.innerText = "";
    tabledata2.innerText = "";


}
   


}

