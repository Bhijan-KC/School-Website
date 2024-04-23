let menu= document.querySelector("#menu");
let close= document.querySelector("#close");
let nav_links =document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
    nav_links.style.top= "0" ;
})
close.addEventListener("click",()=>{
    nav_links.style.top="-110vh"
})
// to the top btn
const topBtn = document.querySelector('.goToTop');

window.addEventListener('scroll', checkheight);

function checkheight() {
    if (window.scrollY > 200) {
        topBtn.style.display = "flex"
    } else {
        topBtn.style.display = "none"
    }
}

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})