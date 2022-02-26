import { useEffect, useState } from "react";
import { GetListMovies, GetSearchMovies } from "../api/ytsApi";
import { MovieContainer } from "../component/MovieContainer/MovieContainer"
import { Nav } from "../component/Nav/Nav"
import { Search } from "../component/Search/Search"

export const Landing=()=>{
    //movielist
    const [moviesList, setMoviesList] = useState([]);
    const fetchMoveList = async() => {
        let response = await GetListMovies();
        console.log("movies list");
        console.log(response.data.data.movies);
        setMoviesList(response.data.data.movies);
    }

    useEffect(()=>{
       fetchMoveList();
    },[])

  //search Movie
    const [searchMovie, setSearchMovie] = useState('');
    const fetchSearch = async() => {
        let response = await GetSearchMovies(searchMovie);
        console.log("movies searched");
        console.log(response.data.data.movies);
        setMoviesList(response.data.data.movies);
    }

    useEffect(async ()=>{
      fetchSearch();
    },[searchMovie]);
    
    return<><main> 
    <Nav/>
    <Search changeKeyword={setSearchMovie}/>
    <MovieContainer moviesList={moviesList}/>
    </main>
    </>

    }