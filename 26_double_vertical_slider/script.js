const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

const slidesLength = slideRight.querySelectorAll('div').length

console.log(slidesLength);
 
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
//en alttakine gitmek, bunuda top değerini -3000vh yaparak yapmak
//up down buttonların adı
upButton.addEventListener('click', () => changeSlide('upx'))
downButton.addEventListener('click', () => changeSlide('downx'))

const changeSlide = (direction) => { 
    const sliderHeight = sliderContainer.clientHeight
    //ekrandaki slider ın yüksekliğini veriyor
    console.log(sliderHeight)

    if(direction === 'upx') {
        activeSlideIndex++
        //eğer son slide a geldiyse, ilk slide a dönecek
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }

    } else if(direction === 'downx') {
        activeSlideIndex--
        //ilk slide a geldiyse sona gidecek
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    //sağdaki resmi ayarlayacak
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}