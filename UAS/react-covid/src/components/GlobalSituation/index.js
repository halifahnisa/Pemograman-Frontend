import { useState } from "react";
import styles from "./index.module.css";
import { useEffect } from "react";
import axios from "axios";

function GlobalSituation(){
    const URL = "https://covid-fe-2023.vercel.app/api/global.json"
    const [covid, setCovid] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const response = await axios.get(URL);
                console.log(response);
                setCovid(response.data.global);
            } catch(error){
                console.log(error);
            }
        };
        getData();
    },[]);
        
    return (
        <div className={styles.container}>
            <div className={styles.indo}>
                <h1 className={styles.judul}>Global Situation</h1>
                <p className={styles.deskripsi}>Data Covid Berdasarkan Global</p>
            </div>

            <div className={styles.status}>
                {
                covid && covid.map((status_covid) => (
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
export default GlobalSituation;