import { ShowInterface } from "../pages";
import MovieDetails from "./MovieDetails/movieDetails";
import style from "../styles/Home.module.css"
import ShowDetails from "./showDetails";
const ShowsCollection=(props:{movies:ShowInterface[],value:string})=>{
    return(
        <>
        <h2 style={{paddingLeft:'2rem'}}>{props.value}</h2>
        <div className={style.movieContainer}>
            {props.movies?.map((movie:ShowInterface)=>{
                return <ShowDetails key={movie.id} movies={movie}/>
            })}
        </div>
        </>
        
    )
}

export default ShowsCollection;