import styles from "./index.module.css";
import gambar from "../../assets/gambar2.png";

function FormCovid () {
    return(
        <div className={styles.container}>
            <section className={styles.addform}>
                
                <div className={styles.left}>
                    <img
                    className={styles.image}
                    src={gambar}
                    alt="gambar2"
                    />
                </div>

                <div className={styles.form__right}>
                <h2 className={styles.title}>Form Covid</h2>
                <form>
                    <div className={styles.form}>
                        <label htmlFor="title" className={styles.label}>Provinsi</label>
                        <label htmlFor="daerah"></label>
                            <select id="daerah" name="daerah">
                                <option value="">Aceh</option>
                                <option value="">Bandung</option>
                                <option value="">Depok</option>
                                <option value="">Jakarta</option>
                                <option value="">Medan</option>
                            </select><br />
                    </div>

                    <div className={styles.form}>
                        <label htmlFor="title" className={styles.label}>Status</label>
                        <input id="title" className={styles.input} type="text" name="title" />
                    </div>

                    <div className={styles.form}>
                        <label htmlFor="title" className={styles.label}>Jumlah</label>
                        <input id="title" className={styles.input} type="text" name="title" />
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
export default FormCovid;
