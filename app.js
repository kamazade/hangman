const sentences = [
    "Geometry",
    "school day",
    "weekend",
    "javascript",
    "astrology",
]


let random = Math.floor(Math.random()*sentences.length)
const mainsent = sentences[random];
const sentence= mainsent.toUpperCase()
let secretSentence = [];
const letter = "";
var choosenLetters =[];
let falseS = 0;


function SecretLetters(sent){
    for(let i =0; i< sent.length;i++){
        if(sent[i] !== " "){
            secretSentence.push("_")
        }else{
            secretSentence.push(" ")
        }
    }
}
function ConvertLetters(sent) {
    choosenLetters.forEach(index => {
        secretSentence[index]=sent[index];    
    })
}
function UpdateChoosenLetters(lett){
    if (sentence.includes(lett) ){
        for(let i=0; i<sentence.length; i++){
            if(sentence[i] == lett){
                choosenLetters.push(i)
            }
        }
    }
}
function CreateElements() {
    const container = document.querySelector(".sentence")
    container.textContent = ""
    secretSentence.forEach(l => {
        if(l !== " "){
            const div =document.createElement("div");
            div.classList.add("letter");
            div.textContent=l ;
            container.append(div)
        }else {
            const div = document.createElement("div");
            div.classList.add("space");
            container.append(div)
        }
    })

}
function isFalse(lett) {
    if(!sentence.includes(lett)){
        console.log("do not includes" , falseS,lett)
        falseS++;
    }
}
function Hang() {
    if(falseS >= 1 ) {
        document.querySelector(".head").style.display = "block"
    }
    if (falseS >= 2){
        document.querySelector(".left-arm").style.display = "block"
        document.querySelector(".right-arm").style.display = "block"
        document.querySelector(".b").style.display = "block"
    }
    if(falseS == 3) {
        document.querySelector(".left-leg").style.display = "block"
        document.querySelector(".right-leg").style.display = "block"
        setTimeout(function(){ alert("GAME OVER"); }, 750);
        falseS = 0;
        choosenLetters = [];
        secretSentence=[];
        SecretLetters(sentence)
        CreateElements()
        // console.log(choosenLetters,falseS,secretSentence)
       setTimeout(function(){
        document.querySelector(".left-leg").style.display = "none"
        document.querySelector(".right-leg").style.display = "none"
        document.querySelector(".left-arm").style.display = "none"
        document.querySelector(".right-arm").style.display = "none"
        document.querySelector(".b").style.display = "none"
        document.querySelector(".head").style.display = "none"
       },1000)

    }
}
function isWin() {
    if(!secretSentence.includes("_")){
        setTimeout(function(){ alert("YOU WİN !!"); }, 750);
    }
}
function GridSize(){
    document.querySelector(".sentence").style.setProperty("--num-of-letter",mainsent.length)
}

GridSize()
SecretLetters(sentence)
UpdateChoosenLetters(letter)
CreateElements()

window.addEventListener('keydown',function(evt){
    let lett = String.fromCharCode(evt.keyCode);
    UpdateChoosenLetters(lett)
    ConvertLetters(sentence)
    CreateElements()
    isFalse(lett)
    Hang()
    isWin()
})



