import Head from "next/head";
import Header from "./Header";
import style from "./style/Layout.module.css";

export default function Layout({ pageTitle }) {
  return (
    <div className={style.body}>
      <Head>
        <pagetitle>{pageTitle}</pagetitle>
      </Head>
      <Header />
      <main className={style.main}></main>
    </div>
  );
}
