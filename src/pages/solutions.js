import Layout from "../components/layout";
import styles from "../styles/Solutions.module.css";

export default function Solutions() {
  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.mainSection}>
          <h2>Soluciones de Software para Varios Negocios</h2>
          <p>
            Desde 2017, Real Vision Software ha aspirado a que las empresas
            globales utilicen las tecnologías de hoy para construir un mañana
            mejor. Permítanos darle la mano y obtener acceso inmediato a nuestro
            mejor talento tecnológico, como su propio equipo, para crear
            excelentes soluciones de software.
          </p>
        </section>
        <section className={styles.secSection}>
          <h2>Desarrollo de excelentes soluciones de software para</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img src="./assets/icons/empresa.png" alt="" />
              <h3>Empresas</h3>
              <p>Fomentar la movilidad y la automatización empresarial a través del desarrollo de software colaborativo que da como resultado la excelencia organizacional</p>
            </div>
            <div className={styles.card}>
            <img src="./assets/icons/b2b.png" alt="" />
              <h3>Companias B2B</h3>
              <p>Diseñamos ERP personalizado, CRM, plataformas de comercio electrónico, soluciones SaaS que agilizarán su flujo de trabajo y mejorarán la productividad</p>
            </div>
            <div className={styles.card}>
            <img src="./assets/icons/b2c.png" alt="" />
              <h3>Companias B2C</h3>
              <p>Ayudamos a las empresas con soluciones como CRM, aplicación de comercio electrónico, motores de reservas, sistemas POS, etc. utilizando tecnologías modernas que satisfacen las necesidades de los usuarios.</p>
            </div>
          </div>
        </section>
        <section className={styles.thrSection}>
          <h2>Haganos su socio de TI preferido</h2>
          <p>Nuestra capacidad en tecnologías avanzadas como AR-VR, AI y ML, IoT, análisis de Big Data lo ayudarán a innovar sus procesos comerciales existentes y mejorar su productividad, valor, ingresos y experiencia de usuario.</p>
          <p>Las soluciones construidas por nuestro equipo de ingeniería son completamente seguras y escalables.</p>
          <div className={styles.techs}>
            <img src="./assets/icons/icons8-android-os.svg" alt="" />
            <img src="./assets/icons/icons8-flutter.svg" alt="" />
            <img src="./assets/icons/icons8-xamarin.svg" alt="" />
            <img src="./assets/icons/icons8-amazon-web-services.svg" alt="" />
            <img src="./assets/icons/icons8-python.svg" alt="" />
          </div>
          <img className={styles.techBigImg} src="./assets/mockup.png" alt="" />
        </section>
      </div>
    </Layout>
  );
}
