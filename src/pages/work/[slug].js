import React from "react";
import { useRouter } from "next/router";
import Head from "../../components/head";
import Layout from "../../components/layout";
import Error from "../_error";
import { getJobs } from "../../lib/jobs";

export default function Article({ job }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Загрузка…</div>;
  }

  if (!job || !job.html) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{job.title}</title>
      </Head>
      <article>
        <div className="article-head">
          <h1>{job.title}</h1>
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: job.html }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const jobs = await getJobs();
  const paths = jobs.map(({ slug }) => `/work/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const jobs = await getJobs();
  const job = jobs.find((job) => job.slug === slug);

  return {
    props: { job },
  };
}
