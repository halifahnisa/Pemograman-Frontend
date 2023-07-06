import { useState } from "react";
import styles from "./index.module.css";
import { useEffect } from "react";
import axios from "axios";

function Indonesia() {
    const URL = "https://covid-fe-2023.vercel.app/api/indonesia.json";
    const [indo, setIndo] = useState([]);

    useEffect (()=>{
        const getData = async()=>{
            try{
                const response = await axios.get(URL);
                console.log(response);
                setIndo(response.data.indonesia);
            }catch(error){
                console.log(error);
            }
        };
        getData();
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.indo}>
                <h1 className={styles.judul}>Indonesia</h1>
                <p className={styles.deskripsi}>Data Covid Berdasarkan Indonesia</p>
            </div>
            <div className={styles.status}>
                {
                indo && indo.map((status_covid) => (
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