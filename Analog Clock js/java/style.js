
setInterval(clock, 1000);

let hour = document.querySelector("#hand");
let minute = document.querySelector("#hand1");
let second = document.querySelector("#hand2");


function clock() {
    let currenttime = new Date();
    let secondratio = (currenttime.getSeconds() ) / 60;
    let minuteratio =  (secondratio + currenttime.getMinutes()) / 60;
    let hourratio = (minuteratio + currenttime.getHours()) /12 ;

    ratiocheck(second, secondratio);
    ratiocheck(minute, minuteratio);
    ratiocheck(hour , hourratio);
}

function ratiocheck(elements , rotationratio){
    elements.style.setProperty( "--rotation" , rotationratio * 360)
   
}
clock();









