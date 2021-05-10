const slideList = [{
    img: "img/spring.jpg",
    text: "Wiosna",
}, {
    img: "img/summer.jpg",
    text: "Lato",
}, {
    img: "img/autumn.jpg",
    text: "Jesień",
}, {
    img: "img/winter.jpg",
    text: "Zima",
}]

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

// Interfejs
const time = 2500;
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

const keyChangeSlide = (event) => {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
        clearInterval(indexInterval);
        event.code === "ArrowLeft" ? slideActive-- : slideActive++;

        if (slideActive === slideList.length) {
            slideActive = 0;
        } else if (slideActive < 0) {
            slideActive = slideList.length - 1;
        }

        image.src = slideList[slideActive].img;
        h1.textContent = slideList[slideActive].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time);
    }
}

let indexInterval = setInterval(changeSlide, time);
window.addEventListener("keydown", keyChangeSlide);