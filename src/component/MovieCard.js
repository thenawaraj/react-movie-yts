import {AiFillStar} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import { useNavigate } from 'react-router'

export const MovieCard=(props)=>{

    const navigate = useNavigate();
    const routeHandler = (id) => {
       console.log("clicked movie");
       navigate('/movie/'+id);
    }

return <>
<div className="movie-container-detail" onClick={()=>routeHandler(props.id)}>
    <div className="movie-image">
        <img src={props.image}/>
    </div>
    <div className="movie-title">
        <h5>{props.title}</h5>
    </div>
    <div className="movie-details">
        <div className="rating">
        <p><AiFillStar/>{props.rating}</p>
        </div>
        <div className="runtime">
        <p><BiTimeFive/>{props.runtime}</p>
        </div>
        <div className="year">
        <p>{props.year}</p>
        </div>
    </div>
</div>

</>
}