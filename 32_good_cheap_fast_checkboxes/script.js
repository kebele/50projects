const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// bütün toggle class lılara change durumu için event listeners atayalım doTheTricks(){} 
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))


function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        // şart şu 
        // good + cheap ise fast false
        // good + fast ise cheap false
        // cheap + fast ise good false        
        //eğer 3 ü de checked ise
        if(good === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}