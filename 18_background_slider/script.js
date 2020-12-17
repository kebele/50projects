const body = document.body
const slides = document.querySelectorAll('.slide')
//slides[] oluşturuyoruz
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

//3
//sağ butona basıldığında
rightBtn.addEventListener('click', () => {
    //active slide ı arttıracak, yani arrayde ilerleyecek
  activeSlide++

  //eğer attrırıp array in sonuna geldiyse bu sefer başa dönecek
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
//sırasıyla backgroundu ayarlayan functionu ve active class konumunu değştiren function ları çalıştıracak
  setBgToBody()
  setActiveSlide()
})

//sol butona basıldığında
leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

//her 5sn de bir slide değişecek yapacak
setInterval(() => {
  activeSlide++
// console.log('123')
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgToBody()
  setActiveSlide()
}, 5000)


// setBgToBody()


//1
//background değiştirme
/* activeSlide = 0 dedik slides array indeki ilk eleman ile background başlıyor */
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

//2
//hangi slide ın gösterileceği, bütün .active leri kaldırıp gösterilecek olana active ekliyor
function setActiveSlide() {
    //remove active
  slides.forEach((slide) => {
      slide.classList.remove('active')
    })
//add active
  slides[activeSlide].classList.add('active')
}