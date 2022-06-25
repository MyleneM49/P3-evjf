import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { useState } from "react";
// import Image from "next/image";
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
        {/* <div className="bg-blue-800"></div> *
        <div className="w-1/4 h-64	bg-blue-200 mx-2 rounded-full">/}
          {/* <div className={styles.imgaga}></div>*/}
        <div className="flex flex-row px-5">
          <button
            onClick={() => setDisplay1(!display1)}
            className={display1 ? styles.min : styles.full}
          >
            <div className={styles.bg}></div>
            <h3 className={styles.h3}>Danse en talons</h3>
            {/* <div className={styles.min}>              
          </div> */}
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
          {/*<button
            onClick={() => setDisplay(!display)}
            className={display ? styles.min : styles.full}
          >
            <h3>Danse en talons</h3>          
          </button>
           <button
            onClick={() => setDisplay(!display)}
            className={display ? styles.min : styles.full}
          >
            <h3>Danse en talons</h3>
          </button> */}
        </div>
        {/* className={styles.buttonA}> */}
        {/* <Image src={imgAct} alt="test" /> */}
        {/* <img src={imgAct.src} width="350px" height="100px" /> */}
        {/* <div className="flex flex-row">
          <div className="w-1/4 bg-blue-800 mx-2 rounded-full">
            <button
              onClick={() => setDisplay(!display)}
              className={display ? styles.min : styles.full}
            >
              Danse en talons
            </button>
          </div>
          <div className="w-1/4 bg-blue-700 mx-2 rounded-full">
            <button
              onClick={() => setDisplay(!display)}
              className={display ? styles.min : styles.full}
            >
              Effeuilage Burlesque
            </button>
          </div>
          <div className="w-1/4 bg-blue-600 mx-2 rounded-full">
            <button
              onClick={() => setDisplay(!display)}
              className={display ? styles.min : styles.full}
            >
              Chair Danse
            </button>
          </div>
          <div className="w-1/4 bg-blue-500 mx-2 rounded-full">
            <button
              onClick={() => setDisplay(!display)}
              className={display ? styles.min : styles.full}
            >
              French Cancan
            </button>
          </div>
        </div> */}
        {/* <div className="flex flex-row">
          <div className="w-1/4 bg-blue-800 mx-2 rounded-full">
            <div className={styles.h3}>
              <h3>Danse en talons</h3>
              <button
                onClick={() => setDisplay(!display)}
                className={display ? styles.min : styles.full}
              ></button>
            </div>
          </div>
          <div className="w-1/4 bg-blue-700 mx-2 rounded-full">
            <div className={styles.h3}>
              <h3>Effeuilage Burlesque</h3>
              <button
                onClick={() => setDisplay(!display)}
                className={display ? styles.min : styles.full}
                // className={display ? styles.min : styles.full}
              ></button>
            </div>
          </div>
          <div className="w-1/4 bg-blue-600 mx-2 rounded-full">
            <div className={styles.h3}>
              <h3>Chair Danse</h3>
              <button
                onClick={() => setDisplay(!display)}
                className={display ? styles.min : styles.full}
              ></button>
              <img src={imgAct.src} alt="test2" width="100%" />
            </div>
          </div>
          <div className="w-1/4 bg-blue-500 mx-2 rounded-full">
            <div className={styles.h3}>
              <button
                onClick={() => setDisplay(!display)}
                className={display ? styles.min : styles.full}
              ></button>
              <h3>French Cancan</h3>
              {/* <Image src={imgAct} alt="img" width={300}></Image> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>  */}
      </main>
    </Layout>
  );
}

{
  /* <div className={styles.imgState}> */
}
