import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function NavBar({ }) {
  const active = { opacity: 1 };
  const notActive = { opacity: 0.4 };

  return (

      <div className={styles.outerBar}>
        <Link href="/">
          <div className={styles.wrapper}>
            <img src="/beewb1.png" alt="beewb illustration" className={styles.logo} />
          </div>
        </Link>
        <hr className={styles.line} />
      </div>
  );
}
