let btn_add = document.querySelector("#add");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn_add.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    
    let btn_del = document.createElement("button");
    let span = document.createElement("sapn");
    btn_del.appendChild(span);

    span.style.zIndex = "5";
    span.style.position = "relative";
    btn_del.classList.add("del");
    span.innerText = "delete";
    li.appendChild(btn_del);
});
ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
        console.log("deleted");
        // alert("Deleted");
    }
});


// button reflect button
let btn = document.querySelector(".btn");
btn.addEventListener("mouseover",function(e){
    const x = (e.pageX - btn.offsetLeft);
    const y = (e.pageY - btn.offsetTop);

    btn.style.setProperty("--xPos",x + "px");
    btn.style.setProperty("--yPos",y + "px");
})
btn.addEventListener("mouseleave",function(){
    
})
