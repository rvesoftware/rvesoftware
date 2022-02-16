import menuItems from "./header.data";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { useState } from "react";
export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
           <a>
            <img src="../assets/Logo-rve-software.svg" alt="Logo" />
           </a>
          </Link>
        </div>
        <div className={openMenu? styles.leftPanelActive : styles.leftPanel}>
          {menuItems.map((item, i) => (
            <Link key={item.spanishLabel} href={item.path}>
              <a onClick={() => setOpenMenu(false)}>{item.spanishLabel}</a>
            </Link>
          ))}
        </div>
        <button className={styles.menu} onClick={() => setOpenMenu(!openMenu)}>
        <i className='bx bx-menu'></i>
        </button>
      </nav>
    </header>
  );
}
