import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Banner from "../sections/banner";
import Integrations from "../sections/integrations";
import Questions from "../sections/questions";
import Technologies from "../sections/technologies";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Vision Software</title>
        <meta name="description" content="Desbloquee el potencial de creciimiento oculto de su empresa o startup con nosotros, utilizando Blockchain, Fintech o la nube. Real Vision Software le ayuda a crear un producto innovador de principio a fin o aumentar su equipo con los expertos adecuados." />
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
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <Layout>
        <Banner />
        <Technologies />
        <Integrations />
        <Questions />
      </Layout>
    </div>
  );
}
