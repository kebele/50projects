//1
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

//2
getData()

//3
//filter için inputta girilen değerleri yakalayalım ve aşağıda hazılayacağımız filterData(){} içine parametre olarak yollayalım
filter.addEventListener('input', (e) => filterData(e.target.value))

//2
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        // console.log(user)
        //her user için li oluşturup array a push layacağız,
        const li = document.createElement('li')

        listItems.push(li)
//li lerin içine html yi yazıyoruz
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
// result altında li leri ekrana...
        result.appendChild(li)
    })
}


//4

function filterData(searchTerm) {
    // console.log(searchTerm)
    //arrayımızda arama yapacakher bir arraydeki elemanımız yani li miz içindeki textte aradığımız ifade varsa  true olacak ve class ındaki hide ı kaldıracak, değilse hide ekleyecek
    listItems.forEach(item => {
        //hem aradığımız yeri, hemde araama terimizi lowercase yapıyoruz
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}