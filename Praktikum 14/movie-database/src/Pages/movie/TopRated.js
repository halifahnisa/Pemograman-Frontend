import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import Hero from "../../components/Hero/Hero";
function TopRated(){
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        const response = await axios (URL)
        dispatch(updateMovie(response.data.results));
    }

    return (
        <>
            <Hero />
            <Movies title="Top Rated"/>
        </>
    )
}

export default TopRated;