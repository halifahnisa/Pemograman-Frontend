import styles from "./index.module.css";
import data from "../../utils/constants/indonesia"

function Indonesia() {
    const { indonesia } = data
    console.log(indonesia)
    return(
        <div className={styles.container}>
            <div className={styles.indo}>
                <h1 className={styles.judul}>Indonesia</h1>
                <p className={styles.deskripsi}>Data Covid Berdasarkan Indonesia</p>
            </div>
            <div className={styles.status}>
                {
                indonesia.map((status_covid) => (
                    <div className={styles.isi}>
                        <h1>{status_covid.status}</h1>
                        <h4>{status_covid.total}</h4>
                    </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Indonesia;