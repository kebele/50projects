const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)


//daha önceden yaptığımız uygulamadıki fetch yapısı aynen
// fetch ile results i çekiyoruz, bu bir array içinde filmlere ait bilgiler olan nesneler var
//url yi fetch edip res olarak atıyoruz res olarak veriyi json a çeviriyoruz
//json a çevrilen verideki results ı da filmleri gösterecek functiona parametre olarak yolluyoruz
//uygulama genel larak böyle çalışıyori ayrıca bir search yapımızda var, api den gelen bir özellik olarak
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    // console.log(data.results)
    showMovies(data.results)
}



//sayfadaki elementleri oluşturan function, DOM a ekleme
function showMovies(movies) {
    //main i boşaltalım
    main.innerHTML = ''
//buradaki movies yukarıda async olarak data olarak çıkan res.json() verisi zaten orada o çıktıyı yani showMovies(data.results) olarak bu functiona yolluyoruz, çıktıda filmler var, forEach olarak parametreden geleni döneceğiz, her film için
    movies.forEach((movie) => {

        //burada her filmi destructuring yapacağız, ihtiyacımız olan kısımlarını movie olarak atayacağız, kullanımı aşağıda var
        const { title, poster_path, vote_average, overview } = movie
//movie class lı bir div yapalım
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
// .movie divinin içineAPI den aldığımız resmi koyalım, .movie-info div'ine title, vote ve overview ları ayarlayalım
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        //main içinde movieEl i oluşturalım
        main.appendChild(movieEl)
    })
}

//filmlerin rate lerine göre renklerini belirlediğimiz func.
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


//arama kısmı için 
form.addEventListener('submit', (e) => {
    //e yi saklıyoruz, bu bilgiyi kullanacağımız için
    e.preventDefault()
//search değerini searchTerm olarak atıyoruz,
    const searchTerm = search.value
//eğer aranan değer varsa ve boş değilse getMOvies functionuna arama için kullanacğımız url ile arama terimimizi birleştirip parametre olarak yolluyoruz, o da yukarıya gidip bu sefer showMOvies()'e parametre olarak arama sonucunu yolluyor ve search kısmını boşaltıyoruz, eğer bir şey aramayacaksak yada vazgeçtiysekte yani else de sayfa reload oluyor
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})