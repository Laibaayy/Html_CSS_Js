const button = document.querySelector("#btn");
const body = document.querySelector("#body");



let color = ["red", "green", "grey", "yellow", "pink", "purple" , "aqua"];
button.addEventListener("click", function(){
    let colorIndex = Number(Math.round(Math.random()*color.length));
    console.log(colorIndex);
    body.style.backgroundColor = color[colorIndex];
});