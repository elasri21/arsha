const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
openMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "block";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    openMenu.style.display = "block";
});


// handle drop down menu in mobile
const drops = Array.from(document.querySelectorAll(".drop-down"));
drops.forEach(drop => {
    drop.addEventListener("click", function() {
        this.children[1].style.display = "flex";
    });
});

// 
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if(window.scrollY == 0) {
        header.style.backgroundColor = "transparent";
    }else if(window.scrollY > 150) {
        header.style.backgroundColor = "#283a5ae6";
    }
});


// panels
const panelBtns =  Array.from(document.querySelectorAll(".panel h3"));
const panelTexts =  Array.from(document.querySelectorAll(".panel p"));
panelBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        panelTexts.forEach(text => text.classList.add("hide"));
        this.nextElementSibling.classList.toggle("hide");
    });
});

const questions =  Array.from(document.querySelectorAll(".question h3"));
const enswars =  Array.from(document.querySelectorAll(".question p"));
questions.forEach(question => {
    question.addEventListener("click", function() {
        enswars.forEach(enswar => enswar.classList.add("hide"));
        this.nextElementSibling.classList.toggle("hide");
    });
});