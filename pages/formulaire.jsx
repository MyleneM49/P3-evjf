import Layout from "../components/layout";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import HeartButton from "../components/HeartButton";

export default function Formulaire(props) {
  const [activity, setActivity] = useState("");
  const [place, setPlace] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activity + " ", place + " ", number * 50, "€");
  };

  return (
    <Layout>
      <h2 className={styles.title}>RÉSERVATIONS</h2>
      <div className="max-w-4xl min-h-full bg-fuchsia-700 mx-4 my-6 px-4 py-4">
        <form
          className="flex flex-col basis-1/4 bg-fuchsia-200 text-sm m-2.5 p-2.5 h-1/2 text-left border-fuchsia-500"
          onSubmit={handleSubmit}
        >
          <p className="text-slate-600 text-base mt-4 pb-4">
            Choisisez votre activité:
          </p>
          <label
            htmlFor="acitvity"
            className="flex flex-row justify-between px-6"
          >
            <p>Danse en talons</p>
            <input
              type="checkbox"
              name="choice"
              id="1"
              value={"Danse en talons"}
              onChange={(e) => {
                setActivity(e.target.value);
              }}
            />
          </label>
          <label
            htmlFor="acitvity"
            className="flex flex-row justify-between px-6"
          >
            <p>Effeuilage Burlesque</p>
            <input
              type="checkbox"
              name="choice"
              id="2"
              value={"Effeuilage Burlesque"}
              onChange={(e) => {
                setActivity(e.target.value);
              }}
            />
          </label>
          <label
            htmlFor="acitvity"
            className="flex flex-row justify-between px-6"
          >
            <p>Chair Danse</p>
            <input
              type="checkbox"
              name="choice"
              id="3"
              value={"Chair Danse"}
              onChange={(e) => {
                setActivity(e.target.value);
              }}
            />
          </label>
          <label
            htmlFor="acitvity"
            className="flex flex-row justify-between px-6"
          >
            <p>French Cancan</p>
            <input
              type="checkbox"
              name="choice"
              id="4"
              value={"French Cancan"}
              onChange={(e) => {
                setActivity(e.target.value);
              }}
            />
          </label>
          <p className="text-slate-600 text-base mt-4 pb-4">
            Choisisez votre lieux:
          </p>
          <label htmlFor="place" className="flex flex-row justify-between px-6">
            <p>Lyon</p>
            <input
              type="checkbox"
              name="choice"
              id="1"
              value={"Lyon"}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
          </label>
          <label htmlFor="place" className="flex flex-row justify-between px-6">
            <p>Valence</p>
            <input
              type="checkbox"
              name="choice"
              id="2"
              value={"Valence"}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
          </label>
          <label htmlFor="place" className="flex flex-row justify-between px-6">
            <p>Grenoble</p>
            <input
              type="checkbox"
              name="choice"
              id="3"
              value={"Grenoble"}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
          </label>
          <label htmlFor="place" className="flex flex-row justify-between px-6">
            <p>Dijon</p>
            <input
              type="checkbox"
              name="choice"
              id="1"
              value={"Dijon"}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
          </label>
          <label
            htmlFor="number"
            className="text-slate-600 text-base mt-6 pb-4 flex flex-row justify-between mr-3"
          >
            Choisisez le nombre de participantes:
            <input
              className="w-12 border-fuchsia-500 text-center"
              type="number"
              placeholder="--"
              name="participantes"
              min="2"
              max="16"
              value={number}
              required
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </label>
          <HeartButton />
        </form>
      </div>
    </Layout>
  );
}
