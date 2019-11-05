import React, { useEffect } from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout";
import fs from "fs";

const notes = [{ slug: "hello", title: "Hello", date: "2019-11-03 14:16:03" }];

function Home(props) {
  console.log("Home props", props);

  useEffect(() => {
    console.log("Home useEffect");
  }, []);

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
          {notes.map(({ slug, date, title, html }) => (
            <li key={slug} className={`zbz-links-list__item`} data-date={date}>
              <Link href={"/" + slug}>
                <a className={`zbz-link`}>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <br />
      <br />
      <p>Футер</p>
      {false && (
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
          , а если очень хочень можете даже{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLScrzauOuVwNKqYEd3UCeM_ihMCknTRKvfvNLIDRj6b2r8cp9A/viewform"
          >
            написать
          </a>{" "}
          мне что-нибудь.
        </p>
      )}
    </Layout>
  );
}

Home.getInitialProps = async ({
  err,
  req, // HTTP request object (server only)
  res, // HTTP response object (server only)
  pathname,
  query,
  asPath,
  AppTree
}) => {
  if (!req) {
    console.log("Home.getInitialProps on client");
    return { files: [] };
  } else {
    console.log("Home.getInitialProps on server");

    // const localhosts = ["localhost", "127.0.0.1", "10.0.75.1", "192.168.0.100"];
    // const host = (req.headers.host || "").split(":")[0];
    // const isLocalHost = localhosts.includes(host);

    // const isHomepage = rootPath === router.pathname;
    // const hostname = process.browser ? window.location.hostname : null;
    // const isLocalHost = hostname && localhosts.indexOf(hostname) !== -1;

    return new Promise(resolve => {
      fs.readdir(".", (err, files) => {
        console.log("Home.getInitialProps on server resolved");

        resolve({ files });
      });
    });
  }
};

export default Home;
