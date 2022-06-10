import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import accueilPage from "../public/accueilPage.jpg";
// import React, { useState } from "react";

export default function Home() {
  //   const [anim, setAnim] = useState(false);

  //   const classToggle = () => {
  //     setAnim(!anim);
  //   };

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <Image src={accueilPage} alt="fondaccueil" layout="responsive" />
          {/* <div className="index">
            <div className={`wrapperImage ${anim ? "animclasse" : ""}`} />
            <button onClick={classToggle}>Click here</button>
          </div> */}
          <div className={styles.prix}>
            Durée : 1h30 Tarif: 50€ par personne Durée : 1h30 Tarif: 50€ par
            personne Durée : 1h30 Tarif: 50€ par personne Durée : 1h30 Tarif:
            50€ par personne Durée : 1h30 Tarif: 50€ par personne
          </div>
        </main>
      </div>
    </Layout>
  );
}
