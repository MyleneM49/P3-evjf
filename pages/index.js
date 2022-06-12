import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import fondAccueil from "../public/fondAccueil.jpg";

export default function Home() {
  function h() {
    console.log("Button Clicked");
  }
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <button
            className={styles.button}
            // "w-24	h-24 -mt-80 relative bg-pink-500"
            onClick={() => h()}
          >
            <Link href="/accueil">Come One</Link>
          </button>
          {/* <a className={styles.button}> */}
          <div className={styles.image}>
            <Image src={fondAccueil} alt="fondaccueil" layout="responsive" />
          </div>
          {/* </a> */}
        </main>
      </div>
    </Layout>
  );
}
