import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import styles from "./index.module.scss";

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
          <div className={styles["flex-row"]}>
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
            <a
              href="/download/cv-tokarev-web-dev-2020.pdf"
              download="cv-tokarev-web-dev-2020.pdf"
            >
              resume
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
