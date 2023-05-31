import { useState } from "react";
import styles from "./AddFormMovie.module.css";
import Alert from "../Alert/Alert";

// Menangkap props
function AddMovieForm(props) {
  const { movies, setMovies } = props;

  //membuat state object
  const[formData, setFormData] = useState({
    title: "",
    date: "",
    gambar: "",
  });
  
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isGambarError, setIsGambarError] = useState(false)

  const {title, date, gambar} = formData;

  //membuat fungsi validasi
  function validate(){
    if (title === "") {
      setIsTitleError(true);
      return false;
    }
    else if (date === "") {
      setIsDateError(true);
      setIsDateError(false);
      return  false;
    } else if (gambar === "") {
      setIsGambarError(true);
      setIsGambarError(false);
      return false;
    } else{
      setIsTitleError(false);
      setIsDateError(false);
    }
  }

  //fungsi untuk add movie
  function addmovie(){
    const movie = {
      id: "dfg",
      title: title,
      year: date,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }
  function handleChange(e){
    const {name, value} = e.target;
    setFormData ({
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addmovie(); 
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
              <input  onChange={handleChange} id="title" className={styles.input} type="text" name="title" value={title}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form}>
              <label htmlFor="date" className={styles.label}>
                Year
              </label>
              <input onChange={handleChange} id="date" className={styles.input} type="text" name="date" value={date}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form}>
              <label htmlFor="gambar" className={styles.label}>
                Type
              </label>
              <select>
                <option value="">Action</option>
                <option value="">Drama</option>
                <option value="">Horor</option>
                <option value="">Comedy</option>
                <option value="">Romance</option>
              </select>
              <input onChange={handleChange} id="gambar" className={styles.input} type="text" name="gambar" value={gambar}/> 
              {isGambarError && <Alert>Poster Wajib Diisi</Alert>}           
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