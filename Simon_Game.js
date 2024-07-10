let gameSeq = [];
let userSeq = [];
let maxscore = 0;
let btns = ["red","green","orange","blue"];
let checkForLevelCnt = 1;
const mediaQuery = window.matchMedia('(max-width: 767px)');
let start = false;
let level = 0;

let h4 = document.querySelector("h4");
let butt = document.querySelector("button");

if (mediaQuery.matches) {
   h4.innerText = "Press The Start Button To Start The Game ";
}

document.addEventListener("keypress",function(){
   if(start == false){
    console.log("Game is started");
    start = true;
   }
   if(checkForLevelCnt == 1){
       levelUp();
       checkForLevelCnt++;
   }
});
butt.addEventListener("click",()=>{
    if(start == false){
        start = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( ()=>{
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( ()=>{
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;
    maxscore++;
    // random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);    
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log(`curr level : ${level}`);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        if(mediaQuery.matches){
            h4.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press the Start button to restart the game`;
        }
        else{
            h4.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press the start button any key to restart the game`;
        }
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
        console.log("Your Max Score Is ",maxscore);
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".child");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    checkForLevelCnt = 1;
}