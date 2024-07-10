let btn = document.querySelector(".btn");
let container = document.querySelector(".img-container");
let cnt = 7;
btn.addEventListener("click",()=>{
    for(let i=0;i<6;i++){
        cnt++;
        let img = document.createElement("img");
        img.src = "https://picsum.photos/300/300?random=" + cnt;
        container.appendChild(img);
   }
   
})