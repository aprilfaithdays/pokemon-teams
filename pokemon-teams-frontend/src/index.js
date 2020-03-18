const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOM loaded!")

    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(json => {showTrainer(json)
    })

    const main = document.querySelector('main')
    function showTrainer(json) {
        json.forEach(trainer => { 
            console.log(trainer)
            let li = document.createElement('li')
            li.innerHTML = trainer.name
            main.appendChild(li)
        });
    }
})
