import Head from "next/head";
import Header from "./Header";
// import Image from "next/image";
// import fondAccueil from "../public/fondAccueil.jpg";
import style from "./style/Layout.module.css";

// import CircleButton from "../components/CircleButton";

export default function Layout({ pageTitle }) {
  return (
    <div className={style.body}>
      <Head>
        <pagetitle>{pageTitle}</pagetitle>
      </Head>
      <Header />
      <main className={style.main}>
        Hasta la vista Baby!! ici image
        {/* <CircleButton /> */}
      </main>
    </div>
  );
}

{
  /* className="flex flex-col w-full h-300px bg-red-200 border-pink-500 py-5 px-6 text-[#A53248]"> */
}
{
  /* <div className="fixed"> */
}
{
  /* // <div className="w-full justify-evenly">
        // <div className="" */
}
//   <Image
//   src={LogoRose}
//   alt="Logo"
//   width={100}
//   height={100}
//   layout="fixed"
// />
// // </div>
// // <div className="text-center text-4xl my-4">
// <h1>EVJF - Burlesque Party</h1>
// </div>
// </div>
// <div className="text-center space-x-5">
//   <Link href="/">Accueil</Link>
//   <Link href="/activites">Activités</Link>
//   <Link href="/lieux">Lieux</Link>
//   <Link href="/formulaire">Réservations</Link>
// </div>
// </div>
// );
