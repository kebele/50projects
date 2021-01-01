const container = document.getElementById('container')
// alabileceği renkler
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
//oluştuurlacak kare sayısı
const SQUARES = 500

//kareleri oluşturma
for(let i = 0; i < SQUARES; i++) {
    // square tanımlayalım bu bir div olacak
    const square = document.createElement('div')
//class atayalım
    square.classList.add('square')

//kutuyu oluşturalım
    container.appendChild(square)

    //mouse over ve out durumları için event atayalım
    //parametre kullanımına dikkat
    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))
}

//colors[] dan rastgele renk seçsin
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(element) {
    console.log(element)
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
   //remove u orjinal box shadow yaparak yapıyoruz
   //kuyruk gibi görüntüyü transition yapıyor, style.css de
}

