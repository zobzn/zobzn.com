import React, { useEffect } from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "./_error";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

const notes = require("../data/index");

function Article(props) {
  const { Post } = props;

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

Article.getInitialProps = async ({ res, query: { slug } }) => {
  console.log("Article.getInitialProps", slug);

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
