let menu= document.querySelector("#menu");
let close= document.querySelector("#close");
let nav_links =document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
    nav_links.style.top= "0" ;
})
close.addEventListener("click",()=>{
    nav_links.style.top="-110vh"
})