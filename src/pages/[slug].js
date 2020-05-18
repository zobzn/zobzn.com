import { format as formatDate } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import { getPosts } from "../lib/posts";
import Error from "./_error";

export default function Article({ note }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Загрузка…</div>;
  }

  if (!note || !note.html) {
    return <Error statusCode={404} />;
  }

  const { title, date, html } = note;

  return (
    <Layout classNames={{ [`note-${note.slug}`]: true }}>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="article">
        <h1>{title}</h1>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div className="article-info">
        <div className="article-info__wrapper">
          <div className="article-info__date">{date}</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const notes = await getPosts();
  const paths = notes.map(({ slug }) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const notes = (await getPosts()).map(({ slug, title, date, html }) => ({
    slug,
    title,
    date: formatDate(date, "dd.MM.yyyy"),
    html,
  }));

  const { slug } = params;
  const note = notes.find((note) => note.slug === slug);

  return {
    props: { note },
  };
}
