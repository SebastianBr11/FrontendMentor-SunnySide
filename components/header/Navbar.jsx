import { useNav } from "../../hooks";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { navOpen, toggleNavOpen } = useNav();
  console.log(navOpen);
  return (
    <header
      className={[
        styles.header,
        navOpen ? styles.navOpen : "",
        "container"
      ].join(" ")}
    >
      <ul className={styles.list}>
        <li className={styles.logoList}>
          <ul className={styles.nestedList}>
            <a href="#">
              <img src="/images/logo.svg" alt="sunnyside" />
            </a>
            <button onClick={toggleNavOpen} className={styles.hamburger}>
              <img src="/images/icon-hamburger.svg" alt="menu" />
            </button>
          </ul>
        </li>
        <li className={styles.linkList}>
          <ul>
            <li className={styles.linkListItem}>
              <a href="#"> About</a>
            </li>
            <li className={styles.linkListItem}>
              <a href="#"> Services</a>
            </li>
            <li className={styles.linkListItem}>
              <a href="#"> Projects</a>
            </li>
            <li className={styles.linkListItem}>
              <a href="#" className={styles.button}>
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
