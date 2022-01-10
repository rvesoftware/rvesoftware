import Link from 'next/link'
import menuItems from './footer.data'
import styles from '../../styles/Footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <div className={styles.clock}>
            <div class={styles.outerclockface}>

</div>

            </div> */}
            <div>
                <Link href="/"><a>
                        <img src="./assets/Logo-rve-software.svg" alt="" />
                    </a></Link>
                <nav>
                    {menuItems.map((item, i) => (
                        <Link href={item.path}><a>{item.spanishLabel}</a></Link>
                    ))}
                </nav>
                <p>Copyright &copy; {new Date().getFullYear()} Real Vision Enterprise</p>
            </div>
        </footer>
    )
}
