import axios from "axios";

// const BaseURL='https://yts.mx/api/v2';

//list of movies
export const GetListMovies=()=>{
    return axios.get('https://yts.mx/api/v2/list_movies.json')
 // return axios.get(`https://yts.mx/api/v2/list_movies.xml?sort=seeds&limit=15`)

}


//search by keyword
export const GetSearchMovies=(keyword)=>{
    return axios.get('https://yts.mx/api/v2/list_movies.json?query_term='+keyword)
}

//movie details
export const GetMovieDetails=(id)=>{
    return axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+ id)
}
