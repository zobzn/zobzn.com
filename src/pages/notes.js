import React from "react";
import Link from "../components/link";
import Head from "../components/head";
import Layout from "../components/layout";
import { getPosts } from "../lib/posts";
import dayjs from "dayjs";

export default function Notes({ notes }) {
  return (
    <Layout>
      <Head>
        <title>Semyon&quot;s notes about web dev things</title>
      </Head>

      <section className="container">
        <h2 className="mt-0">Notes</h2>

        {notes.length < 1 && <p>All notes are lost somewhere… :-(</p>}
        {notes.length > 0 && (
          <ul className="posts-list">
            {notes.map(({ slug, title, date }) => (
              <li key={slug} className={`posts-list__item`}>
                <Link
                  href={`/[slug]`}
                  as={`/${slug}`}
                  className={`posts-list__item-link`}
                >
                  {title}
                </Link>
                <div className={`posts-list__item-meta`}>{date}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const notes = (await getPosts()).map(({ slug, title, date }) => ({
    slug,
    title,
    date: dayjs(date).format("MMMM YYYY"),
  }));

  return {
    props: { notes },
  };
}
