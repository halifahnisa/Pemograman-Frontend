import { useState } from "react";
import data from "../../utils/constants/provinces";
import styles from "./index.module.css";

function Provinsi() {
    const [DataProvinsi] = useState(data.provinces);

    return (
        <div className={styles.container}>
            <div className= {styles.prov}>
            <h1 className={styles.judul}>Provinsi</h1>
            <p className={styles.deskripsi}>Data Sebaran di Provinsi Indonesia</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    {DataProvinsi.map((provinces, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{provinces.kota}</td>
                            <td>{provinces.kasus}</td>
                            <td>{provinces.sembuh}</td>
                            <td>{provinces.dirawat}</td>
                            <td>{provinces.meninggal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>

    );
}

export default Provinsi;