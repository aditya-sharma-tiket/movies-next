import { ShowInterface } from "../pages";
import Image from "next/image";
import style from '../styles/MoviesDetails.module.css'
const ShowDetails=(props:{movies:ShowInterface})=>{
    const des:string=props.movies.overview;
    return(
        <div className={style.mainContainer}>
                <Image 
                src={"https://image.tmdb.org/t/p/w500"+props.movies.poster_path}
                alt="Picture of the author"
                width={200}
                height={250}
                />
            <p className={style.movieName}>{props.movies.name}</p>
        </div>
    )
}

export default ShowDetails;