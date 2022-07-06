import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { useState } from "react";
import imgAct from "../public/imgAct.jpg";

export default function Activites() {
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(true);
  const [display4, setDisplay4] = useState(true);

  return (
    <Layout>
      <h2 className={styles.title}>ACTIVITÉS</h2>
      <main>
        <div className="flex flex-row px-5">
          <button
            onClick={() => setDisplay1(!display1)}
            className={display1 ? styles.min : styles.full}
          >
            <div className={styles.bg}></div>
            <h3 className={styles.h3}>Danse en talons</h3>
          </button>
          <button
            onClick={() => setDisplay2(!display2)}
            className={display2 ? styles.full : styles.min}
          >
            <div className={styles.bg}></div>
            <h3 className={styles.h3}>Effeuilage Burlesque</h3>
          </button>
          <button
            onClick={() => setDisplay3(!display3)}
            className={display3 ? styles.min : styles.full}
          >
            <div className={styles.bg}></div>
            <h3 className={styles.h3}>Chair Danse</h3>
          </button>
          <button
            onClick={() => setDisplay4(!display4)}
            className={display4 ? styles.min : styles.full}
          >
            <div className={styles.bg}></div>
            <h3 className={styles.h3}>French Cancan</h3>
          </button>
        </div>
      </main>
    </Layout>
  );
}
