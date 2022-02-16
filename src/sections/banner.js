import Link from 'next/link'
import styles from '../styles/Banner.module.css'


export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.contentBox}>
                    <h1>Construir. Crecer. Pivotear.</h1>
                    <p>Desbloquee el potencial de creciimiento oculto de su empresa o startup con nosotros, utilizando Blockchain, Fintech o la nube. Real Vision Software le ayuda a crear un producto innovador de principio a fin o aumentar su equipo con los expertos adecuados.</p>
                </div>
                    <button> 
                <Link href="/contact">
                    <a>

                        Asesoria gratuita
                    </a>
                </Link>
                        </button>
                <div className={styles.imageBox}>
                    <img src="./assets/banner.png" alt="" />
                </div>

            </div>
        </section>
    )
}
