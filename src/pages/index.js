import React from "react";
import Link from "../components/link";
import Head from "../components/head";
import Layout from "../components/layout";

const notes = require("../data/index");

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ы</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Заметки</h2>

      {notes.length < 1 && <p>Все заметки куда-то потерялись… :-(</p>}
      {notes.length > 0 && (
        <ul className="homepage-columns__column-items zbz-links-list">
          {notes.map(({ slug, title }) => (
            <li key={slug} className={`zbz-links-list__item`}>
              <Link href={`/[slug]`} as={`/${slug}`} className="zbz-link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <br />
      <br />
      <p>
        Привет. Ну раз уж вы не поленились и доскроллили до конца страницы, то
        давайте знакомиться. Меня зовут Семен. Я — программист.
        <br />
        Здесь я записываю заметочки себе на память. В основном фигня всякая, но
        может попасться и что-то интересное. Мало ли когда пригодится…
        <br />
        Если интересно, можете посмотреть{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zobzn/"
        >
          мой github
        </Link>
        , а если очень хочется, можете даже{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLScrzauOuVwNKqYEd3UCeM_ihMCknTRKvfvNLIDRj6b2r8cp9A/viewform"
        >
          написать
        </Link>{" "}
        мне что-нибудь.
      </p>
    </Layout>
  );
}
