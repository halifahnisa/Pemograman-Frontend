import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./index.module.css";


function RegionSituation(){
    const URL = "https://covid-fe-2023.vercel.app/api/global.json";
    const [regions, setRegions] = useState([]);

    useEffect (() => {
        const getData = async ()=>{
            try {
                const response = await axios.get(URL);
                console.log(response);
                setRegions(response.data.regions);
            }catch(error){
                console.log(error);
            }
        };
        getData();
    },[]);

    return(
        <div className={styles.container}>
            <div className={styles.region}>
                <h1 className={styles.judul}>Situation by Regions</h1>
                <p className={styles.deskripsi}>Bacaan Pilihan Covid</p>
            </div>

            <div className={styles.regions}>
                {
                regions && regions.map((regions_status) => (
                    <div className={styles.isi}>
                    <h2>{regions_status.name}</h2>
                    <h5>{regions_status.numbers.confirmed}</h5>
                    <h5>{regions_status.numbers.recovered}</h5>
                    <h5>{regions_status.numbers.death}</h5>
                </div>
                ))
                }
            </div>

        </div>
    )
}
export default RegionSituation;