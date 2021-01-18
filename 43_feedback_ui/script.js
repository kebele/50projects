//1
//event bubbling
//

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

//4
let selectedRating = 'Satisfied'

//2
//panel bizim herşeyin içinde olduğu panelin tamamı
// panel.addEventListener('click', ()=>{
//     console.log('click')
// })
// panel.addEventListener('click', (e)=>{
ratingsContainer.addEventListener('click', (e)=>{
    // console.log(e.target)
    //bu da bize tıkladığımız elementi verir
    // if(e.target.parentNode.classList.contains('rating')){
        if(e.target.parentNode.classList.contains('rating')){
        //parentNode kullanmazsak resimlerin üzerine tıkladığımızda istediğimiz sonucu alamayız, çünkü resimler ayrı bir element
        // console.log(e.target)
        removeActive()
        e.target.parentNode.classList.add('active')
        //seçtğimiz face in innerHTML sini almak
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})


//3
//active classları kaldırmak
function removeActive() {
    // bütün ratings [] boyunca dönecek ve her bir elemandali active classlarını kaldıracak
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}


// ratingsContainer.addEventListener('click', (e) => {
//     if(e.target.parentNode.classList.contains('rating')) {
//         removeActive()
//         e.target.parentNode.classList.add('active')
//         selectedRating = e.target.nextElementSibling.innerHTML
//     }
// })


//4
//seçtiğimiz opsiyona göre UI ı güncelleyecek
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})
