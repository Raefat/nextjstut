import Link from "next/link";
import styles from "../styles/Navb.module.css";

function Navb() {
  return (
    <div>
      <Link href="/">
        <a className={styles.txt}>Home Page</a>
      </Link>
      <Link href="/silvi">
        <a style={{ fontSize: "50px" }}>Silvi Page</a>
      </Link>
    </div>
  );
}

export default Navb;
