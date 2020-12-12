const jokeEl= document.getElementById('joke');
const jokeBtn= document.getElementById('jokeBtn');


jokeBtn.addEventListener('click',generateJoke)

generateJoke();

//async / await çalışan ve daha temiz hali
async function generateJoke(){
    const config = {
        headers:{
            'Accept' : 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data= await res.json()   

    jokeEl.innerHTML = data.joke
}




//sync çalışan hali, .then() ile çalışıyor

// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept' : 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         // .then(data => console.log(data))
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }