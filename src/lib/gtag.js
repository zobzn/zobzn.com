export const GA_TRACKING_ID = "UA-47099248-1";
export const GTAG_SCRIPT_URL =
  process.env.NODE_ENV === "production"
    ? `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    : null;

let isInited = false;

function init() {
  if (!isInited) {
    isInited = true;
    push("js", new Date());
  }

  return true;
}

function push(...args) {
  if (process.env.NODE_ENV !== "production") {
    console.log("gtag", ...args);
  }

  (window.dataLayer = window.dataLayer || []).push(args);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  init() &&
    push("config", GA_TRACKING_ID, {
      page_path: url
    });
}
