//3
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate') //buton
const clipboardEl = document.getElementById('clipboard')



//2
// random func larını bir nesne içinde toplayalım
const randomFunc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
}

//4
//istenen şartlara uygun şifre oluşturacak event
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    // console.log(length);
    //aşağıdaki şartlar isteniyor mu? true false/döner
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    console.log(hasLower, hasUpper, hasNumber, hasSymbol)
//sonucu inpua yazacak
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

//5
//generatePassword(){}

function generatePassword(lower, upper, number, symbol, length){
    //üretilmiş password u hazırlayalık, boş olarak
    let generatedPassword = ''
    //şifredeki sıralama nasıl olacak
    const typesCount = lower + upper + number + symbol
    //
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        //hiç bir kriter seçilmediyse boş gelecek password yani olmayacak
        return ''
    }
//for loop yapacağız, bu loop kaç karakterli password istiyorsak o kadar dönecek, ve bunu typesCount içinden yapacak
    for(let i = 0; i < length; i += typesCount) {
        //typesArr içindeki elemanlar randomFunc içindeki nesne içindekiler onlarda gher biri random karakter oluşturma func ları zaten, yani her döngüde hangi tarz karakter sıradaysa onu üretecek func çalışacak 
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            //sırayla çalışacak func ları console a yazdırır
            //console.log(funcName)
            //artık şifreyi oluşturmaya geldi bu funclar sırayla çalıştıracakve her birinin sonucunu generatedPasword a ekleyecek
            generatedPassword += randomFunc[funcName]()
        })
    }
    console.log(generatedPassword)
//çıkan karakterleri birleştirecek
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}


//1
// karakterler
// https://www.w3schools.com/charsets/ref_html_ascii.asp

function getRandomLower() {
    //küçük harf karakterleri getirecek, 26 karakter var alfabede bunlarda 97 den başlıyor ve 26 tane, bunların içinden rastgele harf seçecek function
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// console.log(getRandomLower())

function getRandomUpper(){
    //büyük harf getirsin
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// console.log(getRandomUpper());

function getRandomNumber() {
    //random number getirsin
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    //sembollei kendimiz gireceğiz
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    // return symbols[1]
    return symbols[Math.floor(Math.random() * symbols.length)]
}
// console.log(getRandomNumber(), getRandomSymbol());

//6
//clipboard dan kopyalayıp başka yere yapıştırılabilecek hale getirmek
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})