import styles from "./index.module.css";
import gambar from "../../assets/gambar1.png";
function Hello() {
  return (
    <div className={styles.container}>
      <section className={styles.covid}>
        <div className={styles.covid__left}>
          <h2 className={styles.covid__title}>Covid ID</h2>
          <h3 className={styles.covid__genre}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.covid__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.covid__button}>Vaccine</button>
        </div>
        <div className="covid__right">
          <img
            className={styles.covid__image}
            src= {gambar} 
            alt="gambar1"
          />
        </div>
      </section>
    </div>
  );
}

export default Hello;
