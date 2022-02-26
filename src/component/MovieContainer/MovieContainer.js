import { MovieCard } from '../MovieCard';
import '../MovieContainer/MovieContainer.css'
import { NotFound } from '../NotFound';

export const MovieContainer=({moviesList})=>{

return <> <main>
<div className="movie-container">
<div className="movie-intro">
<div className="movie-topics">Latest Movies</div>
<div className="movie-info">
{ moviesList ? moviesList.map((movielist,key)=>
    <MovieCard
    image={movielist.medium_cover_image}
    title={movielist.title}
    rating={movielist.rating}
    runtime={movielist.runtime}
    year={movielist.year}
    id={movielist.id}
    key={key}
    />
):<NotFound/>
}
</div>
</div>
</div>
</main>
</>
}