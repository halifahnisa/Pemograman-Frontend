import { Link } from "react-router-dom";
import styles from "./index.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
          <nav className={styles.navbar}>
            <div>
              <h1 className={styles.navbar__covidid}>Covid ID</h1>
            </div>
            <div>
              <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><Link to="/covid/global">Global</Link></li>
                <li className={styles.navbar__item}><Link to="/covid/indonesia">Indonesia</Link></li>
                <li className={styles.navbar__item}><Link to="/covid/provinsi">Provinsi</Link></li>
                <li className={styles.navbar__item}><Link to="/covid/abaout">Abaout</Link></li>
              </ul>
            </div>
          </nav>
        </div>
  );
}

export default Navbar;
