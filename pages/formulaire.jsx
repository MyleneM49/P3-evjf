import Layout from "../components/layout";
import { useState } from "react";
import styles from "../styles/Home.module.css";
// import HeartButton from "../components/HeartButton";

// export default function Formulaire(activity, place, number) {
export default function Formulaire() {
  const [activity, setActivity] = useState([]);

  const activityEach = [
    "Danse en talons",
    "Effeuilage Burlesque",
    "Chair Danse",
    "French Cancan",
  ];

  const [place, setPlace] = useState(["Lyon", "Valence", "Grenoble", "Dijon"]);
  const [number, setNumber] = useState("");

  const handleActivityChange = (e) => setActivity(e.target.value);

  // const acitivity = {
  //   'Effeuilage Burlesque', id:2,
  //   'Chair Danse', id:3,
  //   'French Cancan', id:4
  // }

  // const handlePlaceChange = (e) => setPlace(e.target.value);
  // const handleNumberChange = (e) => setNumber(e.target.value);

  // const handleActivityChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  // setActivity((values) => ({ ...values, [name]: value }));
  // };

  const handlePlaceChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPlace((values) => ({ ...values, [name]: value }));
  };
  const handleNumberChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNumber((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(setNumber * 50, setActivity, setPlace);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>Enter your name:
  //     <input
  //       type="text"
  //       name="username"
  //       value={inputs.username || ""}
  //       onChange={handleChange}
  //     />

  // // console.log("JE LOG PLEIN DE TRUC ", activity, place, number);

  // // const [animal, setAnimal] = useState("");
  // // const [couleur, setCouleur] = useState("");
  // // const [mot, setMot] = useState("");

  // // const handleChange = (e) => {
  // //   e.target.value;
  // // };

  return (
    <Layout>
      <h2 className={styles.title}>RÉSERVATIONS</h2>
      <form
        className="flex flex-col basis-1/4 bg-fuchsia-200 text-sm m-2.5 p-2.5 text-left"
        onSubmit={handleSubmit}
      >
        {/* <div className="max-w-4xl min-h-full bg-fuchsia-700 mx-4 my-6 px-4 py-4"> */}
        <label htmlFor="setActivity" className="text-slate-600 text-base mt-4">
          Choisisez votre activité:
          <select>
            {activity.map((setActivity, key) => (
              <option
                className="m-2 ml-3 w-16"
                key={key}
                value={activity}
                placeholder="Choix"
                required
                onChange={handleActivityChange}
              >
                {setActivity}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="setPlace" className="text-slate-600 text-base mt-6">
          Choisisez votre lieu:
          <select>
            {place.map((setPlace, key) => (
              <option
                key={key}
                className="m-2 ml-3 w-16"
                type="radio"
                name="choice"
                placeholder="Choix"
                value={place}
                required
                onChange={handlePlaceChange}
              >
                {setPlace}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="number" className="text-slate-600 text-base mt-6">
          Choisisez le nombre de participantes:
          <input
            type="number"
            className="ml-3 w-16"
            name="participantes"
            min="2"
            max="16"
            value={number}
            // required
            onChange={handleNumberChange}
          />
        </label>
        <button className={styles.button} type="submit" onSubmit={handleSubmit}>
          Je valide
        </button>
        {/* <HeartButton /> */}
        {/* </div> */}
      </form>
    </Layout>
  );
}

// export async function getStaticProps () {
//   const activity = await fetch(setActivity).then(r. => r.json())
//   return {
//     props : {
//       activity, place, number
//     }
//   }
// }
