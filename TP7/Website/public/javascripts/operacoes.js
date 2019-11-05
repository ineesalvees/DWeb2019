// Apagar um filme 
function eliminar(id) {
    axios.delete("/filmes/" + id)
        .then(response => window.location.assign("/"))
        .catch(err => console.log(err))
}

// Atualizar um filme
function atualizar(id) {
    const newFilm = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        cast: document.getElementById("cast").value,
        genres: document.getElementById("genres").value
    }

    axios.put("/filmes/" + id, newFilm)
        .then(response => window.location.assign("/filmes/" + id))
        .catch(err => console.log(err))
}
