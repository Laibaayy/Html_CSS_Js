
const heading = document.querySelector("#heading");
const alarmat = document.querySelector("#para");
const inputhour = document.querySelector("#Hour");
const inputmin = document.querySelector("#Minutes");
const ampm = document.querySelector("#ampm");
const button = document.querySelector(".setalarm");
const audio = document.querySelector(".audio");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const stopbtn = document.querySelector(".stop");
const am = document.querySelector("#am");
const pm = document.querySelector("#pm");
let me = document.getElementById("me");

setInterval(Alarm, 1000);

function Alarm() {
    //USE TO CHECK PRESENT TIME
    let time = new Date();
    heading.innerHTML = time.toLocaleTimeString();

    //ADDING EVENT ON SET ALARM BUTTON
    button.addEventListener("click", function () {
      
        // Taking values as input

        let hour = inputhour.value;
        let Minute = inputmin.value;
        let daynight = ampm.value;

        //Printing as set alarm

        alarmat.innerText = hour + ":" + Minute + ":" + "00" + " " + daynight;
        
        if (hour === "") {
            alert("Hour is empty");
        }
        if (Minute === "") {
            alert("Minute is empty");
        }

    })
}


// Function to Check Time At each interval 


let checkAlarm = setInterval(() => {

    let time = new Date();
    let h = Number(time.getHours());
    let m = Number(time.getMinutes());
    // console.log(h);
    // console.log(m);
    let hour = inputhour.value;
    let Minute = inputmin.value;
    // console.log(hour);
    // console.log(Minute);

 
    if (h >= 0 && h <= 12) {
        me.innerText = "am☀️";

    }
    if (h > 12 && h <= 23) {
        me.innerText = "pm🌚";

    }

    if (me.innerText === ampm.value && h === hour && m === Minute) {

        audio.play();
        img1.style.display = "none";
        img2.style.display = "block";


    }
    else {
        audio.pause();
        img1.style.display = "block";
        img2.style.display = "none";
    }

}, 1000);



























