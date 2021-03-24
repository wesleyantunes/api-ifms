const apiData = document.querySelector('.api-data')

async function getMovies(){
    const url = "http://localhost:3000/movies"
    const response = await axios.get(url)
    const movieList = Array.from(response.data)
    movieList.forEach(function(movie){
        apiData.innerHTML+=`
            <div class="card m-2" style="width:220px">
                
                <img src="${movie.poster}" class="card-img-top"/>   
                
                <section class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    
                    <p>
                        Ano: ${movie.year}
                    </p>
                    <p>
                    Genero: ${movie.genre}
                    </p>
                </section>
            </div>
        `
    })
     
}
getMovies()
  






