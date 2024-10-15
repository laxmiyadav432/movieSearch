let btn = document.getElementById('searchbutton')
btn.addEventListener('click', ()=>{
    let existingContainer = document.querySelector('.allmovies');
    existingContainer.innerHTML = '';
    let moviename = document.getElementById('input2').value;
    let movies = '';
    console.log(moviename)
    fetch(`https://www.omdbapi.com/?s=${moviename}&apikey=3797d854`)
        .then(response => response.json())
        .then(data => {
            movies = data.Search;
            console.log('Don',movies)
            movies.map((movie) => {
                console.log(movie)
                existingContainer.innerHTML += `<div class="cart">
                <img src=${movie.Poster} alt="">
                <strong>Title -${movie.Title}</strong>
                <p>Year - ${movie.Year}</p>
                <p>Type - ${movie.Type}</p>
                </div>`
        });
    })
})




