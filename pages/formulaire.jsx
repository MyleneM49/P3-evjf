import Layout from "../components/layout";

export default function Formulaire() {
  return (
    <Layout pageTitle="RÉSERVATIONS">
      <div className="max-w-4xl h-60 m-auto bg-red-500  my-4 mx-4">
        <h1 className="pageTitle">contacteMe</h1>
        <form>
          <input type="checkbox" name="choice" value="0" id="ans0" />
          <span id="choice0"></span>
        </form>
      </div>
      /
    </Layout>
  );
}
