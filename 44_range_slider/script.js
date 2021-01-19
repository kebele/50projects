const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    // console.log(value)
    //sonraki elemana değer atamak için label ı tanımladık
    const label = e.target.nextElementSibling

    //label slider ile birlikte hareket etsin diye range in genişliği ile işlem yapacağız, style da değeri değiştirdiğimizde güncel değer ile devam edecek
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    //aynı şekilde label ın genişliğini de alalım
    const label_width = getComputedStyle(label).getPropertyValue('width')
    // console.log(range_width, label_width)

    //gelen cevap px li olduğu için bunlardaki px leri kaldıralım, substring ile sondaki iki karakteri kaldıralım ve sonucu integer yapalım
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    // console.log(num_width, num_label_width)

    //range in min-max ını alalım
    const max = e.target.max
    const min = e.target.min

    // console.log(min,max)

    //buradaki left değeri style.css deki label ın pozisyonunu belirten left, biz bunu değiştireceğiz
    //scale kısmı ise label ın değerin tam ortasında olması için gerekli, scale func. aşağıda...
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10,-10)

    // console.log(left)

    label.style.left = `${left}px`

    label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }