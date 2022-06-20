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
            {/* <p className="style.p"> */}
            Des cours Sexy & Glamour pour vos événements entre filles : EVJF,
            Anniversaire, Soirées filles etc...{" "}
            {/* </p>
            <br /> */}
            Révélez la femme fatale qui sommeille en vous et OSEZ ! Un moment
            inoubliable 100% Girly à partager avec vos meilleures amies.
            Effeuillage Burlesque Chair Dance Danse en talons Lap Dance Twerk
            etc...
            {/* <p> */}
            Sur toute la région Rhône-Alpes : Lyon, Grenoble, Valence etc...
            Mais aussi Dijon & Clermont Ferrand.
            {/* </p>
            <br />
            <p> */}
            A domicile et/ou en salle de danse Nous nous adaptons à votre
            demande.
            {/* </p> */}
          </div>
        </main>
      </div>
    </Layout>
  );
}
