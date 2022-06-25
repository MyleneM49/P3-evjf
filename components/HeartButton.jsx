import style from "./style/HeartButton.module.css";
import React, { useState } from "react";

export default function HeartButton() {
  const [anim, setAnim] = useState(true);

  // const classeToggle = setAnim((anim) => !anim);
  // {setAnim(!anim)};
  // C'est pas setanim (! Inactive)
  // C'est setanim ((var) =>! Var)
  // Setanim c'est setanim ((animState) =>!animstate))

  return (
    <div className="m-auto">
      <button
        onClick={() => setAnim(!anim)}
        className={anim ? style.noclick : style.clickon}
      >
        {/* className={anim ? style.toggleButton : style.toggleClose}
        } ease-in-out duration-700`}
      > */}
        {anim ? "je valide" : "j'ai validé"}
      </button>
    </div>
  );
}

// className={setAnim + (anim ? style.toogleClose : "")}

{
  /* className={style.box} */
}
{
  /* {`box ${anim ? "animclasse" : ""}`} */
}
// export default function HeartButton() {
//   const [anim, setAnim] = useState(false);
//   const classeToggle = () => {
//     setAnim(!anim);
//   };
//   let classeAnim = "";
//   if (anim) {
//     classeAnim += "animclasse";
//   } else {
//     classeAnim = "box";
//   }

//   return (
//     <div className="Azz">
//       <div className={`box ${classeAnim}`}>
//         <button className={style.button} onClick={classeToggle}>
//           Ceci n est pas un bouton
//         </button>
//       </div>
//     </div>
//   );
// }
