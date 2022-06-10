import Layout from "../components/layout";
import LogoGlamS2 from "../public/LogoGlamS2.png";

export default function Lieux() {
  return (
    <Layout>
      <h1 className="pageTitle">Titre 2</h1>
      <main>
        <div>
          <img src={LogoGlamS2} alt="Logo" width={300} height={300} />
        </div>
      </main>
    </Layout>
  );
}
