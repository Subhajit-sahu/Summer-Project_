let allbox = document.querySelectorAll(".boxes");
let body = document.querySelector("body");
for(el of allbox){
    random(el);
}
function random(el){
    let red  = Math.floor(Math.random() * 256);
    let green  = Math.floor(Math.random() * 256);
    let blue  = Math.floor(Math.random() * 256);
    // console.log(`rgb(${red},${green},${blue})`);
    let rcol =  `rgb(${red},${green},${blue})`

    el.innerText = rcol;
    el.style.backgroundColor =rcol;

}

const copyContent = ()=>{
    const copy = document.querySelectorAll(".boxes");
    navigator.clipboard.writeText(copy.innerText);
}
