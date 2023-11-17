// let btn = document.querySelectorAll("button");
// let input = document.querySelector("#number");

// let string = "";

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function () {

//         if (btn[i].innerText === "=") {
//             string = eval(string);
//             input.value = string;
//         } else if (btn[i].innerText === "C") {
//             string = "";
//             input.value = string;
//         } else if (btn[i].innerText === "Del") {
//             string = string.slice(0, string.length - 1);
//             input.value = string;

//         }
//         else if (btn[i].innerText === "M-") {
//             string = string + "";
//             input.value = string;

//         }
//         else {
//             string = string + btn[i].innerText;
//             input.value = string;
//             console.log(string);
//         }

//     })

// }

let btn = document.querySelectorAll("button");
let input = document.querySelector("#number");

let myans = "";

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (btn[i].innerText === "C") {
      myans = "";
      input.value = myans;
    } else if (btn[i].innerText === "Del") {
      myans = myans.slice(0, myans.length - 1);
      input.value = myans;
    } else if (btn[i].innerText === "=") {
      myans = eval(myans);
      input.value = myans;
    } else {
      myans = myans + btn[i].innerText;
      input.value = myans;
      console.log(myans);
    }
  });
}
