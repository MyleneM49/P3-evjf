import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import LandingPage from "../public/LandingPage.jpg";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image src={LandingPage} alt="LandingPage" layout="responsive" />
          <h1 className={styles.title}>LANDING PAGE</h1>
          <button></button>
        </main>
      </div>
    </Layout>
  );
}
