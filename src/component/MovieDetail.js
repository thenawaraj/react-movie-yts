import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { GetMovieDetails } from '../api/ytsApi';

export const MovieDetail = () => {

    const movieId = useParams().id;
    //getting movie details
    const [movieDetails,setMovieDetails] = useState([]);

    const fetchGetMovieDetails = async() => {
       const response = await GetMovieDetails(movieId);
       console.log("movie details")
       console.log(response.data.data.movie)
       setMovieDetails(response.data.data.movie)
    }
    useEffect(async()=>{
        await fetchGetMovieDetails();
     },[])

  return <>
  <div><img src={movieDetails.medium_cover_image}/></div>
  <div>{movieDetails.title}</div>
  <div>{movieDetails.description_intro}</div>
  <div>{movieDetails.date_uploaded}</div>
  </>
}
