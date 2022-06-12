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
          <h2 className={styles.title}>ACCUEIL</h2>
          <Image src={accueilPage} alt="fondaccueil" layout="responsive" />
          {/* <div className="index">
            <div className={`wrapperImage ${anim ? "animclasse" : ""}`} />
            <button onClick={classToggle}>Click here</button>
          </div> */}
          <div className={styles.prix}>
            <p>Durée : 1h30 Tarif: 50€ par personne</p>
            <p>Durée : 1h30 Tarif: 50€ par personne</p>
            <p>Durée : 1h30 Tarif: 50€ par personne</p>
            <p>Durée : 1h30 Tarif: 50€ par personne</p>
            <p>Durée : 1h30 Tarif: 50€ par personne</p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
