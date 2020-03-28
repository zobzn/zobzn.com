import React from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "./_error";
import { getPosts } from "../lib/posts";

export default function Article({ note }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Загрузка…</div>;
  }

  if (!note || !note.html) {
    return <Error statusCode={404} />;
  }

  const { title, dateFormatted, html } = note;

  return (
    <Layout classNames={{ [`note-${note.slug}`]: true }}>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div className="article-head">
          <h1>{title}</h1>
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div className="article-info">
        <div className="article-info__wrapper">
          <div className="article-info__date">{dateFormatted}</div>
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
  const { slug } = params;
  const notes = await getPosts();
  const note = notes.find((note) => note.slug === slug);

  return {
    props: {
      note: {
        ...note,
        dateFormatted: dayjs(note.date).format("DD.MM.YYYY"),
      },
    },
  };
}
