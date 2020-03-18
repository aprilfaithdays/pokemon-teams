const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')


document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOM loaded!")

    fetchTrainers()

    function fetchTrainers() {
        fetch(TRAINERS_URL)
        .then(resp => resp.json())
        .then(json => showTrainer(json))
    }

    function showTrainer(json) {
        return json.forEach(trainer => { 
            let div = document.createElement('div')
            // console.log(trainer)
            div.innerHTML = ` 
            <div class ='card' data-id="${trainer.id}"><p>${trainer.name}</p>
            <button data-trainer-id="1">Add Pokemon</button>
            ${showPokemon(trainer.pokemons)}
            </div>
            `
            main.appendChild(div)
            // console.log(div)
        });
    }

    function showPokemon(pokemons){
        let ul = document.createElement('ul')
        pokemons.forEach(pokemon => {
            let li = document.createElement('li')
            li.innerHTML = `${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id="${pokemon.id}">Release</button>
            `
            ul.appendChild(li)
        })
        // console.log(ul)
        return ul.innerHTML
    }
    
    let card = document.getElementById('card')
    card.addEventListener('click', function(e) {

    })

    

})
