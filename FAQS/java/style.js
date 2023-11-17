
let signs = document.getElementsByClassName("sign");
let answers = document.getElementsByClassName("answer");
let whole = document.getElementsByClassName("questions");
let sign2 = document.getElementsByClassName("sign2");


for( let i = 0; i < signs.length; i++){
    
    signs[i].addEventListener("click", function(){
       
    //    answers[i].style.display = "block";
    //    answers[i].style.height = "8rem";

       answers[i].classList.add("done");
       sign2[i].style.display = "block";
       signs[i].style.display = "none";
       
    });
}

for (let i = 0; i < sign2.length; i++){
    sign2[i].addEventListener("click", function(){
        answers[i].classList.remove("done");
        // answers[i].classList.add("show");
        sign2[i].style.display = "none";
        signs[i].style.display = "block";
    })
}

    for (let i = 0; i < signs.length; i++){
    signs[i].addEventListener("mouseover", function (){
        signs[i].style.cursor = "pointer";
    });

}









