let full_img=document.querySelector(".full-img");
let cntlr_img=document.querySelector(".cntrl-img");
let close_btn=document.querySelector(".close-btn");
let gal_img_nodelist=document.querySelectorAll(".gallery-img");
const gal_img=Array.from(gal_img_nodelist);
full_img.style.display= "Flex" ;
close_btn.addEventListener("click",()=>{
    full_img.style.display= "None" ;
});
gal_img.forEach((val)=>{
    val.addEventListener("click",()=>{
        full_img.style.display= "Flex" ;
        let img=val.src;
        cntlr_img.src=img;

    })
})
