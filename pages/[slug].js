import React, { useEffect } from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "next/error";

const notes = require("../data/index");

function Article({ Post }) {
  if (!Post) {
    return <Error statusCode={404} />;
  }

  const { meta, html } = Post;

  return (
    <Layout>
      <Head>
        <title>ы</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meta, null, 2) }}
      ></pre>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
}

Article.getInitialProps = async ({ res, query: { slug } }) => {
  const exists = notes.find(note => note.slug === slug);
  let Post = null;

  if (exists) {
    try {
      Post = (await import(`../data/posts/${slug}.md`)).default;
    } catch (e) {}
  }

  if (!Post && res) {
    res.statusCode = 404;
  }

  return { Post };
};

export default Article;
