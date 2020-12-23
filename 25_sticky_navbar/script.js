/* .nav alacak scroll olduğunda fixNav çalışacak
pencere swcroll olduğunda bu scroll un değeri nav ın yuksekliğinden fazla olduğuda .nav a .active ekleyecek tersindede .active i çıkaracak 
*/
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    // console.log(window.scrollY, nav.offsetHeight)
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}