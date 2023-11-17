
let time = document.getElementById("timer");
let buttons = document.querySelector(".btn");
let play = document.getElementById("playbtn");
let pause = document.getElementById("pausebtn");
let reset = document.getElementById("reset");


//setting variables for time

let seconds = 0;
let minuites = 0;
let hours = 0;


function stopwatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minuites++;
    } else
        if (minuites / 60 === 1) {
            minuites = 0;
            hours++;
        }



//setting variables for leading zero minutes seconds and hours

let leadingseconds = 0;
let leadingminuites = 0;
let leadinghours = 0;

if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
} else 
    {
    leadingseconds = seconds ;
    console.log(leadingseconds);
    }
if (minuites < 10) {
    leadingminuites = "0" + minuites.toString();
} else
    {
        leadingminuites = minuites;
    }

if (hours < 10) {
    leadinghours = "0" + hours.toString();
} else
   {
     leadinghours = hours;
    }


let displayinterval = document.getElementById("timer").innerText = leadinghours + ":" + leadingminuites + ":" + leadingseconds;
    
}

//for setting interval we will write 

// window.setInterval(stopwatch, 100);

// applying functions to buttons 

let timeinterval = null;
let timerstatus = "stoped";
play.addEventListener("click" , function(){
    if (timerstatus  === "stoped"){
        timeinterval = window.setInterval(stopwatch, 1000);
        // document.getElementById("playbtn").innerHTML = `<i class='bx bx-play'></i>`;
        timerstatus = "started" ;
        
        play.style.display = "none" ;
        pause.style.display = "block";
    }

 });
pause.addEventListener("click", function () {
    if (timerstatus === "started") {
        window.clearInterval(timeinterval);
        // document.getElementById("pausebtn").innerHTML = `<i class='bx bx-pause'></i>` ;
        timerstatus = "stoped";
        pause.style.display = "none";
        play.style.display = "block";
    }
});

reset.addEventListener("click", function(){
    seconds = 0;
    minuites = 0;
    hours = 0 ;
    let displayinterval = document.getElementById("timer").innerText = "00:00:00";
})






















