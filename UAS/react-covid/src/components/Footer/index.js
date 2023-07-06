import styles from "./index.module.css"
function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Covid ID</h2>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>Abaout</li>
          </ul>
        </div>
      </footer>
      <p className={styles.footer__author}>Developed by AnisaHalifah</p>
    </div>
  );
}

export default Footer;
