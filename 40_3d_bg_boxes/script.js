/* 
burada yapacağımız şey sayfada box lar oluşturacağız, sonrada bu boxlara arka plan vereceğiz ve her box içindeki arka planı pozisyonunu x ve y olarak değiştirip/kaydırıp her box da aynı resmin/gif in farklı bir kısmını oynatacağız, göstereceğiz
*/

//1
const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

//4
btn.addEventListener('click', () => {
    boxes.classList.toggle('big')
})

//2
function createBoxes(){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            const box = document.createElement('div')
            // console.log(box) 4 * 4 kutuları oluşturdu
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}
//3
createBoxes()