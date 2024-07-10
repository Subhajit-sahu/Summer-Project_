// cursor mover
var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",function(event){
   cursor.style.left = `${event.x}px`;
   cursor.style.top = `${event.y}px`;
   cursor.style.opacity = 1;
})
main.addEventListener("mouseleave",function(){
   cursor.style.opacity = 0;
});



let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imageContainer = document.querySelector(".img-container");
let allImgs = document.querySelectorAll(".img-container img");
let currentimg = 1;
let timeout;

next.addEventListener("click", function () {
    currentimg++;
    updateimg(currentimg);
    clearTimeout(timeout);
})
prev.addEventListener("click", () => {
    currentimg--;
    updateimg();
    clearTimeout(timeout);
})

updateimg();

function updateimg() {
    if (currentimg > allImgs.length) {
        currentimg = 1;
    }
    else if (currentimg < 1) {
        currentimg = allImgs.length;
    }

    timeout = setTimeout(() => {
        updateimg();
        currentimg++;
    }, 3000)

    imageContainer.style.transform = `translateX(-${420 * (currentimg - 1)}px)`;
    // console.log(currentimg);
    blinkLight(currentimg);
}


// blinking part
function blinkLight(num){
    let allLight = document.querySelectorAll(".blink");
    for(light of allLight){
        light.style.backgroundColor = "gray";
    }
    let currLight = document.querySelector(`.blink${num}`);
    // console.log(num);
    currLight.style.backgroundColor = "#14b1eb";
}