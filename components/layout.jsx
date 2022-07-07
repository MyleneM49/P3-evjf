import Head from "next/head";
import Header from "./Header";
import style from "./styles/Layout.module.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div className={style.body}>
      <Head>
        <pagetitle>{pageTitle}</pagetitle>
      </Head>
      <Header />
      <main className={style.main}>{children}</main>
    </div>
  );
}
