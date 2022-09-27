import { GetStaticProps,InferGetStaticPropsType } from 'next';
import style from '../../styles/Movies.module.css'
export interface MovieInterface{
    adult: boolean,
    backdrop_path:string,
    id:number,
    title:string,
    original_language:string,
    original_title:string,
    overview:string,
    poster_path:string,
    media_type:string,
    genre_ids:number[],
    popularity:number,
    release_date:string,
    video: false,
    vote_average:number,
    vote_count:number
}

type ApiResponse={
    page:number,
    results:MovieInterface[],
    total_pages:string,
    total_results:string
}

const key:string | undefined=process.env.NEXT_PUBLIC_API_KEY;

const TrendingMovies=({trendingmovies}:InferGetStaticPropsType<typeof getStaticProps>)=>{
    return(
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {trendingmovies.results && trendingmovies.results.map((movie:MovieInterface)=>{
            return (
            <div className={style.movieContainer} key={movie.id}>
                <img id="moviePoster" style={{height:"400px"}}
                    src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                    alt="Movie Poster"/>
                <div className={style.movieInfoContainer}>
                    <h3 className={style.movieTitle}>{movie.title}</h3>
                    <span className="green">{movie.vote_average}</span>
                </div>
                <div className={style.overview}>
                    {movie.overview}
                </div>
            </div>)
            })
        }
        </div>
    )

}
export const getStaticProps:GetStaticProps=async()=> {
    const res= await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
    const trendingmovies:ApiResponse=await res.json()
    
    return {
        props:{
          trendingmovies,
        }
    }    
}

export default TrendingMovies;