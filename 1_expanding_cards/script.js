const panels = document.querySelectorAll('.panel')
/* bütün panelleri seçer ve bir array e atar, mesela panels[1] dediğimizde bu arraydeki 1. indisteki .panel e sahip elementi seçmiş oluruz */

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // console.log('123')
        //hangi panele clicklersek console 123 der
        removeActiveClasses()
        panel.classList.add('active')
        //tıkladığımız element'e active class ı ekler
        //istediğimiz tıkladığımıza active eklemeden önce diğerlerinden (nerede active varsa çıkarması, bunun için ayrıca bir func hazırlayıp eklemeden nce çalıştırmalıyız)
    })
})

function removeActiveClasses(){
    panels.forEach((xxx) => {
        xxx.classList.remove('active')
    })
}