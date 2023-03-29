import styles from "./AddFormMovie.module.css";

function AddFormMovie() {
  return (
    <div className={styles.container}>
      <section className={styles.addform}>
        <div className={styles.form__right}>
          <h2 className={styles.title}>Add Movie</h2>
          <form className={styles.form}>
                    <label>Title
                        <input type="text"/>
                    </label>
                    <label className={styles.form1}>Year
                        <input type="text"/>
                    </label>
                </form>
          <button className={styles.button}>Submit</button>
        </div>
        <div className="form__left">
          <img
            className={styles.image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default AddFormMovie;