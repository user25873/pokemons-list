const response = require("express");

function retornaId() {
    let id = 3;
    return id;
}

let _datos = retornaId();

function agregarFavorito() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${_datos}/`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((data) => data.json())
    .then((response) => console.log(response))
}