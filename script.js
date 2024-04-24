const imageSlides = document.querySelector(".img-slides")
const textSlides = document.querySelector(".text-slides")
const nextButtons = document.querySelectorAll(".next-btn")
const prevButtons = document.querySelectorAll(".prev-btn")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const closeBtn = document.querySelector(".close-btn")
const backdrop = document.querySelector(".backdrop")
const navMenu = document.querySelector(".nav-menu")

let imgSlidePosition = 0
let textSlidePosition = 0
let imgSlideDistance = imageSlides.getBoundingClientRect().width
let textSlideDistance = textSlides.getBoundingClientRect().width
let imgMaxDistance = imgSlideDistance * 2
let textMaxDistance = textSlideDistance * 2

window.addEventListener("resize", () => {
    imgSlidePosition = 0
    textSlidePosition = 0
    imgSlideDistance = imageSlides.getBoundingClientRect().width
    textSlideDistance = textSlides.getBoundingClientRect().width
    // console.log(`Text slide distance is ${textSlideDistance}`)
    // console.log(`Image slide distance is ${imgSlideDistance}`)
    imgMaxDistance = imgSlideDistance * 2
    textMaxDistance = textSlideDistance * 2
    imageSlides.style.transform = `translateX(-${imgSlidePosition}px)`
    textSlides.style.transform = `translateX(-${textSlidePosition}px)`
})

nextButtons.forEach((nextButton) => {
    nextButton.addEventListener("click", () => {
        imgSlidePosition += imgSlideDistance
        textSlidePosition += textSlideDistance

        if(imgSlidePosition > imgMaxDistance) {
            imgSlidePosition = 0
            textSlidePosition = 0
        }
        imageSlides.style.transform = `translateX(-${imgSlidePosition}px)`
        textSlides.style.transform = `translateX(-${textSlidePosition}px)`
    })
})

prevButtons.forEach((prevButton) => {
    prevButton.addEventListener("click", () => {
        imgSlidePosition -= imgSlideDistance
        textSlidePosition -= textSlideDistance

        if(imgSlidePosition < 0) {
            imgSlidePosition = imgMaxDistance
            textSlidePosition = textMaxDistance
        }
        imageSlides.style.transform = `translateX(-${imgSlidePosition}px)`
        textSlides.style.transform = `translateX(-${textSlidePosition}px)`
    })
})

hamburgerIcon.addEventListener("click", () => {
    navMenu.style.top = "0px"
    backdrop.style.display = "block"
})

function closeMenu() {
    navMenu.style.top = "-100%"
    backdrop.style.display = "none"
}

backdrop.addEventListener("click", closeMenu)
closeBtn.addEventListener("click", closeMenu)






