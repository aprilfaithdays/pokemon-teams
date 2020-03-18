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
        let div = document.createElement('div')
        return json.forEach(trainer => { 
            // console.log(trainer)
            div.innerHTML = ` 
            <div class ='card' data-id="${trainer.id}"><p>${trainer.name}</p>
            ${showPokemon(trainer.pokemons)}

            </div>
            `
            main.appendChild(div)
        });
    }

    function showPokemon(pokemons){
        let li = document.createElement('li')
        let ul = document.createElement('ul')
        
        return pokemons.forEach(pokemon =>
            console.log(pokemon.nickname)
            // li.innerHTML = `${pokemon.nickname} (${pokemon.species})`
        )
    }
    

})
