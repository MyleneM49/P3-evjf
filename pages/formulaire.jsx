import Layout from "../components/layout";
// import { useState } from "react";
// import { useState, useEffect } from "react";

export default function Formulaire() {
  // const [activity, setActivity] = useState("");
  // const [place, setPlace] = useState("");
  // const [number, setNumber] = useState("");

  // const handleActivityChange = (e) => {
  //   setActivity(e.target.value);
  // };
  // const handlePlaceChange = (e) => {
  //   setPlace(e.target.value);
  // };
  // const handleNumberChange = (e) => {
  //   setActivity(e.target.value);
  //};
  // const [checked, setChecked] = usaState ("false");
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(`Youhou you clicked ${count}`);
  // });

  return (
    <Layout pageTitle="RÉSERVATIONS">
      <div className="max-w-4xl h-auto m-auto bg-fuchsia-700 mx-4 my-6">
        <h2 className="pageTitle">contacteMe</h2>
        {/* {finalchoice.map(({id, activity, place, number}))} => { */}
        <form className="bg-fuchsia-200 text-xs	flex columns-4 m-2.5 p-2.5 h-1/3">
          <input
            type="checkbox"
            name="choice"
            value="1"
            id="ans1"
            //  checked={}
          />
          <span id="choice1">Danse en talons</span>
          <input type="checkbox" name="choice" value="2" id="ans2" />
          <span id="choice2">Effeuilage Burlesque</span>
          <input type="checkbox" name="choice" value="3" id="ans3" />
          <span id="choice3">Chair Danse</span>
          <input type="checkbox" name="choice" value="4" id="ans4" />
          <span id="choice4">French Cancan</span>
        </form>
        <form className="bg-fuchsia-300 m-2.5 h-1/3">
          <span id="combien">Nombres de participantes</span>
          {/* <label htmlFor="quantity">X</label> */}
          <input
            type="number"
            name="participantes"
            id="participantes"
            min="2"
            max="16"
            value="0"
          />

          {/* // onClick={() => setCount((prevCount) => prevCount + 1)}> // Click //{" "}
        {/* onClick={ */}
          {/* (e) => setCount((prevCount) => prevCount + 1)
        console.log(e.target.value);} // /> // <h1>Click Counter:</h1>
      <h1>{count}</h1>
      {" "}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {" "}
        </button>{" "} */}
          {/* {nbparticipantes.map(({ id, quantity }) => (
          <tr key={id}></tr>
          <input
            type="number"
            name="participantes"
            id="participantes"
            min="2"
            max="16"
            value="{quantity}"
            onClick={
            (e) => setCount((prevCount) => prevCount + 1)
            console.log(e.target.value);
            }
        ))} */}
        </form>
        <form className="bg-fuchsia-400 text-xs	flex columns-4 m-2.5 p-2.5 h-1/3">
          <input type="checkbox" name="choice" value="1" id="ans1" />
          <span id="choice1">Lyon</span>
          <input type="checkbox" name="choice" value="2" id="ans2" />
          <span id="choice2">Valence</span>
          <input type="checkbox" name="choice" value="3" id="ans3" />
          <span id="choice3">Dijon</span>
          <input type="checkbox" name="choice" value="4" id="ans4" />
          <span id="choice4">Grenoble</span>
        </form>
      </div>
    </Layout>
  );
}
