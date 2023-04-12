import { useState } from "react";
import styles from "./AddFormMovie.module.css";
import Alert from "../Alert/Alert";

// Menangkap props
function AddMovieForm(props) {
  const { movies, setMovies } = props;
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [gambar, setGambar] = useState("");

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

 
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleGambar(e) {
    setGambar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //jika title kosong
    if (title === "") {
      setIsTitleError(true);
    }
    else if (date === "") {
      setIsDateError(true);
    }
    // Jika tidak kosong 
    else {
      const movie = {
        id: "dfg",
        title: title,
        year: date,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.addform}>

        <div className={styles.left}>
          <img
            className={styles.image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>

        <div className={styles.form__right}>
          <h2 className={styles.title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              <label htmlFor="title" className={styles.label}>
                Title
              </label>
              <input  onChange={handleTitle} id="title" className={styles.input} type="text" name="title" value={title}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form}>
              <label htmlFor="date" className={styles.label}>
                Year
              </label>
              <input onChange={handleDate} id="date" className={styles.input} type="text" name="date" value={date}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form}>
              <label htmlFor="gambar" className={styles.label}>
                Gambar Movie
              </label>
              <label htmlFor="jenis_film"></label>
              <select id="jenis_film" name="jenis_film">
                <option value="">Action</option>
                <option value="">Drama</option>
                <option value="">Horor</option>
                <option value="">Comedy</option>
                <option value="">Romance</option>
              </select><br />
              <input onChange={handleGambar} id="gambar" className={styles.input} type="text" name="gambar" value={gambar}/>            
            </div>

            <div>
              <button className={styles.button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;