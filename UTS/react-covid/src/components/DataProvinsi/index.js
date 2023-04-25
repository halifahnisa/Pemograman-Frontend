import { useState } from "react";
import data from "../../utils/constants/provinces";
import styles from "./index.module.css";


function DataProvinsi() {
    const [DataProvinsi, setProvinsi] = useState(data.provinces);

    const updateDataProvinsi = (updateProvince) => {
        const updateDataProvinsi = DataProvinsi.map((province) => {
            if (province.kota === updateProvince.kota) {
                return updateProvince;
            } else {
                return province;
            }
        });
        setProvinsi(updateDataProvinsi);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Covid 19 di Indonesia</h2>
            <Province DataProvinsi={DataProvinsi} updateDataProvinsi={updateDataProvinsi} />
        </div>
    )
}

export default DataProvinsi;