
// Key 
// 41432f926d3f11eab04c6671534359d5
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const input = document.querySelector("#input");
const button = document.querySelector(".btn");
const city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let temp2 = document.querySelector(".temp");
let icon = document.querySelector(".icon");


button.addEventListener("click",function(){
    let location = input.value;
    city.innerText = location;
    weather(location);
})

function weather(city){
const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41432f926d3f11eab04c6671534359d5&units=metric`)

response.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res);
    const {main}= res;
    const{weather} = res;
    temp.innerText = `${ main.feels_like }°C`;
    temp2.innerText = weather[0].main;
    icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    return res;
}).catch((error)=>{
    console.log(error);
})
}
