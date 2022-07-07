import style from "./styles/HeartButton.module.css";
import React, { useState } from "react";

export default function HeartButton() {
  const [anim, setAnim] = useState(true);

  return (
    <div className="m-auto">
      <button
        onClick={() => setAnim(!anim)}
        className={anim ? style.noclick : style.clickon}
        type="submit"
      >
        {anim ? "je valide" : "j'ai validé"}
      </button>
    </div>
  );
}
