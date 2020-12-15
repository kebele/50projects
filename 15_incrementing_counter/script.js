const counters = document.querySelectorAll('.counter');

counters.forEach( sayac => {
    sayac.innerHTML = '0'

    const updateSayac = () => {
        const target = +sayac.getAttribute('data-target')
        //data-target taki değerleri alıp console dan bakalım
        //baştarafa + koyarak hepsini number yaptık
        // console.log(typeof target, target)

        const c = +sayac.innerText

        const increment = target / 200
        //değerleri 200 e böldük
        if(c < target){
            sayac.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateSayac, 1)
        }else{
            sayac.innerText = target
        }
    }


    updateSayac()
})