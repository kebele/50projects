const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


//büyük bardağı doldur/boşalt, küçükler büyük bardağıda dolduracak/boşaltacak, bunu da highlightCups içinden çağıracağız

updateBigCup()


// küçük bardaklardan tıkladığımızı dolduracak
smallCups.forEach((cup, index) => {
    // console.log(index)
    cup.addEventListener('click', () => {
        hightlightCups(index)
    })
})

//mesela 3. bardağa tıkladık kendinden öncekileri dolduracak, terside aynı şekilde
function hightlightCups(index){
    //tıkladığımız bardağın index ini getirir
    // console.log(index)
    //tek tek doldur / boşalt
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        //hangisine tıkladığımız bilgisi index ten geliyor
        //eğer tıkladığımızın class ında full varsa ve ondan sonra gelen kardeş elementin class ında full yoksa o zaman index i bir azaltacak
        index--
    }

    //çoklu olarak bardakları doldurmak veya boşaltmak
    smallCups.forEach((cup, idx) => {
        if(idx <= index){
            cup.classList.add('full')
        }else {
            cup.classList.remove('full')
        }
    })

    //büyük bardak
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // console.log(fullCups)
    // console.log(totalCups)

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`

    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}