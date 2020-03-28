import React from "react";
import dayjs from "dayjs";
import Layout from "../../components/layout";
import Head from "../../components/head";
import { getJobs } from "../../lib/jobs";
import Link from "../../components/link";

export default function Work(props) {
  // console.log(props);

  const { jobs } = props;

  return (
    <Layout>
      <Head>
        <title>ы</title>
      </Head>
      <div>
        {jobs.map((job) => (
          <div key={job.slug}>
            <Link href={`/work/[slug]`} as={`/work/${job.slug}`}>
              {job.title}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const jobs = (await getJobs()).map((job) => ({
    ...job,
    dateFormatted: dayjs(job.date).format("MMMM YYYY"),
  }));

  return {
    props: { jobs },
  };
}
