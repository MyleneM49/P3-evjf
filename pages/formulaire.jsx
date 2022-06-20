import Layout from "../components/layout";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import HeartButton from "../components/HeartButton";

export default function Formulaire() {
  const [animal, setAnimal] = useState("");
  const [couleur, setCouleur] = useState("");
  const [mot, setMot] = useState("");

  const handleAnimalChange = (e) => setAnimal(e.target.value);
  const handleSubmit = () => {
    alert("okayyyyy!");
  };

  // const handleAnimalChange = (e) => setAnimal(e.target.value);
  // const handleCouleurChange = (e) => setCouleur(e.target.value);
  // const handleMotChange = (e) => setMot(e.target.value);
  console.log(animal, couleur, mot);
  return (
    <Layout>
      <h2 className={styles.title}>RÉSERVATIONS</h2>
      <div className="max-w-4xl min-h-full bg-fuchsia-700 mx-4 my-6 px-4 py-4">
        <form
          className="flex flex-col basis-1/4 bg-fuchsia-200 text-sm m-2.5 p-2.5 h-1/2 text-left"
          onSubmit={handleSubmit}
          // c'est Nico qui l'a ajouté
        >
          <label htmlFor="Choix1"> Quel est ton animal préféré? </label>
          <input
            id="Choix1"
            type="text"
            value={animal}
            onChange={handleAnimalChange}
            // handleAnimalChange={(e) => {
            //   setAnimal(e.target.value);
            // }}
          />

          <label htmlFor="Choix2"> Quel est ta couleur préférée?</label>
          <input
            id="Choix2"
            type="text"
            value={couleur}
            onChange={(e) => setCouleur(e.target.value)}
          />
          <label htmlFor="Choix3">Quel est ton mot favori?</label>
          <input
            type="text"
            value={mot}
            onChange={(e) => setMot(e.target.value)}
          />
          <HeartButton />
          {/* <button type="submit" className={styles.buttonForm}>
            ok
          </button> */}
        </form>
      </div>
    </Layout>
  );
}
