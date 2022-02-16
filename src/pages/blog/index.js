import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/Blog.module.css";
export default function index() {
  return (
    <div>
      <Head>
        <title>Real Vision Software</title>
        <meta
          name="description"
          content="Desbloquee el potencial de creciimiento oculto de su empresa o startup con nosotros, utilizando Blockchain, Fintech o la nube. Real Vision Software le ayuda a crear un producto innovador de principio a fin o aumentar su equipo con los expertos adecuados."
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.blogHeader}>
            <aside>
              <div>
                <div className={styles.formGroup}>
                  <i className="bx bx-search-alt-2"></i>
                  <input type="search" name="" id="" placeholder="Buscar" />
                </div>
                <ul>
                  <li>Automatiacion</li>
                  <li>Enterprises</li>
                  <li>Marketing</li>
                  <li>UI/UX</li>
                  <li>Desarrollo</li>
                </ul>
              </div>
            </aside>
            <article className={styles.principalArticle}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
                <p>
                  Traditionally in order to deploy applications/software
                  operations, teams used to procure hardware such as physical
                  servers, networking components, storage drives and then set it
                  up in the on-prem data centers….
                </p>
              </div>
            </article>
          </div>
          <div className={styles.articlesBox}>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>

            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
            <article className={styles.article}>
              <div>
                <img src="./assets/docker.png" alt="" />
              </div>
              <div>
                <span>Automatizacion</span>
                <h2>Digging Deep Into What Is Docker & How It Works</h2>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </div>
  );
}
