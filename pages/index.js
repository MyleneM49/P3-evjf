import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import LandingPageContextProvider from "./context/LandingPageContext";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <LandingPageContextProvider>
            <h1 className={styles.title}>LANDING PAGE</h1>
          </LandingPageContextProvider>
        </main>
      </div>
    </Layout>
  );
}
