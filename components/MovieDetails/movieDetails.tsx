import { MovieInterface } from "../../pages";
import Image from "next/image";
import style from '../MovieDetails/MoviesDetails.module.css'
import Link from "next/link";
const MovieDetails=(props:{movies:MovieInterface})=>{
    const des:string=props.movies.overview;
    return(
        // <div className={style.movieDetailsContainer}>
        //     <Link as={`/movies/${props.movies.id}`} href={`/movies/[id]`}>
        //         <Image 
        //         src={"https://image.tmdb.org/t/p/w500"+props.movies.poster_path}
        //         alt="Picture of the author"
        //         width={200}
        //         height={250}
        //         />
        //     </Link>
        //         <p className={style.movieName}>{props.movies.title}</p>
        // </div>
        <div className={style.movieContainer}>
            <Link as={`/movies/${props.movies.id}`}  href={`/movies/[id]`}>
                <img id="moviePoster" style={{height:"400px"}}
                    src={"https://image.tmdb.org/t/p/w500"+props.movies.poster_path}
                    alt="Movie Poster"/>
            </Link>
                <div className={style.movieInfoContainer}>
                    <h3 className={style.movieTitle}>{props.movies.title}</h3>
                    <span className="green">{props.movies.vote_average}</span>
                </div>
                <div className={style.overview}>
                    {props.movies.overview}
                </div>
            </div>
    )
}

export default MovieDetails;