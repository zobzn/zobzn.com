export const GA_TRACKING_ID = "UA-47099248-1";

function push(...args) {
  if (process.env.NODE_ENV !== "production") {
    console.log("gtag", ...args);
  }

  (window.dataLayer = window.dataLayer || []).push(args);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  push("config", GA_TRACKING_ID, {
    page_path: url
  });
}
