import React from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "./_error";
import { getPostsInfo } from "../lib/posts";

export default function Article(props) {
  const router = useRouter();
  const { note } = props;

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
  const notes = await getPostsInfo();
  const paths = notes.map(({ slug }) => `/${slug}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = (await import(`../../content/posts/${slug}.md`)).default;
  const note = {
    slug,
    title: data.meta.title,
    date: data.meta.date,
    dateFormatted: dayjs(data.meta.date).format("DD.MM.YYYY"),
    html: data.html,
  };

  return {
    props: { note },
  };
}
