const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// aşağıdaki loveMe ye dbclick kullanarak rahatça yapabilirdik ama biraz karıştırdık
//mesela

// loveMe.addEventListener('dblclick', (e) => {
//     console.log("2 tık")
// })

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        // console.log(clickTime)
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            //bir sefer tıkladık, ikinci tıklama ile arada 800ms den daha kısa zaman farkı varsa o zaman 2 click saysın ve kalbi oluşturacak func çalıştırsın ve clickTime ı 0 yapsın
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
            //değilse son tıklamayı esas alsın diğer tıklama için aradaki farkı ölçmek için
        }
    }
})

//kalbi oluşturalım
const createHeart = (e) => {
    //i elementi oluşturup class ları ekleyelim
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    //tıklamanın koordinatları
    const x = e.clientX
    const y = e.clientY
    console.log("koordinatlar : " + x,y)
    
    //resmin dışı tarafındaki mesafe çerçevenin mesafesi gibi, sayfanın boyutu değiştikçe bu da değişir
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    console.log("offset : "+ leftOffset, topOffset)
    //tam koordinat için kalbi nereden merkez alıp oluşturacak
    const xInside = x - leftOffset
    const yInside = y - topOffset
console.log("resme göre koordinat : " + xInside, yInside)
//kalbi oluşturalım
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
//times ı arttıralım, kaç kere tıklandı bilgisi
    times.innerHTML = ++timesClicked
//kalbin kaybolması 1sn de olacak burada da grow animasyonu çalışacak 
    setTimeout(() => heart.remove(), 1000)
}