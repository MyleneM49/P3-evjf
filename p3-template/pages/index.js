import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import url ("https://fonts.google.com/specimen/Kodchasan");

// import Image from "next/image";
// import fondAccueil from "../public/fondAccueil.jpg";



export default function Home() {
  return (
    // <Layout pageTitle="Home Sweet Home">
    //   On garde ou pas le "pageTitle??"
    <Layout>
      <div className={styles.container}>
        {/* <img src="../public/fondAccueil.jpg" alt="FA"> */}
        {/* <Image
          src={fondAccueil}
          alt="Accueil"
          width={300}
          height={300}
          layout="responsive"
        /> */}
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
        </main>
      </div>
    </Layout>
  );
}
