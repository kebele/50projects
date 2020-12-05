const boxes= document.querySelectorAll('.box');
// const box = document.querySelectorAll('h2');
const contentx=document.getElementById('contentx');

window.addEventListener('scroll',checkBoxes);

checkBoxes()
//denemeiçin bu alamada çalıştırdık

function checkBoxes(){
    // hangi noktada bu func.tetiklenecek?
    // console.log(window.innerHeight)
    //innerheight ı alalım.
    const triggerBottom = window.innerHeight / 5 * 3
    //
    boxes.forEach( box=>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }})
}

const kutuContent = ["isco", "messi","ronaldo","varane", "benzema","alonso", "bale","rodrigez"]

kutuContent.forEach(diz)

function diz(x){
    contentx.innerHTML+=`<p>${x}</p>`
    console.log(x)
}

