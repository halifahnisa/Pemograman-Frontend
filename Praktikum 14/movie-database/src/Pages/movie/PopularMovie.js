import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function PopularMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

//membuat state movies
const dispatch = useDispatch
    useEffect(() => {
        getTrendingMovies();
    }, []);
        
    async function getTrendingMovies(){
        //fetch data dari axios
        const response = await axios (URL); 
        dispatch(updateMovie(response.data.results))
    }
    console.log(movies)
    return (
        <>
            <Hero />
            <Movies title="Popular Movies"/>
        </>
    )
}
export default PopularMovie;