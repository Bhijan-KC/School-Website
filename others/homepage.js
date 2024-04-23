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