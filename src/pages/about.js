import Layout from "../components/layout";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.mainSection}>
          <p> Empresa de Desarrollo de Software Activa desde 2017</p>
          <h2>Nuestro Tesoro es la Gente, nuestra Vision y los Valores</h2>
          <p>
            Real Vision Software no solo es una empresa de tecnologia reconocida
            a nivel mundial, sino tambien una familia llena de expertos
            talentosos que ayudan a marcas globales, grandes empresas, medianas
            empresas o incluso nuevas empresas con soluciones innovadoras.{" "}
          </p>
        </section>
        <section className={styles.secSection}>
          <h2>Nuestra Ubicacion </h2>
          <div>
            <img src="./assets/hq.png" alt="" />
            <span>
              <h3>HQ Medellin</h3>
              <ul>
                <li>Circular 3 #70-18 Oficina 402</li>
                <li>Medellin, CO</li>
                <li>0500050</li>
                <li>+57 3207768205</li>
                <li></li>
              </ul>
            </span>
          </div>
        </section>
        {/* <section>
          <h2>Somos Real Vision Software</h2>
          <p className={styles.firstP}>
            En Real Vision Software, queremos resolver la mayor parte de
            problemas que enfrenta nustra sociedad, atravez de software.
          </p>

          <p className={styles.secondP}>
            Los desarrolladores necesitan saber que aplicaciones crear, como
            monetizarlas y donde ponerles precio. Los anunciantes y las marcas
            deben identificar a su usuario objetivo y determinar donde asignar
            los recursos para llegar a ellos de manera mas efectiva. Los
            inversores necesitan saber que aplicaciones y generos estan
            creciendo mas rapido y donde los usuarios realmente gastan su tiempo
            (y dinero).
          </p>

          <p>
            En los negocios necesiamos datos para tomar decisiones informadas.
            Real Vision SOftwareproporciona los conocimientos mas practicos de
            la industria. Nuestro objetivo es poner esotos datos a disposicion
            de tantar personas como sea posible
          </p>
        </section> */}
        {/* <section>
          <h2>Colaboracion ⇒ Mucha Retroalimentacion </h2>
          <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/05/collaboration-img.svg" alt="" />
        </section> */}
      </div>
    </Layout>
  );
}
