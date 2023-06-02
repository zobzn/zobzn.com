import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

import Error from "../_error";
import Head from "../../components/head";
import Layout from "../../components/layout";
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
      <div className="container">
        <article>
          <div className="article-head">
            <h1>{job.title}</h1>
          </div>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: job.html }}
          />
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const jobs = await getJobs();
  const paths = jobs.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const jobs = await getJobs();
  const item = jobs.find((job) => job.slug === slug);

  const job = {
    title: item.title,
    html: item.html,
  };

  return {
    props: { job },
  };
};
