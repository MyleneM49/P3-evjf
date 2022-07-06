import Link from "next/link";
import Logo from "../public/Logo.png";
import style from "./styles/Header.module.css";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.logoTitleContainer}>
        <div className={style.itemLeft}>
          <img src={Logo.src} alt="Logo" width="350px" />
        </div>
        <h1 className={style.itemRight}>Fémini T Party</h1>
      </div>
      <div className={style.liens}>
        <Link href="/">Accueil</Link>
        <Link href="/activites">Activités</Link>
        <Link href="/lieux">Lieux</Link>
        <Link href="/formulaire">Réservations</Link>
        <Link href="/formulaire-tests">+</Link>
      </div>
    </div>
  );
}
