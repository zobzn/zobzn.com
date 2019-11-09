import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "./_error";
import dayjs from "dayjs";

const notes = require("../data/index");

function Article({ post }) {
  if (!post) {
    return <Error statusCode={404} />;
  }

  const { meta, html } = post;

  return (
    <Layout>
      <Head>
        <title>ы</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <div className="article-head">
          <h1>{meta.title}</h1>
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div className="article-info">
        <div className="article-info__wrapper">
          <div className="article-info__date">
            {dayjs(meta.date).format("DD.MM.YYYY")}
          </div>
          {false && (
            <ul className="article-info__tags">
              <li className="article-info__tag">
                <a href="/tags/windows">windows</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
}

console.log("process.browser", process.browser);

Article.getInitialProps = async ({ res, query: { slug } }) => {
  console.log("Article.getInitialProps");

  const exists = notes.find(note => note.slug === slug);

  let post = null;

  if (exists) {
    try {
      post = (await import(`../data/posts/${slug}.md`)).default;
    } catch (e) {}
  }

  if (!post && res) {
    res.statusCode = 404;
  }

  return { post };
};

export default Article;
