import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "./_error";
import dayjs from "dayjs";

const cache = {};
const notes = require("../data/index");

const fetchNote = async slug => {
  // let baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  // let data = await fetch(baseUrl + "relativeURL");

  let note = {};
  let exists = notes.find(note => note.slug === slug);

  if (exists) {
    try {
      note = (await import(`../data/posts/${slug}.md`)).default;
    } catch (e) {
      note = {};
    }
  }

  note = { ...note, slug };

  return note;
};

function Article(props) {
  const { note } = props;

  // check if client, if so store the data in the cache.
  // If you don't do this check, there will be a separate cache stored on the server since Next.js does server side rendering as well.
  if (process.browser) {
    cache[note.slug] = note;
  }

  if (!note || !note.html) {
    return <Error statusCode={404} />;
  }

  const { meta, html } = note;

  return (
    <Layout classNames={{ [`note-${note.slug}`]: true }}>
      <Head>
        <title>{meta.title}</title>
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

Article.getInitialProps = async ({ req, res, query: { slug } }) => {
  // if data is in cache then use the cache
  // if not, then fetch from server
  const note = cache[slug] || (await fetchNote(slug, req));

  if (!note && res) {
    res.statusCode = 404;
  }

  return { note };
};

export default Article;
