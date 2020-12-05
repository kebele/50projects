const boxes= document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes()
//denemeiçin bu alamada çalıştırdık

function checkBoxes(){
    // hangioktada bu func.tetiklenecek?
    console.log(window.innerHeight)
    //innerheight ı alalım.
    const triggerBottom = window.innerHeight / 5 * 4
    //
    boxes.forEach( box=>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }})
}