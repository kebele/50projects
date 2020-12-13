const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
//sayfa yüklendiğinde direkt textarea kısmına focus olsun, cursor oraya gitsin

textarea.addEventListener('keyup', (e)=> {
    createTags(e.target.value)


    //random tag kısmını yapalım
    // tag ları oluşturduktan sonra enter a basında 10 ms sonra randomSelect() i çalıştıracak
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    // console.log(input)
    // const tags = input.split(',')
    //yazdığımız şeyi , koyuncaya kadar array in elemanı yapar ',' ile beraber diğer elemana geçer
    // console.log(tags)
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //boşluları dikkate almasın
    // console.log(tags)
    tagsEl.innerHTML = ``
    //tagsEl hazırdaki olan spanları silsin

    tags.forEach(element => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = element
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    // console.log('123')
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove('highlight')
}