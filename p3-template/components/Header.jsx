import Link from "next/link";
import Image from "next/image";
import LogoGlamS2 from "../public/LogoGlamS2.png";
import style from "./style/Header.module.css";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.logoTitleContainer}>
        <div className={style.itemLeft}>
          <Image
            src={LogoGlamS2}
            alt="Logo"
            width={100}
            height={100}
            // layout="fixed"
          />
        </div>
        <h1 className={style.itemRight}>EVJF - Burlesque Party</h1>
      </div>
      <div className={style.liens}>
        <Link href="/">Accueil</Link>
        <Link href="/activites">Activités</Link>
        <Link href="/lieux">Lieux</Link>
        <Link href="/formulaire">Réservations</Link>
      </div>
    </div>
    //HeaderContainer
    //     <div className="flex flex-col justify-center items-center w-full h-300px bg-red-200 border-pink-500 py-5 px-6 text-[#A53248]">
    //     // LOGO ET TITRE
    //         <div className="w-full flex justify-center items-center">
    //         // LOGO
    //            <div className="w-1/4 items-center justify-center">
    //              <Image
    //              src={LogoRose}
    //              alt="Logo"
    //              width={100}
    //              height={100}
    //              layout="fixed"
    //              />
    //            </div>
    // //           // TITRE
    //            <div className="w-3/4 items-center justify-center">
    //              <h1>EVJF - Burlesque Party</h1>
    //            </div>
    //          </div>
    //        <div className="w-full">
    //        <Link href="/">Accueil</Link>
    //        <Link href="/activites">Activités</Link>
    //        <Link href="/lieux">Lieux</Link>
    //        <Link href="/formulaire">Réservations</Link>
    //        </div>
    //     </div>
  );
}
