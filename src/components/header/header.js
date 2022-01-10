import menuItems from "./header.data";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
export default function Header() {


  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <img src="../assets/Logo-rve-software.svg" alt="Logo" />
        </div>
        <div>
          {menuItems.map((item, i) => (
            <Link href={item.path} key={i}>
              <a>{item.spanishLabel}</a>
            </Link>
          ))}
        
        </div>
      </nav>
    </header>
  );
}
