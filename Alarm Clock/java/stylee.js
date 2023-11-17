
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let heading = document.querySelector("#heading");
let para = document.querySelector("#para");
let inputhour = document.querySelector("#Hour");
let inputminute = document.querySelector("#Minutes");
let select = document.querySelector("#ampm");
let morning = document.querySelector("#am");
let night = document.querySelector("#pm");
let setalarmbtn = document.querySelector(".setalarm");
let music = document.querySelector(".audio");
let p = document.querySelector("#me");


setInterval(alarm, 1000);


function alarm() {
    let time = new Date();
    heading.innerHTML = time.toLocaleTimeString();

    setalarmbtn.addEventListener("click", function () {
  
        let h = inputhour.value;
        let m = inputminute.value;
        let daynight = select.value;
        para.innerText = h + ":" + m + ":" + "00" + daynight;
    });

}

 let checkAlarm = setInterval(() => {

     let h =Number( inputhour.value);
     let m = Number(inputminute.value);
    //  console.log(h);
    //  console.log(m);
     let time = new Date();
     let hour = Number(time.getHours());
     let Minute= Number(time.getMinutes());
 
    // console.log(hour);
    // console.log(Minute);

     if (h >= 0 && h <= 12) {
         p.innerText = "am☀️";

     }
     if (h > 12 && h <= 23) {
         p.innerText = "pm🌚";

     }
    if ( p.innerText === select.value && hour === h && Minute === m){
        music.play();
    }


 }, 1000);
















