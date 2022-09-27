import { useEffect, useState } from "react";
import styles from '../UpcomingMovies/Upcoming.module.css'
import { MovieInterface, ApiResponse } from "../../pages";
import Image from "next/image";
import Link from "next/link";
const UpcomingMovies=(props:{url:string})=>{
    const[movieList,setMovieList]=useState<MovieInterface[] | null>(null);

    
    useEffect(()=>{
        const getList=async()=>{
            const res=await fetch(props.url);
            const data:ApiResponse=await res.json();
            setMovieList(data.results);
        }
        getList()
    },[props])

    return(
        <div className={styles.mainContainer}>
            <p>Upcoming Movies</p>
            <div className={styles.movieContiner}>
                {movieList?.map((movie)=>{
                    return (
                    <div className={styles.movieDetailContainer} key={movie.id}>
                        <Link as={`/movies/${movie.id}`} href={`/movies/[id]`}>
                            <Image 
                            src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                            width='300px'
                            height='350px'
                            style={{borderRadius:'10px',cursor:'pointer'}}
                            />
                        </Link>
                    </div>
                    
                    )
                })}
            </div>
        </div>
    )
}

export default UpcomingMovies;