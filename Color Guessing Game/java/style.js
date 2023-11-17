let rgbh = document.querySelector(".rgbhead");
let NewColor = document.querySelector(".new-color");
let Status = document.querySelector(".status");
let EasyBtn = document.querySelector(".easy-btn");
let HardBtn = document.querySelector(".hard-btn");
let boxes = document.querySelectorAll(".box");
let h1 = document.querySelector(".heading");

let BoxCount = 6;
var color = generateRandomColors(6);
let pickedColor = color[Math.floor(Math.random() * 6)];
rgbh.textContent = pickedColor;

Status.textContent = "Let's Play";

EasyBtn.addEventListener("click", function () {
    BoxCount = 3;
    Status.textContent = "Let's Play";
    EasyBtn.style.background = "orange";
    EasyBtn.style.color = "white";
    HardBtn.style.background = "white";
    HardBtn.style.color = "orange";
    color = generateRandomColors(BoxCount);
    pickedColor = color[Math.floor(Math.random() * 3)];
    rgbh.textContent = pickedColor;

    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes.length);

      if(color[i]){
        boxes[i].style.background = color[i];
      }else{
          boxes[i].style.display = "none";

      }
        
    }

})

HardBtn.addEventListener("click", function () {
    BoxCount = 6;
    Status.textContent = "Let's Play";
    EasyBtn.style.background = "orange";
    EasyBtn.style.color = "white";
    HardBtn.style.background = "white";
    HardBtn.style.color = "orange";
    color = generateRandomColors(BoxCount);
    pickedColor = color[Math.floor(Math.random() * 6)];
    rgbh.textContent = pickedColor;

    for (let i = 0; i < boxes.length; i++) {
    console.log(boxes.length);
            boxes[i].style.background = color[i];
        boxes[i].style.display = "flex";
        

    }

})

NewColor.addEventListener("click", function(){
    Status.textContent = "Let's Play";
    color = generateRandomColors(BoxCount);
    pickedColor = color[Math.floor(Math.random() * BoxCount)];
    rgbh.textContent = pickedColor;

    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes.length);

        boxes[i].style.background = color[i];

    }
})

for (let i = 0; i < color.length; i++) {
    boxes[i].style.background = color[i];
    console.log(color.length);


boxes[i].addEventListener("click", function () {
    var selectedColor = this.style.background;
    console.log(selectedColor);
    console.log(pickedColor);
    if (pickedColor === selectedColor) {
        win();
    } else {
        lose(this);
    }})
}



function win() {
    // console.log(color.length);

    for (let i = 0; i < color.length; i++) {
        boxes[i].style.background = pickedColor;
        // boxes = pickedColor;
    }
    Status.textContent = "Correct!";
    
}

function lose(a) {
    a.style.background = "pink";
    Status.textContent = "Play Again";

}

Status.addEventListener("click",function(){
    Status.textContent = "Let's Play";
    color = generateRandomColors(BoxCount);
    pickedColor = color[Math.floor(Math.random() * BoxCount)];
    rgbh.textContent = pickedColor;

    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes.length);

        boxes[i].style.background = color[i];

    }
})




function generateRandomColors(num){
    var arr=[];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}



function randomColor(){
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
//    ' rgb(r, g, b)'
}



