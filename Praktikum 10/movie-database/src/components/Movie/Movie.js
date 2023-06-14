import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

function Movie(props){
    const{movie}= props;
    return (
      <StyledMovie>
        <div className={styles.movie}>
          <img
            className={styles.movie__image}
            src={movie.poster }
            alt=""
            />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year || movie.release_date}</p>
        </div>
      </StyledMovie>
    );
}
export default Movie;