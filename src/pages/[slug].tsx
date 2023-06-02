import { GetStaticPaths, GetStaticProps } from "next";
import { format as formatDate } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

import Error from "./_error";
import Head from "../components/head";
import Layout from "../components/layout";
import { Markdown } from "../components/markdown";
import { getAllPosts } from "../lib/posts";

export default function Article({ note }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Загрузка…</div>;
  }

  if (!note || !note.html) {
    return <Error statusCode={404} />;
  }

  const { title, date, html, markdown } = note;

  return (
    <Layout classNames={{ [`note-${note.slug}`]: true }}>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="article">
        <h1>{title}</h1>
        {false && (
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
        <div className="article-body">
          <Markdown markdown={markdown} />
        </div>
      </article>
      <div className="article-info">
        <div className="article-info__wrapper">
          <div className="article-info__date">{date}</div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await getAllPosts();
  const paths = notes.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const notes = (await getAllPosts()).map(
    ({ slug, title, date, html, markdown }) => ({
      slug,
      title,
      date: formatDate(date, "dd.MM.yyyy"),
      html,
      markdown,
    })
  );

  const { slug } = params;
  const note = notes.find((note) => note.slug === slug);

  return {
    props: { note },
  };
};
