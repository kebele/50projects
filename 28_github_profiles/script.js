const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// getUser('kebele')

// function getUser(username){
// axios(APIURL + username)
// .then(res => console.log(res))
// .then(res => console.log(res.data))
// .catch(err => console.log(err))
/* buradan bize yolladığımız username ile ilgili bir object döner */
// }

//yukarıdakinden daha makul bir kullanım
async function getUser(username) {
    try {
        // const res = await axios(APIURL + username)
        const { data } = await axios(APIURL + username)
        // console.log(res.data)
        console.log(data)

        createUserCard(data)
        getRepos(username)
    } catch (err) {
        // console.log(err)
        if(err.response.status == 404){
            createErrorCard('there is no user')
        }
        
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value

    if(user){
        getUser(user)

        search.value = ''
    }
})

function createUserCard(user){
    //card oluşturalım, main içindeki herşeyi alıp buraya koyup gerekli yerlere dinamik bilgileri yerleştirelim
    /* 
    https://api.github.com/users/kebele
    adresinde alacağımız bilgileri key leri var
    */
    const cardHTML = `
    <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>followers</strong></li>
                    <li>${user.following} <strong>following</strong></li>
                    <li>${user.public_repos} <strong>repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML
}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos.slice(0,15).forEach( repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = "_blank"
        repoEl.innerText = repo.name

        reposEl.appendChild((repoEl))
    })
}

async function getRepos(username){
    try{
        // const { data } = await axios(APIURL + username + '/repos')
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        //son repoları göstersin
        addReposToCard(data)
    }
    catch(err){
       createErrorCard('fetching repos problem')
    }
}