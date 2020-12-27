const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I know a little bit html, css, js, react, vue, mongo, node, d3, p5'


let idx = 1
let speed = 100 / speedEl.value

writeText()

function writeText() {
    //text i elemanlarına ayıralım
    textEl.innerText = text.slice(0, idx)
//index i arttıralım
    idx++
//text in so elemanını tespit
    if(idx > text.length) {
        idx = 1
    }
//hızı ayarlayalım
    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)