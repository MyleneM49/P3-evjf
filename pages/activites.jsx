import Layout from "../components/layout";
// import { useState, useEffect } from "react";

export default function Activites() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });
  return (
    <Layout>
      <h1 className="pageTitle">Titre 1</h1>
      <main>
        {/* {count}
        <Activites /> */}
        <div className="options">
          <div
            className="option active"
            style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking"></i>
              </div>
              <div className="info">
                <div className="main">Blonkisoaz</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);"
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-snowflake"></i>
              </div>
              <div className="info">
                <div className="main">Oretemauw</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);"
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-tree"></i>
              </div>
              <div className="info">
                <div className="main">Iteresuselle</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);"
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-tint"></i>
              </div>
              <div className="info">
                <div className="main">Idiefe</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);"
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-sun"></i>
              </div>
              <div className="info">
                <div className="main">Inatethi</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
        </div>

        {/* <a
          href="http://victorofvalencia-blog.tumblr.com"
          target="_blank"
          class="credit"
        >
          Photos from Victor of Valencia on tumblr
        </a> */}
      </main>
    </Layout>
  );
}
