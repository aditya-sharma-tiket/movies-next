import { useEffect, useState } from "react";
import { MovieInterface } from "../pages";
import MoviesCollection from "./MoviesCollection";

type ApiResponse={
    page:number,
    results:MovieInterface[],
    total_pages:string,
    total_results:string
}

const GenreComp=(props:{url:string,title:string})=>{
    const[movieList,setMovieList]=useState<ApiResponse>({page:0,results:[],total_pages:"",total_results:""});

    
    useEffect(()=>{
        const getMovies= async()=>{
            const res=await fetch(props.url);
            const data =await res.json();
            setMovieList(data);
            
        }
        getMovies();
    },[props]);


    return(
        <>
        <MoviesCollection movies={movieList.results} value={props.title}/>
        </>
    )
}

export default GenreComp;