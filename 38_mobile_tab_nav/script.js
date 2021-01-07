//1
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

//2
//butun liste elemanlarına yani burada iconlara tıklanma ile bütün ne varsa saklama func larını atıyor
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
// tıklanan elemana ise active sınıfını ve content ine de show class ını ekliyor
        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

//3
//show sınıfını kaldırıyor
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}
//4
//liste elemanlarından active sınıfını kaldırıyor
function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}