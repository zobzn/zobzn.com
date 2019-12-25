export const GA_TRACKING_ID = "UA-47099248-1";

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.NODE_ENV !== "test"
  ) {
    console.log("pageview", url);
  }

  gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}
