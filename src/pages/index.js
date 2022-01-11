import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Banner from "../sections/banner";
import CaseStudies from "../sections/caseStudies";
import Integrations from "../sections/integrations";
import Questions from "../sections/questions";
import Technologies from "../sections/technologies";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Banner />
        <Technologies />
        <Integrations />
        {/* <CaseStudies /> */}
        <Questions />
      </Layout>
    </div>
  );
}
