import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";

import flexRowStyles from "../styles/flex-row.module.scss";

export default function Home() {
  return (
    <Layout classNames={"index-page"}>
      <Head>
        <title>Semyon Tokarev</title>
      </Head>

      <section className="container" style={{ textAlign: "center" }}>
        a full stack software developer
      </section>

      <section className="container mt-40" style={{ textAlign: "center" }}>
        <div style={{ display: "inline-flex", margin: "0 auto" }}>
          <div className={flexRowStyles["flex-row"]}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zobzn/"
            >
              github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/semyon-tokarev/"
            >
              linkedin
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
