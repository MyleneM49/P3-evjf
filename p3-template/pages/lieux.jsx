// import reactDom from "react-dom";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
// import Header from "../components/header";
// import Head from "next/head";

// export default function Activites({ activites }) {
export default function Lieux() {
  const [count, setCount] = useState(0);
  console.log("Component re-render");
  useEffect(() => {
    console.log(`Youhou you clicked ${count}`);
  });

  return (
    <Layout>
      <h1 className="pageTitle">Titre 2</h1>
      <main className="text-blue bg-100">
        xyz
        <div className="Minuteur">
          <h1>Click Counter:</h1>
          <h1>{count}</h1>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Click
          </button>
        </div>
      </main>
    </Layout>
  );
}
