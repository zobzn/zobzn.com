import React from "react";
import Link from "../components/link";
import Head from "../components/head";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <Head>
      <title>Start</title>
    </Head>
    <p>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </p>
  </Layout>
);
