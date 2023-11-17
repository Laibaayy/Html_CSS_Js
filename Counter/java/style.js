const btn = document.querySelectorAll(".btn");
// const lowerbtn = document.querySelector(".low");
const timer = document.querySelector(".timer");
let count = 0;
btn.forEach(function(button){
    button.addEventListener("click", function(){
        if(button.classList.contains("low")){
          
            count--;
            timer.innerHTML = count;

        } else if (button.classList.contains("add")) {
          
            count++;
            timer.innerHTML = count;
        }
        if(count > 0){
            timer.style.color = "green";
        }
        if (count < 0) {
            timer.style.color = "red";
        }
        if (count === 0) {
            timer.style.color = "black";
        }
    })
})