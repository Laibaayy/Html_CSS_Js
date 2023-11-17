setInterval(setclock , 1000);

const hourhand = document.querySelector("#hand");
const minutehand = document.querySelector("#hand1");
const secondhand = document.querySelector("#hand2");
const h2 = document.querySelector("#h2");

function setclock(){
    const currentdate= new Date();
    h2.innerHTML = currentdate.toLocaleTimeString();
    const secondsratio = (currentdate.getSeconds()) / 60;
    const minutesratio = (secondsratio + currentdate.getMinutes()) / 60;
    const hoursratio = ( minutesratio +  currentdate.getHours()) / 12;


    setRotation(secondhand, secondsratio);
    setRotation(minutehand, minutesratio);
    setRotation(hourhand, hoursratio);

    
}



function setRotation(elements, rotationratio){
   
    elements.style.setProperty("--rotation" , rotationratio * 360)
}

setclock();








