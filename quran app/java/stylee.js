let inputsurah = document.querySelector("#suratno");
let SubmitBtn = document.querySelector(".submitsurah");
let FirstayahNo = document.querySelector("#f-ayatno");
let LastayahNo = document.querySelector("#l-ayatno");
let arabic = document.querySelector(".arabic");
let divFIRSTAYAH = document.querySelector(".box2");
let divSECAYAH = document.querySelector(".box3");
let SubmitBtn2 = document.querySelector(".btn");
let ayatAudio = document.querySelector(".wo");
let btnVoice = document.querySelector(".v");
let translation = document.querySelector(".trans");


let work = [];
let work2 = [];
function quran(suratno){
    let fayah = FirstayahNo.value;
    let layah = LastayahNo.value;
    const response = fetch(`http://api.alquran.cloud/v1/surah/${suratno}/ar.alafasy`);
    const response1 = fetch(`http://api.alquran.cloud/v1/surah/${suratno}/en.asad`);
    
    response.then((response)=>{
        return response.json();
    }).then((response)=>{
        console.log(response);
        let {data} = response;
        for (let i = fayah; i < layah; i++) {
           work.push(data.ayahs[i].text);
        }
        arabic.innerHTML = work;
        work = [];

 
        for (var i = fayah; i < layah; i++) {
            work2.push(new Audio(data.ayahs[i].audio));
        }
        console.log(work2);

        let index = 0;

        function playAudio(){

            ayatAudio.innerHTML = `<audio src="${work2[index].src}" id="sound"></audio>`;
            let aud = document.getElementById("sound");
            aud.play();

        }
        btnVoice.addEventListener("click", function(){
            if (index < Number(work2.length)){
               playAudio();
                console.log(index);
                index+=1;
            } 
        })
        playAudio();
        

    }).catch((error)=>{
        console.log(error);
    })  
let work3=[];
    response1.then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res);
        let {data}=res
        for(let i = fayah; i< layah; i++){
        work3.push(data.ayahs[i].text);
        }
        translation.innerHTML = work3;
        work3=[];


    }).catch((error)=>{
        console.log(error);
    })

}






SubmitBtn2.addEventListener("click",function(){
    let val = inputsurah.value;
    quran(val);
})


SubmitBtn.addEventListener("click", function(){
    divFIRSTAYAH.style.display = "flex";
    divSECAYAH.style.display = "flex";

})











