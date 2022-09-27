import { MovieInterface } from "../../pages";
import MovieDetails from "../MovieDetails/movieDetails";
import style from "../../styles/Home.module.css"
const MoviesCollection=(props:{movies:MovieInterface[]| null,value:string})=>{
    return(
        <>
        <h2 className={style.heading}>{props.value}</h2>
        <div className={style.movieContainer}>
            {props.movies?.map((movie:MovieInterface)=>{
                return <MovieDetails key={movie.id} movies={movie}/>
            })}
        </div>
        </>
        
    )
}

export default MoviesCollection;