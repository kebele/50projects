const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        //buton içindeki tıkladığımız yerin tam konumu
        const x = e.clientX
        const y = e.clientY
// console.log(x,y)
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        //sayfanın top left cinsinden konumu
// console.log(buttonTop, buttonLeft)
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // console.log(xInside, yInside)
//daire oluşturalım
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
//daireyi button içinde oluşturalım
        this.appendChild(circle)
        // tıkladığımızda oluşan circle ları dev tools da görebiliriz
//oluşan circle ı 500ms de kaldırır. Böylelikle ripple effect oluşur.
        setTimeout(() => circle.remove(), 500)
    })
})