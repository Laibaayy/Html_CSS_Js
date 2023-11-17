let inputsorat = document.querySelector("#suratno");
let firstayah = document.querySelector("#f-ayatno");
let lastayah = document.querySelector("#l-ayatno");
let arabic = document.querySelector(".arabic");
let english = document.querySelector(".trans");
// let rec = document.querySelector(".re");
let button = document.querySelector(".btn");
let whole = document.querySelector(".wo");
let vid = document.getElementById("vid");
let btnvoice = document.querySelector(".v");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let work = [];
let work2 = [];
function quran(suratno) {

    let first = Number(firstayah.value);
    let last = Number(lastayah.value);
    // console.log(first,last);
    const response = fetch(`http://api.alquran.cloud/v1/surah/${suratno}`);
    const response1 = fetch(`http://api.alquran.cloud/v1/surah/${suratno}/en.asad`);
    const recite = fetch(`http://api.alquran.cloud/v1/surah/${suratno}/ar.alafasy`)

    response.then((response) => {
        return response.json();
    }).then((response) => {

        for (let i = first; i < last; i++) {
            work.push(response.data.ayahs[i].text)

        }
        arabic.innerHTML = work;
        // arabic.style.display = "block";
        work = [];

    }).catch((error) => {
        return (error);
    });

    response1.then((response1) => {
        return response1.json();
    }).then((response1) => {
        for (let i = first; i < last; i++) {
            work.push(response1.data.ayahs[i].text)

        }
        english.innerHTML = work;

        work = [];

    }).catch((error) => {
        return (error);
    });
    recite.then((recite1) => {
        return recite1.json();
    }).then((recite1) => {
console.log(recite1);
const {data}= recite1;
      
        for (var i = first; i < last; i++) {
            work.push(data.ayahs[i].audio);

        }
        console.log(work);
    let index =0;
    function playAudio(){
  
        whole.innerHTML = `<audio src="${work[index]}" id="sound"></audio>`;
        let aud = document.getElementById("sound");
        aud.play();
    }
    btnvoice.addEventListener("click",function(){
        console.log(index);
        if (index < Number(data.numberOfAyahs)){
            index+=1;
            playAudio();
        }
    })
    playAudio();
})
}


button.addEventListener("click", function () {
    let surat = inputsorat.value;
    quran(surat);
    // box2.style.display = "flex";
    // box3.style.display = "flex";
})


