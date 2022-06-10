import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import fondAccueil from "../public/fondAccueil.jpg";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <Image src={fondAccueil} alt="fondaccueil" layout="responsive" />
          {/* <div className={styles.button}>click!</div> */}
          <Link href="/accueil">
            <a className={styles.button}>click</a>
          </Link>
        </main>
      </div>
    </Layout>
  );
}
