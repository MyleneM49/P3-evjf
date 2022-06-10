import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import LandingPage from "../public/LandingPage.jpg";
import LandingPageContextProvider from "./context/LandingPageContext";
// import { useState } from "React";
// import React from "react";
// import HeartButton from "../components/HeartButton";

export default function Home() {
  // const openRendering = useContext(LandingPageContext);
  // const [active, setActive] = React.useState(false);
  // const handleChangeClick = () => {
  // setActive(!active);

  // const [display, setDisplay] = useState("false");

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            src={LandingPage}
            alt="LandingPage"
            width={1000}
            height={1500}
            layout="responsive"
          />
          {/* <button className="mt-6" onClick={() => setDisplay()}></button> */}
          {/* <button className="mt-6" onClick={(display) => setDisplay()}></button> */}
          {/* <img
            sr="../public/LandingPage.jpg"
            alt="page accueil"
            width="300px"
            height="600px"
          /> */}
          <h1 className={styles.title}>LANDING PAGE</h1>
          <LandingPageContextProvider></LandingPageContextProvider>
        </main>
      </div>
    </Layout>
  );
}
