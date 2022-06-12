import Link from "next/link";
import Image from "next/image";
// import LogoGlamS2 from "../public/LogoGlamS2.png";
import LogoUniSeul from "../public/LogoUniSeul.jpg";
import style from "./style/Header.module.css";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.logoTitleContainer}>
        <div className={style.itemLeft}>
          <Image src={LogoUniSeul} alt="Logo" width={250} height={250} />
        </div>
        <h1 className={style.itemRight}>Fémini T Party</h1>
      </div>
      <div className={style.liens}>
        <Link href="/">Accueil</Link>
        <Link href="/activites">Activités</Link>
        <Link href="/lieux">Lieux</Link>
        <Link href="/formulaire">Réservations</Link>
        <Link href="/accueil">+</Link>
      </div>
    </div>
  );
}
