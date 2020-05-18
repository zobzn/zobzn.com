import { format as formatDate } from "date-fns";
import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import Link from "../components/link";
import { getPosts } from "../lib/posts";

export default function Notes({ notes }) {
  return (
    <Layout>
      <Head>
        <title>Semyon&apos;s notes about web dev things</title>
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
    date: formatDate(date, "MMMM yyyy"),
  }));

  return {
    props: { notes },
  };
}
