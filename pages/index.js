import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import fondAccueil from "../public/fondAccueil.jpg";
// import HeartButton from "../components/HeartButton";

export default function Home() {
  const [push, setPush] = useState(false);
  // const [anim, setAnim] = useState(false);

  // const handleClick = (e) => {
  //   setpush;
  // };
  // const classToggle = () => {
  //   setAnim(!anim);
  // };
  // function h() {
  //   console.log("Button Clicked");
  // }
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <div className="">
            <Image src={fondAccueil} alt="fondaccueil" layout="responsive" />
            {/* <HeartButton />
            <a onClick={() => setPush(!push)}>
              <Link href="/accueil"></Link>
            </a> */}
          </div>
          <div className={styles.image}>
            <button className={styles.button} onClick={() => setPush(!push)}>
              {/* onClick={(handleClick) => setPush(e.target.value)}> {push} */}
              <Link href="/accueil">Come One</Link>
            </button>
          </div>
          {/* <div className={`box ${anim ? "animclasse" : ""}`} /> */}
          {/* <div className="box" />
          <button onClick={classToggle}>Touch-Me!</button> */}
        </main>
      </div>
    </Layout>
  );
}
