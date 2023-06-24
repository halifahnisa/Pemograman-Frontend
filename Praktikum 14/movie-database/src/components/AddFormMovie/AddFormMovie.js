import { useState } from "react";
import styles from "./AddFormMovie.module.css";
import Error from "../Error/index";
// Menangkap props
function AddMovieForm(props) {
  const { movies, setMovies } = props;

  //membuat state object
  const[formData, setFormData] = useState({
    title: "",
    date: "",
    gambar: "",
  });
  
  //const [isTitleError, setIsTitleError] = useState(false);
  //const [isDateError, setIsDateError] = useState(false);
  //const [isGambarError, setIsGambarError] = useState(false)

  const {title, date, gambar} = formData;
  const [error, setError] = useState({
    titleError: false,
    dateError: false,
  })

  //membuat fungsi validasi
  function validate(){
    if (title === "") {
      setError({titleError:  true });
      return false;
    } else if (date === "") {
     setError({titleError: false, dateError:true });
      return  false;
    } else if (gambar === "") {
      setError({dateError: false, gambarError: true});
      return false;
    } else{
      return true
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
              {Error.titleError ? <Error>Title Wajib Diisi</Error>: ""}
            </div>
            <div className={styles.form}>
              <label htmlFor="date" className={styles.label}>
                Year
              </label>
              <input onChange={handleChange} id="date" className={styles.input} type="text" name="date" value={date}
              />
              {Error.dateError ? <Error>Date Wajib Diisi</Error>:""}
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
              {Error.gambarError ? <Error>Poster Wajib Diisi</Error>:""}           
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