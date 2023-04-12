import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
  const{movies, setMovies} = props;

  function tambahFilm(){
    const movie = {
      id: "xyz",
      title: "Spriral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

  //  movie ke state movies
  //spread operator: copu dan merge array
  setMovies([...movies, movie])
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* looping data mivies menggunakan map
              render component Movie
              kirim props movie
          */}
          {movies.map(function(movie) {
              return <Movie key={movie.id} movie = {movie}/>
            })}
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;