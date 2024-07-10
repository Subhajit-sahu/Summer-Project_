const body = document.querySelector("body");
let love = document.querySelector("span");
let div = document.querySelector("div");

body.addEventListener("mousemove",(e)=>{
   const xPos = e.x;
   const yPos = e.y;

   const spanE1 = document.createElement("span");
   spanE1.style.left = xPos + "px";
   spanE1.style.top =  yPos + "px";
   body.appendChild(spanE1);
    const size = Math.floor(Math.random() * 60) + 1;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    spanE1.style.color = randomColor();
   setTimeout(()=>{
    spanE1.remove();
   },4000)
})
function randomColor(){
    let red  = Math.floor(Math.random() * 256);
    let green  = Math.floor(Math.random() * 256);
    let blue  = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
