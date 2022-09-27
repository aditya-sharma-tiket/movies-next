import { GetServerSideProps,InferGetServerSidePropsType } from "next";
import { MovieInterface } from "./index";
import Image from "next/image";
const Movie=({data}:InferGetServerSidePropsType<typeof getServerSideProps>)=>{
    return(
        <>
        <div style={{display:'flex',flexDirection:'row',flexShrink:'0',paddingLeft:'1rem'}}>
            <Image 
            src={"https://image.tmdb.org/t/p/w500"+data.poster_path}
            alt="Picture of the author"
            width='750px'
            height='500px'
            // layout="responsive"
            />
            <div style={{padding:'2rem'}}>
                <p>Title: {data.title}</p>
                <p>{data.overview}</p>
                <p>Release Date: {data.release_date}</p>
                <p>Runtime: {(data.runtime/60).toFixed(1)}hrs</p>
                <p>Imdb Ratings: {data.vote_average}</p>
            </div>
        </div>
        </>
    )

}


export const getServerSideProps:GetServerSideProps=async({query})=>{
    const id=query.id;
    const url:string=`https://api.themoviedb.org/3/movie/${id}?api_key=1cf50e6248dc270629e802686245c2c8`;

    const res=await fetch(url);
    const data:MovieInterface=await res.json();
    
    return{
        props:{
            data
        }
    }
}


export default Movie;