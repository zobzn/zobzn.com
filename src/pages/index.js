import React from "react";
import Link from "../components/link";
import Head from "../components/head";
import Layout from "../components/layout";
import { getPosts } from "../lib/posts";
import dayjs from "dayjs";

export default function Home({ notes }) {
  return (
    <Layout>
      <Head>
        <title>ы</title>
      </Head>

      <section>
        <h2 className="mt-0">Заметки</h2>

        {notes.length < 1 && <p>Все заметки куда-то потерялись… :-(</p>}
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
      <section>
        <p>
          Привет. Ну раз уж вы не поленились и доскроллили до конца страницы, то
          давайте знакомиться. Меня зовут Семен. Я — программист.
          <br />
          Здесь я записываю заметочки себе на память. В основном фигня всякая,
          но может попасться и что-то интересное. Мало ли когда пригодится…
          <br />
          Если интересно, можете посмотреть{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zobzn/"
          >
            мой github
          </a>
          , а если очень хочется, можете даже{" "}
          <Link href="/contact">написать</Link> мне что-нибудь.
        </p>
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
