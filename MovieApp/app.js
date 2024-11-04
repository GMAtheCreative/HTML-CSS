const API_KEY = "api_key=3bb2b92e646ca91af7c030babcd3c262";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`
const API_URL = `${BASE_URL}/movie/popular?${API_KEY}`;
const IMAGES_URL = "https://image.tmdb.org/t/p/w500"
console.log(API_URL);

// const getmovies = (url) => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => { console.log(data) })
//     .catch((error)=>console.log(error))
// }

const movieMainContainer = document.querySelector(".imageWrapper");
console.log(movieMainContainer)

const getmovies =async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)
        showMovies(data.results)
    }
    catch (error) {
        console.log(error)
    }
}
getmovies(API_URL);

function showMovies(movies) {
    movieMainContainer.innerHTML = "";
    movies.forEach(movie => {
        const { overview, title, vote_average, poster_path } = movie
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie')
        movieElement.innerHTML = `
        <div>
                    <img src="${IMAGES_URL}${poster_path}" alt="image">
                </div>
                <div class="titleRating">
                    <span><h3>${title}</h3></span>
                    <span><h3>${vote_average}</h3></span>
                </div>
                <div class="overView">
                    <h2>Overview</h2>
                    <p>${overview}</p>
                </div> 
        `
        // console.log(vote_average)
        movieMainContainer.appendChild(movieElement)
    });
    const searchMovieForm = document.querySelector(".search");

    searchMovieForm.addEventListener('keyup', (event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        if (inputValue) {
            const serchUrl = SEARCH_URL + "&query=" + inputValue;
            getmovies(serchUrl);
        }
        else {
            getmovies(API_URL);
        }
    })
}