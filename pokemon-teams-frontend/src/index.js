const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded!")

    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(json => console.log(json))
})