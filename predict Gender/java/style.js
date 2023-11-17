let url = "https://api.genderize.io?name=";
let input = document.querySelector("#name");
let button = document.querySelector("#btn");
let ans = document.querySelector(".ans");
let error = document.querySelector(".error");
let male = document.querySelector("#img");
let female = document.querySelector("#img1");
let hideContainer = document.querySelector(".container-hide");
let buttonhide = document.querySelector(".btnn-hide");
let secondContainer = document.querySelector(".wrap");
let result = document.querySelector(".result");
let emptyy = document.querySelector(".empty")

buttonhide.addEventListener("click",function(){
    hideContainer.classList.add("show");
    secondContainer.style.display = "block";
})


function predictgender(){
    let name = input.value;

    let finalurl = url+name;
// if(!name){
//    emptyy.innerText="Please Enter A name!"
//    setTimeout(() => {
//        emptyy.innerText = "";
//    }, 4000);
// }

  if(name.length > 0 && /^[A-Za-z]+$/.test(name) ){
   let response = fetch(finalurl)
   response.then((res)=>{
    return res.json();
      
   }).then((res)=>{
    ans.innerText = res.gender;
       if (res.gender === "male") {
           female.style.display = "none";
           male.style.display = "block";
           result.style.background = "blue";      
       } else if (res.gender === "female") {
           female.style.display = "block";
           male.style.display = "none";
           result.style.background = "pink";


       }
       console.log(res);
   }).catch((error)=>{
    console.log(error);
   })
  }
else {
    error.innerText = "This is Not A name";
}
   
}
button.addEventListener("click", predictgender);
// window.addEventListener("load", predictgender);


