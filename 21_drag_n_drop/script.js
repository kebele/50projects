const fill = document.querySelector('.fill')
// boş kutular array i
const empties = document.querySelectorAll('.empty')

//fill alma ve bırakmada çalışacak
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

//1
//drag func ları hazırlayalım
function dragStart() {
    //drag başlaması
    console.log('drag start')
    //bırakmadıkça hold kalacak
    this.className += ' hold' 
    // this.className = 'invisible'
    // eğer biz resmi bırakana kadar aldığımız yerde kalsın sitiyorsak aşağıdaki setTimeout a gerek yok
    // setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    console.log('drag end')
    this.className = 'fill'
}

//e yi prevent ettiğimze dikkat, resmi bırakmıyoruz yanai sürekli bu func ları çalıştırıyoruz
function dragOver(e) {
    console.log('drag over')
    e.preventDefault()
}

//üstüne geldiğimizde hovered çalışacak, koymak istediğimiz yerin üstüne
function dragEnter(e) {
    console.log('drag enter')
    e.preventDefault()
    this.className += ' hovered'
}

//üstünden ayrılırken class ı empty ye çevirecek
function dragLeave() {
    console.log('drag leave')
    this.className = 'empty'
}

function dragDrop() {
    console.log('drag drop')
    //drop olduğunda class empty olacak ve append ile fill class ını ekleyeceğiz
    this.className = 'empty'
    this.append(fill)
}