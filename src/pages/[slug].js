import React from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import Head from "../components/head";
import Layout from "../components/layout";
import Error from "./_error";

const cache = {};

// const notes = require("../data/index");
// const fetchNote = async slug => {
//   // let baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
//   // let data = await fetch(baseUrl + "relativeURL");
//
//   let note = {};
//   let exists = notes.find(note => note.slug === slug);
//
//   if (exists) {
//     try {
//       note = (await import(`../data/posts/${slug}.md`)).default;
//     } catch (e) {
//       note = {};
//     }
//   }
//
//   note = { ...note, slug };
//
//   return note;
// };

export default function Article(props) {
  const { note } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Загрузка…</div>;
  }

  // check if client, if so store the data in the cache.
  // If you don't do this check, there will be a separate cache stored on the server since Next.js does server side rendering as well.
  if (process.browser && note) {
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
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const notes = require("../data/index");
  const paths = notes.map(({ slug }) => `/${slug}`);
  // const paths = ["/fetch", "/curl"];

  return {
    paths,
    fallback: true
    // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
    // This is useful if you know that all paths will be known at build time.
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const note = (await import(`../data/posts/${slug}.md`)).default;

  return {
    props: { note: { ...note, slug } }
  };
}

// // You can not use getStaticProps with getServerSideProps. To use SSG, please remove getServerSideProps
//
// export async function getServerSideProps({ params }) {
//   const { slug } = params;
//   const note = (await import(`../data/posts/${slug}.md`)).default;
//
//   const result = {
//     props: { note: { ...note, slug } }
//   };
//
//   console.log("getServerSideProps", params);
//   console.log(JSON.stringify(result, null, 2));
//
//   return result;
// }

// Article.getInitialProps = async ({ req, res, query: { slug } }) => {
//   // if data is in cache then use the cache
//   // if not, then fetch from server
//   const note = cache[slug] || (await fetchNote(slug, req));
//
//   if (!note && res) {
//     res.statusCode = 404;
//   }
//
//   const result = { note };
//
//   console.log("getInitialProps");
//   console.log(JSON.stringify(result, null, 2));
//
//   return result;
// };
