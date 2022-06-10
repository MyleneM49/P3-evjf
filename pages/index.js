import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import fondAccueil from "../public/fondAccueil.jpg";
// import HeartButton from "../components/HeartButton";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <Image
            src={fondAccueil}
            alt="LandingPage"
            width={"400"}
            height={"700"}
            // layout="responsive"
            // <HeartButton />
          />
        </main>
      </div>
    </Layout>
  );
}
