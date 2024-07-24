const slides = document.querySelectorAll(".slide")
var counter = 0;

// console.log(slides)

slides.forEach(                 // pahle for each function chalega
    (slide,index) => {
        slide.computedStyleMap.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter-- 
                   // uske bad counter ++ or -- wala chalega
    slideImage()
}

const goNext = () => {
    counter++
    
    slideImage()
}

const slideImage =() =>{     // fr ye wala function chalega
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}