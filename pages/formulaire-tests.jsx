import Layout from "../components/layout";
// import { useState } from "react";
import styles from "../styles/Home.module.css";
// import HeartButton from "../components/heartButton";
// import { useState, useEffect } from "react";

export default function Formulaire() {
  // const acitivity = ['Danse en talons', 'Effeuilage Burlesque', 'Chair Danse', 'French Cancan'];

  //   const [activity, setActivity] = useState("");
  //   const handleActivityChange = (e) => {
  //     setActivity(e.target.value);
  //   };

  // const [button, setButton] = useState(false);
  // const classToggle = () => {
  //   setButton(!button);
  //   };
  // const [anim, setAnim] = useState(false);

  // const classToggle = () => {
  //   setAnim(!anim);
  // };

  // const [place, setPlace] = useState("true");
  // const [number, setNumber] = useState("");

  // const handlePlaceChange = (e) => {
  //   setPlace(e.target.value);
  // };
  // const handleNumberChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // console.log(
  //   'Récapitulatif de votre projet EVJF:"' +
  //     activity +
  //     '" , à :"' +
  //     place +
  //     '" et vous serez:"' +
  //     number +
  //     '"'
  // );
  // e.preventDefault();

  // const handleClick(e) => {
  //   e.preventDefault();
  //   console.log("Le lien a été cliqué.");
  // }

  return (
    <Layout>
      <h2 className={styles.title}>JE test</h2>
      <button type="submit" className={styles.buttonForm}>
        ok
        {/* Je confirme ma demande */}
      </button>{" "}
    </Layout>
  );
}
{
  /* <HeartButton /> */
}
{
  /* <h2 className="pageTitle">contacteMe</h2> */
}
{
  /* <div className="max-w-4xl min-h-full bg-fuchsia-700 mx-4 my-6">
        Choisisez votre activité: */
}
{
  /* {finalchoice.map(({id, activity, place, number}))} => { */
}
{
  /* <form className="flex flex-col basis-1/4 bg-fuchsia-200 text-xs m-2.5 p-2.5 h-1/2 text-left"> */
}
{
  /* // placeholder="Enter a text"
              // required
              // onChange={(e) => { 
            // handleActivityChange(e);*/
}
{
  /* <div className=" flex flex-row-reverse"> */
}
{
  /* <label htmlFor="activity">
            Danse en talons__
            <input
              type="checkbox"
              name="choice"
              value={activity}
              required
              onChange={(e) => {
                setActivity(e.target.value);
                handleActivityChange(e);
              }}
              id="1"
            />
          </label> */
}
{
  /* </div> */
}
{
  /* <label htmlFor="activity">
            Effeuilage Burlesque__
            <input
              type="checkbox"
              name="choice"
              value={activity}
              required
              onChange={(e) => {
                handleActivityChange(e);
              }}
              id="2"
            />
          </label>
          <label htmlFor="activity">
            Chair Danse__
            <input
              type="checkbox"
              name="choice"
              value={activity}
              required
              onChange={(e) => {
                handleActivityChange(e);
              }}
              id="3"
            />
          </label>
          <label htmlFor="activity">
            French Cancan__
            <input
              type="checkbox"
              name="choice"
              value={activity}
              required
              onChange={(e) => {
                handleActivityChange(e);
              }}
              id="4"
            />
          </label>
          <br />
        </form> */
}
{
  /* <div className={`box ${button ? "buttonclasse" : ""}`} />
        <button onClick={classToggle}>JE SUIS UN BOUTON</button> */
}
{
  /* <a href="/Accueil" onClick={handleClick}>
          Clique ici
        </a> */
}
{
  /* <select name="list">
            <option value="1">Elément 1</option>
            <option value="2">Elément 2</option>
            <option value="3">Elément 3</option>
          </select> */
}
{
  /* <button  onClick={() => h()}> */
}

// const checkboxesList = [
//   'New Jersey',
//   'Maryland',
//   'Connecticut',
//   'Florida',
//   'Massachussets',
// ];

// Select activity from the list :
// <div className="bg-fuchsia-500 mx-4 my-6 px-4 py-4">
//   <div clasName={styles.buttonForm}>
//     <label>
//       <input type="checkbox" name="activity" />
//     </label>
//   </div>
// </div>
// const getDefaultCheckboxes = () =>
//   checkboxesList.map(checkbox => ({
//     name: checkbox,
//     checked: false,
//   }));
// export function useCheckboxes(defaultCheckboxes) {
//   const [checkboxes, setCheckboxes] = useState(
//     defaultCheckboxes || getDefaultCheckboxes(),
//   );
//   function setCheckbox(index, checked) {
//     const newCheckboxes = [...checkboxes];
//     newCheckboxes[index].checked = checked;
//     setCheckboxes(newCheckboxes);
//   }
//   return {
//     setCheckbox,
//     checkboxes,
//   };
// }
// const Checkbox = styled.input`
//   margin: 0px 10px 0px !important;
//   cursor: pointer;
// `;
// const CheckboxLabel = styled.label`
//   cursor: pointer;
//   display: block;
//   font-weight: normal;
// `;
// export function Checkboxes({ checkboxes, setCheckbox }) {
//   return (
//     <>
//       {checkboxes.map((checkbox, i) => (
//         <CheckboxLabel>
//           <Checkbox
//             type="checkbox"
//             checked={checkbox.checked}
//             onChange={e => {
//               setCheckbox(i, e.target.checked);
//             }}
//           />
//           {checkbox.name}
//         </CheckboxLabel>
//       ))}
//     </>
//   );
// }
// export function CheckboxRadioExample() {
//   const checkboxes = useCheckboxes();
//   return (
//     <div>
//       <Checkboxes {...checkboxes} />
//       <span>
//         Value:
//         {checkboxes.checkboxes
//           .filter(t => t.checked)
//           .map(checkbox => checkbox.name)
//           .join(', ')}
//       </span>
//     </div>
//   );
// }

// import Layout from "../components/layout";
// import { useState } from "react";
// import styles from "../styles/Home.module.css";
// import HeartButton from "../components/HeartButton";

// export default function Formulaire() {
// const [activity, setActivity] = useState([]);
// const [place, setPlace] = useState([]);
// const [number, setNumber] = useState([]);

// const handleActivityChange = (e) => setActivity(e.target.value);
// const handlePlaceChange = (e) => setPlace(e.target.value);
// const handleNumberChange = (e) => setNumber(e.target.value);

// const handleSubmit = () => {
//   console.log(number * 50, activity, place);
// };
// console.log("JE LOG PLEIN DE TRUC ", activity, place, number);

// const [animal, setAnimal] = useState("");
// const [couleur, setCouleur] = useState("");
// const [mot, setMot] = useState("");

// const handleChange = (e) => {
//   e.target.value;
// };

// return (
//   <Layout>
//     <h2 className={styles.title}>RÉSERVATIONS</h2>
//     <div className="max-w-4xl min-h-full bg-fuchsia-700 mx-4 my-6 px-4 py-4">
//       <form
//         className="flex flex-col basis-1/4 bg-fuchsia-200 text-sm m-2.5 p-2.5 h-1/2 text-left"
//         onSubmit={handleSubmit}
//         // c'est Nico qui l'a ajouté
//       >
//         <label htmlFor="Choix1">
//           <input
//             type="text"
//             value={animal}
//             handleChange={(e) => {
//               setAnimal(e.target.value);
//             }}
//           >
//             Quel est ton animal préféré?
//           </input>
//         </label>
//         <button
//           type="submit"
//           className={styles.buttonForm}
//           // onSubmit={handleSubmit}
//           // Ici ou ailleurs?
//         >
//           ok
//         </button>
//       </form>
{
  /* <p className="text-slate-600 text-base mt-4">
            Choisisez votre activité:
          </p>
        // Modifier la value de chaque activité (non générale/famille)
        <select name="activité" className={styles.select}>
            <option onChange={handleActivityChange} value={activity}>
              Danse en talons
            </option>
            <option onChange={handleActivityChange} value={activity}>
              Effeuilage Burlesque
            </option>
            <option onChange={handleActivityChange} value={activity}>
              Chair Danse
            </option>
            <option onChange={handleActivityChange} value={activity}>
              French Cancan
            </option>
          </select>
        <label htmlFor="activity">
            Danse en talons
            <input
              type="text"
              name="choice"
              className="m-2"
              id="1"
              onChange={handleActivityChange}
              value={activity}
              // handleActivityChange={(e) => {
              //   setActivity(e.target.value);
              // }}
              // handleChange={(e) => {
              //   setActivity(e.target.value);
              // }}
            />
          </label>
          <label htmlFor="activity">
            Effeuilage Burlesque
            <input
              type="text"
              name="choice"
              className="m-2"
              id="2"
              value={activity}
              onChange={handleActivityChange}
              // handleActivityChange={(e) => {
              //   setActivity(e.target.value);
              // }}
            />
          </label>
          <label htmlFor="activity">
            Chair Danse
            <input
              type="text"
              name="choice"
              className="m-2"
              id="3"
              value={activity}
              onChange={handleActivityChange}
              // handleActivityChange={(e) => {
              //   setActivity(e.target.value);
              // }}
            />
          </label>
          <label htmlFor="activity">
            French Cancan
            <input
              className="m-2"
              type="text"
              name="choice"
              id="4"
              value={activity}
              onChange={handleActivityChange}
              // required
              // onChange={(e) =>
              //   setActivity(e.target.value);
              // }
              // onChange={(e) => {
              //   handleActivityChange(e);
              // }}
            />
          </label>
         <p className="text-slate-600 text-base mt-4">
            {" "}
            Choisisez votre lieu:
          </p>
          <label htmlFor="place">
            Lyon
            <input
              className="m-2"
              type="radio"
              name="choice"
              onChange={handlePlaceChange}
              value={place}
            />
          </label>
          <label htmlFor="place">
            Valence
            <input
              className="m-2"
              type="radio"
              name="choice"
              onChange={handlePlaceChange}
              value={place}
            />
          </label>
          <label htmlFor="place">
            Grenoble
            <input
              className="m-2"
              type="radio"
              name="choice"
              onChange={handlePlaceChange}
              value={place}
            />
          </label>
          <label htmlFor="place">
            Dijon
            <input
              className="m-2"
              type="radio"
              name="choice"
              onChange={handlePlaceChange}
              value={place}
            />
          </label>
          <label htmlFor="number" className="text-slate-600 text-base">
            Choisisez le nombre de participantes:
            <input
              type="number"
              className="ml-3 w-16"
              name="participantes"
              id="participantes"
              min="2"
              max="16"
              value={number}
              onChange={handleNumberChange}
            />
          </label> */
}

{
  /*       <HeartButton />
      </div>
    </Layout>
  );
}
// <div onClick={this.handleTouchTap} className="tool">VISA <br />  {!this.state.priceBar? "$9,504.13" : "$19,008.26"}</div></li>
// <li><div className="tool">MasterCard <br />   {!this.state.priceBar? "$490.64" : "$981.28"}</div></li>
// <li><div className="tool">PayPal  <br /> {!this.state.priceBar? "$824.52" : "$1,649.04"}</div></li>
// </ul>
// <div className="paymentSlide" onClick={this.handleClick}>{this.state.slideOpen? <img src={Arrowup} alt="arrowup" className="arrowup" /> : <img src={Arrowdown} alt="arrowdown" className="arrowdown"/>}</div>
// </div>

return (
  <div className="app">
    <h4>Toggle switch in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h4>
    <ReactSwitch
      checked={checked}
      onChange={handleChange}
    />
    <div style={{ marginTop: 10 }}>Value: {checked ? 'True' : 'False'}</div>
  </div>
); */
}
