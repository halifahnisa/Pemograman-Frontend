import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailMovie() {
    const {id} = useParams;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState("");

    async function fetchDetailMovie() {
        const URL = ``
        const response =  await axios(URL);

        setMovie(response.data);
    }

    useEffect(() => {
        fetchDetailMovie();
    }, []);

    console.log("## movie", movie);
    return (
        <StyledDetailMovie>
            <div className="poster">
                <img
                src = {``}
                alt = ""
                />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{gendres}</h3>
                <p>{movie.overview}</p>
                <button as="a" href = {``}>Watch</button>
            </div>
        </StyledDetailMovie>
    );
}

export default DetailMovie;