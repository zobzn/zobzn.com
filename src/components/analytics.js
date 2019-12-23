import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../lib/gtag";

export default function Analytics() {
  const { asPath: url } = useRouter();

  useEffect(() => {
    pageview(url);
  }, [url]);

  return <></>;
}
