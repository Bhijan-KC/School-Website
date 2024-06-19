let full_img=document.querySelector(".full-img");
let cntlr_img=document.querySelector(".cntrl-img");
let close_btn=document.querySelector(".close-btn");
let next_btn=document.querySelector(".next-btn");
let prev_btn=document.querySelector(".prev-btn");
let gal_img_nodelist=document.querySelectorAll(".gallery-img");
const gal_img=Array.from(gal_img_nodelist);
close_btn.addEventListener("click",()=>{
    full_img.style.display= "None" ;
});
gal_img.forEach((val)=>{
    val.addEventListener("click",()=>{
        full_img.style.display= "Flex" ;
        let img=val.src;
        cntlr_img.src=img;
        next_btn.addEventListener("click",()=>{
            let img_no=img.slice(47,49);
            let num=parseInt(img_no);
            cntlr_img.src=`pic${num+1}.jpg`;
            img=cntlr_img.src;
        })
        prev_btn.addEventListener("click",()=>{
            let img_no=img.slice(47,49);
            let num=parseInt(img_no);
            if(num===10){
                cntlr_img.src=`pic${num}.jpg`
            }else{
                cntlr_img.src=`pic${num-1}.jpg`
            }
            img=cntlr_img.src;
        })
    })
})
