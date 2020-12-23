
/* loading yapar gibi hepsiburadadaki gibi sayfa yada element yüklenirken efekt 
html de card ı ortaya çıkarsın diye koyduğumuz dumb ları kaldırıp yerine $nbsp; koyalık*/

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const namex = document.getElementById('namex')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

//ana function 2.5s sonra duracak, sayfa yüjklenmesiyle çalışacak
setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80" alt="">'

  title.innerHTML = 'Lorem ipsum dolor sit amet'

  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'

  namex.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2020'

  /* html leri yerleştirdikten sonra .bg olan yerlerden animated olanları kaldıracak */
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}