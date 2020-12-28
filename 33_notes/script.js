//1
const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () => addNewNote())

//local store dan notes getirme
const notes = JSON.parse(localStorage.getItem('notes'))
if(notes) {
    notes.forEach(note => addNewNote(note))
}


//1
//addNewNote default olarak boş text alacak parametrede
function addNewNote(text = '') {
    //div oluşturacak ve dive note classı ekleyecek
    const note = document.createElement('div')
    note.classList.add('note')
//eğer text yoksa o zaman main class ına hidden koyacak yani note görünmeyecek, eğer text varsa yani herhangibir note varsa o zaman hidden olmayacak ve kart görünecek
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>        

        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    //body ye note ekleyecek
document.body.appendChild(note)


//tools buttons
//bir üstte note oluşturduk şimdi o note lardaki tools lara erişelim
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')


    textArea.value = text
    //markdown tanınması için
    main.innerHTML = marked(text)
//note un silinmesi
    deleteBtn.addEventListener('click', () => {
        note.remove()
//local store un update edilmesi
        updateLS()
    })
//note un editlenmesi
    editBtn.addEventListener('click', () => {
        // main ve textarea nın hidden larının toggle  lanması
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden') 
    })
//editleme
    textArea.addEventListener('input', (e) => {
        // e.target.value
        const { value } = e.target

        main.innerHTML = marked(value)
//local storage a kayıt
        updateLS()
    })

}


//local storage ayarlanması
/* 
ls nin çalışması
teorik
localStorage.setItem('name', 'kebele')
localStorage.getItem('name')
localStorage.removeItem('name')

pratik

localStorage.setItem('name', JSON.stringify())
JSON.parse(localStorage.getItem('name'))
*/


function updateLS() {
    const notesText = document.querySelectorAll('textarea')
 

    const notes = []

    notesText.forEach(note => notes.push(note.value))
    
    // console.log(notes)
    localStorage.setItem('notes', JSON.stringify(notes))
}
