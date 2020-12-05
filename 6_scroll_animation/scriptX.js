// const boxes= document.querySelectorAll('.box');
// const box = document.querySelectorAll('h2');
const contentx=document.getElementById('contentx');


const kutuContent = ["isco", "messi","ronaldo","varane", "benzema","alonso", "bale","rodrigez", "isco", "messi","ronaldo","varane", "benzema","alonso", "bale","rodrigez","isco", "messi","ronaldo","varane", "benzema","alonso", "bale","rodrigez"]


kutuContent.forEach(diz)

function diz(x){
    contentx.innerHTML+=`<div class="box"><h2>${x}</h2></div>`
    // console.log(x)
}

window.addEventListener('scroll',checkBoxes);

checkBoxes()
//denemeiçin bu alamada çalıştırdık

function checkBoxes(){
    // hangi noktada bu func.tetiklenecek?
    // console.log(window.innerHeight)
    //innerheight ı alalım.

    const boxes= document.querySelectorAll('.box');
    const triggerBottom = window.innerHeight / 5 * 4    
   
    boxes.forEach( box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }})
}


