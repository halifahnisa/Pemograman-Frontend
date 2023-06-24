import { useDispatch } from "react-redux";
import Movies from "../../components/Movies/Movies";
import { useEffect } from "react";
import { updateMovie } from "../../features/moviesSlice";
import Hero from "../../components/Hero/Hero";
function NowPlaying(){
    const dispatch = useDispatch();

    useEffect(()=>{
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies(){
        const response = await axios (URL);
        dispatch(updateMovie(response.data.result));
    }
    return (
        <>
            <Hero/>
            <Movies title="Now Playing"/>
        </>
    )
}
export default NowPlaying;