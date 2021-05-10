const slideList = [{
    img: "img/img1.jpg",
    text: "Pierwszy tekst",
}, {
    img: "img/img2.jpg",
    text: "Drugi tekst",
}, {
    img: "img/img3.jpg",
    text: "Trzeci tekst",
}]

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

// Interfejs
const time = 2000;
let slideActive = 0;

// Implementacja
const changeDot = () => {
    const indexActiveDot = dots.findIndex(dot => dot.classList.contains("active"))
    dots[indexActiveDot].classList.remove("active");

    dots[slideActive].classList.add("active")
}

const changeSlide = () => {
    slideActive++;
    if (slideActive === slideList.length) slideActive = 0;
    image.src = slideList[slideActive].img;
    h1.textContent = slideList[slideActive].text;
    changeDot();
}

setInterval(changeSlide, time);