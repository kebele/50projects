const labels = document.querySelectorAll('.form-control label');
// form-control deki labellar bir array olacak şekilde tanımladık

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') 
        .map((letter,idx) =>`<span style="transition-delay : ${idx * 50}ms">${letter}</span>`)
        .join('')
        //labels array indeki her bir elemanı .split('') ile karakterlerine ayır, burada harflerine yani
        //sonra bu karakterlerin herbirini <span>${letter}</span> olarak ata
        //sonrada bunları join('') ile birleştir/ string olarak.
})