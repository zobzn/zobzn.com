import React, { useEffect } from "react";
import { pageview } from "../lib/analytics";

export default function Analytics() {
  useEffect(() => {
    pageview();
  }, []);

  return <></>;
}
