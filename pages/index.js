import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import fondAccueil from "../public/fondAccueil.jpg";

export default function Home() {
  const [push, setPush] = useState(false);

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <Image src={fondAccueil} alt="fondaccueil" layout="responsive" />
          <button className={styles.button} onClick={() => setPush(!push)}>
            <div className={styles.image}>
              <Link href="/accueil">Come One</Link>
            </div>
          </button>
        </main>
      </div>
    </Layout>
  );
}
