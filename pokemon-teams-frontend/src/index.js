const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')
// const card = document.getElementById('card')

console.log("Let's just complete - 2:42PM")

document.addEventListener('DOMContentLoaded', event =>{
    fetchTrainers()
    buttons()
})

const fetchTrainers = () => {
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(json => renderTrainers(json))
}

const renderTrainers = trainers => {
    trainers.forEach(trainer => {
        renderTrainer(trainer)
    });
}

const renderTrainer = trainer => {
    let list = renderPokemons(trainer.pokemons)

    let div = document.createElement('div')
    div.className = "card"
    div.dataset.id = trainer.id
    div.innerHTML = `
        <p>${trainer.name}</p>
        <button class="add" data-trainer-id="${trainer.id}">Add Pokemon</button>
    `
    div.appendChild(list)
    main.appendChild(div)
}

const renderPokemons = pokemons => {
        let ul = document.createElement('ul')
    pokemons.forEach(pokemon => {
        let list = renderPokemon(pokemon)
        ul.appendChild(list)
    })
    return ul
}

const renderPokemon = pokemon => {
    let li = document.createElement('li')
    li.innerHTML = `
        ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `
    return li
}

const buttons = () => {
    main.addEventListener('click', event =>{
        let buttonClass = event.target.className
        if (buttonClass === 'add'){
            addPokemon(event.target.dataset.trainerId)
        } if (buttonClass === 'release'){
            releasePokemon(event.target.dataset.pokemonId)
        }
    })
}

const addPokemon = trainer_id => {
    fetch(POKEMONS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"trainer_id": `${trainer_id}`})
    })
    .then(resp => resp.json())
    .then(json => newPokemon(json))
}

const newPokemon = json => {
    let team = document.querySelector(`[data-id="${json.trainer_id}"]`)
    let members = team.querySelector('ul')
    let rendered = renderPokemon(json)
    members.appendChild(rendered)
}

const releasePokemon = pokemon_id =>{
    fetch(`${POKEMONS_URL}/${pokemon_id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(json => removePokemon(json))
}

const removePokemon = pokemon =>{
    let removeLi = document.querySelector(`[data-pokemon-id="${pokemon.id}"]`).parentNode
    removeLi.remove()
}

// 6:24 PM plus breaks here and there..


// // TIMED
// const main = document.querySelector('main')
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM loaded!")
//     fetchTrainers()
// })

// function fetchTrainers() {
//     fetch(TRAINERS_URL)
//     .then(resp => resp.json())
//     .then(json => showTrainer(json))
// }

// function showTrainer(json) {
//     return json.forEach(trainer => { 
//         let div = document.createElement('div')
//         div.innerHTML = ` 
//         <div class ='card' data-id="${trainer.id}"><p>${trainer.name}</p>
//         <button data-trainer-id="1">Add Pokemon</button>
//         ${showPokemon(trainer.pokemons)}
//         </div>
//         `
//         main.appendChild(div)
//     });
// }

// function showPokemon(pokemons){
//     let ul = document.createElement('ul')
//     pokemons.forEach(pokemon => {
//         let li = document.createElement('li')
//         li.innerHTML = `${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id="${pokemon.id}">Release</button>
//         `
//         ul.appendChild(li)
//     })
//     // console.log(ul)
//     return ul.innerHTML
// }

// let card = document.getElementById('card')
// card.addEventListener('click', function(e) {

// // })