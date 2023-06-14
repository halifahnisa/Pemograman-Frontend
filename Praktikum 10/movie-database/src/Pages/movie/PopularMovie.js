import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
function PopularMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

//membuat state movies
const[movies, setMovies] = useState ([]);

    useEffect(() => {
        getTrendingMovies();
    }, []);
        
    async function getTrendingMovies(){
        //fetch data dari axios
        const response = await axios(URL);
         //simpan data ke state movies
        setMovies(response.data.results);
    }
    console.log(movies)
    return (
        <>
            <Hero />
            <Movies movies={movies}/>
        </>
    )
}
export default PopularMovie;