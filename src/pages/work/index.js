import React from "react";
import Layout from "../../components/layout";
import Head from "../../components/head";
import { getJobs } from "../../lib/jobs";
import Link from "../../components/link";

import styles from "../../styles/work.module.scss";

export default function Work(props) {
  // console.log(props);

  const { jobs } = props;

  return (
    <Layout>
      <Head>
        <title>Semyon&quot;s work</title>
      </Head>
      <div className={"container " + styles.list}>
        {jobs.map((job) => (
          <div key={job.slug} className={styles.item}>
            <div className={styles.itemHead}>
              {job.thumbnail && (
                <Link href={`/work/[slug]`} as={`/work/${job.slug}`}>
                  <img src={job.thumbnail} alt="" />
                </Link>
              )}
            </div>
            <div className={styles.itemMain}>
              <Link
                className={styles.itemTitle}
                href={`/work/[slug]`}
                as={`/work/${job.slug}`}
              >
                {job.title}
              </Link>
              <div className={styles.itemDescription}>{job.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const jobs = (await getJobs())
    .filter((job) => !job.draft)
    .map(({ slug, title, thumbnail, description = null }) => ({
      slug,
      title,
      thumbnail,
      description,
    }));

  return {
    props: { jobs },
  };
}
