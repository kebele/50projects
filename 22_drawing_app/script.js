const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//toolbox kontrolleri
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');



//kullanacağımız değişkenler
let size = 10 //çizgi kalınlığı
let isPressed = false //mouse a basılıp basılmadığı
let color = 'black' //çizgi rengi
// localden değer atayabilmek için x ve y belirledik
let x
let y


//MOUSE LISTENERS
// mouse a basma
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
//mouse ın koordinatı
    x = e.offsetX
    y = e.offsetY
    // console.log(isPressed, x, y)
})

// mouse u kadırma
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
// mouse dan elimizi kaldırdığımızda x ve y değerlerini boşaltır, isPressed false döner
    x = undefined
    y = undefined
    // console.log(isPressed, x, y)
})
//mouse a basılı tutma
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        //basılı tutuyoruz, basılı iken mouse un koordinatını alıp x ve y ye atıyor
        const x2 = e.offsetX
        const y2 = e.offsetY
//koordinatları kullanarak drawCircle ve drawLine ı çalıştırıyor
        drawCircle(x2, y2)
        //eğer circle da kalırsak yani çizme konusunda bu sefer atlama yapacak ve  hızlı davrandığımızda daireler atacak, bunun için drawLine kullanıyoruz, burada da bize line in başlangıç ve bitiş noktaları lazım, koordinatları bu şekilde kullanıyoruz, 
        drawLine(x, y, x2, y2)
//burad da başlangıç ve bitiş noktalarında circle yapıp araya çizgi çizer, bunu engellemek için balangıç ve bitiş x ve y lerini eşitleyeceğiz
        x = x2
        y = y2
        //brada da sıkıntı çıkacak bu durumda drtawLİne daki size a bakacağız...
    }
})

//1
//daire çizen function, uygulamanın temek functionu
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
//denemeyi yapalım
// drawCircle(100, 200)
//x100,y200 noktasına bir daire koyar

//line çizmek
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// drawLine(300, 300, 200, 500)

// size ı ayarlamak için gerekli func. buradaki size tanımlarda default 10 ayarlandı, bu değeri aşağıdaki increase, decrease eventlistener ları ile ayarlıyoruz
function updateSizeOnScreen() {
    sizeEL.innerText = size
}
// size için butoonları ayarlamak
increaseBtn.addEventListener('click', () => {
    size += 2
    if(size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 2
    if(size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})
//rengi değiştirmek
//change color picker ı getirir
colorEl.addEventListener('change', (e) => color = e.target.value)

//sayfayı temizlemek
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))